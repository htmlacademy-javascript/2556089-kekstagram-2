import {isEscapeKey} from './utils.js';

const pageBody = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form'); // Находим форму
const uploadFileControl = uploadForm.querySelector('#upload-file'); // Находим поле для загрузки файла
const photoEditorForm = uploadForm.querySelector ('.img-upload__overlay'); // Находим форму редактирования фото
const buttonResetUploadForm = uploadForm.querySelector('.img-upload__cancel'); // Находим кнопку закрытия формы
const buttonFormSubmit = uploadForm.querySelector('.img-upload__submit'); // Находим кнопку отправки формы
const hashtagsInput = uploadForm.querySelector('.text__hashtags');// Находим поле для ввода хэштегов и чистим его от пробелов
const commentInput = uploadForm.querySelector('.text__description'); // Находим поле для ввода комментария
//const MAX_HASHTAG_SYMBOLS = 20;
const MAX_COMMENT_SYMBOLS = 140;


const UploadPhotoForm = () => {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
    uploadFileControl.value = '';
  });
};

const closeUploadForm = () => {
  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadForm();
  }
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});


const regexp = /^#[a-zа-яё0-9]{1,19}$/i;

const validateHashTag = (value) => {
  const trimmedValue = value.trim().toLowerCase();

  if (trimmedValue.length === 0) {
    return true;
  }

  // if (trimmedValue.length === 1 && trimmedValue[0] === '#') {
  //   return true;
  // }
  // return regexp.test(trimmedValue);

};

pristine.addValidator(hashtagsInput, (validateHashTag), 'Хэштег должен начинаться с символа "#", содержать только буквы и цифры. Длина хэштега не должна превышать 20 символов и он не должен содержать пробелы');


// pristine.addValidator(hashtagsInput, (value) => {

//   const hashtag = value.length <= MAX_HASHTAG_SYMBOLS;
//   return hashtag;

// },

// 'Максимальное количество символов Хэштега: 20');

// pristine.addValidator(hashtagsInput, (value) => {

//   const hashtagFirstSymbol = value[0] === '#';
//   return hashtagFirstSymbol;
// },

// 'Хэштег должен начинаться с символа "#"');

pristine.addValidator(commentInput, (value) => {

  const commentLength = value.length <= MAX_COMMENT_SYMBOLS ;
  return commentLength;
},

'Максимальное количество символов: 140');


uploadForm.addEventListener('submit',(evt) => {

  evt.preventDefault();
  console.log ('Нажата кнопка отправки формы');

});

buttonResetUploadForm.addEventListener('click', closeUploadForm);

export {UploadPhotoForm};
