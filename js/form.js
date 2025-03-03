import {isEscapeKey} from './utils.js';
import {createSliderEffects, applyOriginalEffect} from './create-slider-effects.js';
import {MAX_HASHTAG_SYMBOLS, MAX_COMMENT_SYMBOLS, MAX_QUANTITY_HASHTAGS, regexp, BASE_URL, Route} from './const.js';
import {changeScalePhoto, resetScalePhoto} from './change-scale-photo.js';
import {uploadFile} from './upload-file.js';

const pageBody = document.querySelector('body');
const uploadFormPhoto = pageBody.querySelector('.img-upload__form'); // Находим форму
const uploadFileControl = uploadFormPhoto.querySelector('#upload-file'); // Находим поле для загрузки файла
const photoEditorForm = uploadFormPhoto.querySelector ('.img-upload__overlay'); // Находим форму редактирования фото
const buttonResetUploadFormPhoto = uploadFormPhoto.querySelector('.img-upload__cancel'); // Находим кнопку закрытия формы
const buttonSendUploadFormPhoto = uploadFormPhoto.querySelector('.img-upload__submit');
const hashtagsInput = uploadFormPhoto.querySelector('.text__hashtags');// поле для ввода хэштегов
const commentInput = uploadFormPhoto.querySelector('.text__description'); // поле для ввода комментария

const uploadPhotoPreview = uploadFormPhoto.querySelector('.img-upload__preview img');
const changeEffectInput = uploadFormPhoto.querySelector('.effect-level__value');// здесь записываем value при движении ползунка.

let errorFormMessage;

const unsuccessfulSendFormMessage = () => {

  const errorFormMessageTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');

  errorFormMessage = errorFormMessageTemplate.cloneNode(true);

  document.body.appendChild(errorFormMessage);
};

const closeErrorFormMessage = () => {
  const errorFormButton = document.querySelector('.error__button');
  errorFormButton.addEventListener ('click', () => {
    errorFormMessage.remove();
  });

};

const pristine = new Pristine(uploadFormPhoto, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {

    if (errorFormMessage) {
      evt.preventDefault();
      errorFormMessage.remove();
      errorFormMessage = null;
      return;
    }

    if (document.activeElement !== commentInput && document.activeElement !== hashtagsInput) {
      evt.preventDefault();
      closeUploadFormPhoto();
    }
  }
};
function openUploadFormPhoto () {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
    applyOriginalEffect();
    uploadFile ();
  });
}

function closeUploadFormPhoto () {
  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  pristine.reset();
  uploadFileControl.value = '';
  resetScalePhoto();
  uploadFormPhoto.reset();
  uploadPhotoPreview.style.filter = '';
  changeEffectInput.value = '';
}

pristine.addValidator(hashtagsInput, (value) => {

  const hashtagArray = value.trim().split(' ');

  for (let i = 0; i < hashtagArray.length; i++) {
    if (hashtagArray[i].length > MAX_HASHTAG_SYMBOLS) {
      return false;
    }
  }
  return true;

},

'Максимальное количество символов Хэштега: 20');

pristine.addValidator(hashtagsInput, (value) => {
  const hashtagArray = value.trim().split(/\s+/);

  if (hashtagArray.length > MAX_QUANTITY_HASHTAGS) {
    return false;
  }
  return true;
},
'Максимальное количество Хэштегов: 5');

pristine.addValidator(hashtagsInput, (value) => {

  const hashtagArray = value.trim().toLowerCase().split(/\s+/);
  const hashtagSet = new Set(hashtagArray);
  if (hashtagSet.size !== hashtagArray.length) {
    return false;
  }
  return true;
},

'Хештеги не должны повторяться, are you nuts?');

pristine.addValidator(hashtagsInput, (value) => {

  if (value.trim().length === 0) {
    return true;
  }

  const hashtagArray = value.trim().split(/\s+/);

  for (let i = 0; i < hashtagArray.length; i++) {
    const currentHashtag = hashtagArray[i];
    const isValid = regexp.test (currentHashtag);

    if (!isValid) {
      return false;
    }
  }
  return true;
},
'Хэштег должен начинаться с символа "#" и состоять не менее чем из двух символов. В хэштеге недопустимы любые спецсимволы');

pristine.addValidator(commentInput, (value) => {

  const commentLength = value.length <= MAX_COMMENT_SYMBOLS ;
  return commentLength;
},

'Максимальное количество символов: 140');

uploadFormPhoto.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {

    buttonSendUploadFormPhoto.setAttribute('disabled', 'true');

    const formData = new FormData (evt.target);

    fetch (`${BASE_URL}${Route.SEND_DATA}`,
      {
        method: 'POST',
        body: formData,
      })

      .then ((response) => {
        if(!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json;
      })

      .then (() => {
        closeUploadFormPhoto();

      })

      .catch (() => {
        unsuccessfulSendFormMessage();
        closeErrorFormMessage ();
      })

      .finally (() => {
        buttonSendUploadFormPhoto.removeAttribute('disabled');
      });
  }
});


buttonResetUploadFormPhoto.addEventListener('click', closeUploadFormPhoto);

createSliderEffects ();
changeScalePhoto ();

export {openUploadFormPhoto};
