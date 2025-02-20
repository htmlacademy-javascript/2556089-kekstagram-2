import {isEscapeKey} from './utils.js';

const pageBody = document.querySelector('body');
const uploadForm = pageBody.querySelector('.img-upload__form'); // Находим форму
const uploadFileControl = uploadForm.querySelector('#upload-file'); // Находим поле для загрузки файла
const photoEditorForm = uploadForm.querySelector ('.img-upload__overlay'); // Находим форму редактирования фото
const buttonResetUploadForm = uploadForm.querySelector('.img-upload__cancel'); // Находим кнопку закрытия формы
//const buttonFormSubmit = uploadForm.querySelector('.img-upload__submit'); // Находим кнопку отправки формы
const hashtagsInput = uploadForm.querySelector('.text__hashtags');// поле для ввода хэштегов
const commentInput = uploadForm.querySelector('.text__description'); // поле для ввода комментария
const MAX_HASHTAG_SYMBOLS = 20;
const MAX_COMMENT_SYMBOLS = 140;
const MAX_QUANTITY_HASHTAGS = 5;

const regexp = /^#[a-zа-яё0-9]+$/i;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && document.activeElement !== commentInput && document.activeElement !== hashtagsInput) {
    evt.preventDefault();
    evt.stopPropagation();
    closeUploadForm();
  }
};


const UploadPhotoForm = () => {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);

  });
};

const closeUploadForm = () => {
  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadForm.reset();
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
  const hashtagArray = value.trim().split(' ');

  for (let i = 0; i < hashtagArray.length; i++) {
    for (let j = i + 1; j < hashtagArray.length; j++) {
      if (hashtagArray[i] === hashtagArray[j]) {

        return false;
      }
    }
  }
  return true;
},

'Хештеги не должны повторяться, you know ?');

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
'Хэштег должен начинаться с символа "#" и состоять не менее чем из двух символов. В хэштеге недопустимые символы');


pristine.addValidator(commentInput, (value) => {

  const commentLength = value.length <= MAX_COMMENT_SYMBOLS ;
  return commentLength;
},

'Максимальное количество символов: 140');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log('Нажата кнопка отправки формы');
  const isValid = pristine.validate();
  if (isValid) {
    closeUploadForm();
  }
});

buttonResetUploadForm.addEventListener('click', closeUploadForm);

export {UploadPhotoForm};
