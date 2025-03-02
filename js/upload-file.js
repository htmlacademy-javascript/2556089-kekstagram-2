import {FILE_TYPES} from './const.js';
const pageBody = document.querySelector('body');
const uploadFormPhoto = pageBody.querySelector('.img-upload__form');
const uploadFileControl = uploadFormPhoto.querySelector('#upload-file');
const uploadPhotoPreview = uploadFormPhoto.querySelector('.img-upload__preview img');

const uploadFile = () => {
  const file = uploadFileControl.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    uploadPhotoPreview.src = URL.createObjectURL(file);
  }
};

export {uploadFile};
