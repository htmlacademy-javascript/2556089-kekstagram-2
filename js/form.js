import {isEscapeKey} from './utils.js';

const pageBody = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form'); // Находим форму
const uploadFileControl = uploadForm.querySelector('#upload-file'); // Находим поле для загрузки файла
const photoEditorForm = uploadForm.querySelector ('.img-upload__overlay'); // Находим форму редактирования фото
const buttonResetUploadForm = uploadForm.querySelector('.img-upload__cancel'); // Находим кнопку закрытия формы
//const buttonFormSubmit = uploadForm.querySelector('.img-upload__submit'); // Находим кнопку отправки формы
const hashtagsInput = uploadForm.querySelector('.text__hashtags');// Находим поле для ввода хэштегов и чистим его от пробелов
const commentInput = uploadForm.querySelector('.text__description'); // Находим поле для ввода комментария
const MAX_HASHTAG_SYMBOLS = 20;
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


pristine.addValidator(commentInput, (value) => {

  if (value.length === 0){
    return true;
  }
});

pristine.addValidator(hashtagsInput, (value) => {

  const hashtag = value.length <= MAX_HASHTAG_SYMBOLS;
  return hashtag;
},

'Максимальное количество символов Хэштега: 20');


pristine.addValidator(hashtagsInput, (value) => {
  const valueArray = value.trim().split(' ');

  if (valueArray.length > 5) {
    return false;
  }
  return true;
},
'Максимальное количество Хэштегов: 5');

pristine.addValidator(commentInput, (value) => {
  const valueArray = value.trim().split(' ');

  const index = valueArray.findIndex((item)=> {
    const v = item.trim().toLowerCase();
    return !regexp.test(v);
  });

  return index === -1;
},
'Все плохо с символами');


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
