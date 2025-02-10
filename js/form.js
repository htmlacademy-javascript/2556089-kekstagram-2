import {isEscapeKey} from './utils.js';

const pageBody = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form'); // Находим форму
const uploadFileControl = uploadForm.querySelector('#upload-file'); // Находим поле для загрузки файла
const photoEditorForm = uploadForm.querySelector ('.img-upload__overlay'); // Находим форму редактирования фото
const buttonResetUploadForm = uploadForm.querySelector('.img-upload__cancel'); // Находим кнопку закрытия формы


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

buttonResetUploadForm.addEventListener('click', closeUploadForm);

export {UploadPhotoForm};
