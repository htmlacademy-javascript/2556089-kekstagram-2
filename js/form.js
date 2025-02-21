import {isEscapeKey} from './utils.js';

const MAX_HASHTAG_SYMBOLS = 20;
const MAX_COMMENT_SYMBOLS = 140;
const MAX_QUANTITY_HASHTAGS = 5;

const pageBody = document.querySelector('body');
const uploadFormPhoto = pageBody.querySelector('.img-upload__form'); // Находим форму
const uploadFileControl = uploadFormPhoto.querySelector('#upload-file'); // Находим поле для загрузки файла
const photoEditorForm = uploadFormPhoto.querySelector ('.img-upload__overlay'); // Находим форму редактирования фото
const buttonResetUploadFormPhoto = uploadFormPhoto.querySelector('.img-upload__cancel'); // Находим кнопку закрытия формы
const hashtagsInput = uploadFormPhoto.querySelector('.text__hashtags');// поле для ввода хэштегов
const commentInput = uploadFormPhoto.querySelector('.text__description'); // поле для ввода комментария

const regexp = /^#[a-zа-яё0-9]+$/i;

const pristine = new Pristine(uploadFormPhoto, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && document.activeElement !== commentInput && document.activeElement !== hashtagsInput) {
    evt.preventDefault();
    evt.stopPropagation();
    closeUploadFormPhoto();
  }
};

const openUploadFormPhoto = () => {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);

  });
};

const closeUploadFormPhoto = () => {
  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadFormPhoto.reset();
  pristine.reset();
  uploadFileControl.value = '';

};

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
  const hashtagArray = value.trim().split(' ');

  if (hashtagArray.length > MAX_QUANTITY_HASHTAGS) {
    return false;
  }
  return true;
},
'Максимальное количество Хэштегов: 5');

pristine.addValidator(hashtagsInput, (value) => {
  const hashtagSet = new Set();
  const hashtags = value.trim().toLowerCase().split(' ');

  for (const hashtag of hashtags) {
    if (hashtagSet.has(hashtag)) {
      return false;
    } else {
      hashtagSet.add(hashtag);
    }
  }
  return true;
},
'Хештеги не должны повторяться, are you nuts?');

pristine.addValidator(hashtagsInput, (value) => {

  if (value.trim().length === 0) {
    return true;
  }

  const hashtagArray = value.trim().split(' ');

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
    closeUploadFormPhoto();
  }
});

buttonResetUploadFormPhoto.addEventListener('click', closeUploadFormPhoto);

export {openUploadFormPhoto};
