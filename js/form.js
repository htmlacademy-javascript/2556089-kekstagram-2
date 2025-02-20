import {isEscapeKey} from './utils.js';

const pageBody = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form'); // Находим форму
const uploadFileControl = uploadForm.querySelector('#upload-file'); // Находим поле для загрузки файла
const photoEditorForm = uploadForm.querySelector ('.img-upload__overlay'); // Находим форму редактирования фото
const buttonResetUploadForm = uploadForm.querySelector('.img-upload__cancel'); // Находим кнопку закрытия формы
//const buttonFormSubmit = uploadForm.querySelector('.img-upload__submit'); // Находим кнопку отправки формы
const hashtagsInput = uploadForm.querySelector('.text__hashtags');// поле для ввода хэштегов
const commentInput = uploadForm.querySelector('.text__description'); // поле для ввода комментария
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

pristine.addValidator(hashtagsInput, (value) => {
  const HashtagArray = value.trim().split(' ');
  for (let i = 0; i < HashtagArray.length; i++) {
    const currentHashtag = HashtagArray[i];
    const isValid = regexp.test (currentHashtag);

    if (!isValid) {
      return false;
    }
  }

  return true;
  // const index = valueArray.findIndex((item)=> {
  //   const v = item.trim().toLowerCase();
  //   console.log (v);
  //   return !regexp.test(v);
  // });

  // return index === -1;
},
'Ошибка в поле хэштега (в хештеге недопустимые символы / хештег повторяется');


pristine.addValidator(commentInput, (value) => {

  const commentLength = value.length <= MAX_COMMENT_SYMBOLS ;
  return commentLength;
},

'Максимальное количество символов: 140');

uploadForm.addEventListener('submit',(evt) => {
  evt.preventDefault();
  console.log ('Нажата кнопка отправки формы');
  pristine.validate();


});

buttonResetUploadForm.addEventListener('click', closeUploadForm);

export {UploadPhotoForm};
