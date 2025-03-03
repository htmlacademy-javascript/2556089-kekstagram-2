import {FILE_TYPES} from './const.js';

const pageBody = document.querySelector('body');
const uploadFormPhoto = pageBody.querySelector('.img-upload__form');
const uploadFileControl = uploadFormPhoto.querySelector('#upload-file');
const uploadPhotoPreview = uploadFormPhoto.querySelector('.img-upload__preview img');
const miniUploadPhotoPreview = uploadFormPhoto.querySelectorAll('.effects__preview');

const uploadFile = () => {
  const file = uploadFileControl.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const fileUrl = URL.createObjectURL(file);
    uploadPhotoPreview.src = fileUrl;

    miniUploadPhotoPreview.forEach ((preview) => {
      preview.style.backgroundImage = `url("${fileUrl}")`;
    });

  }
};

export {uploadFile};
