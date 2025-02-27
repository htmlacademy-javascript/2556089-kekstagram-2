import {DEFAULT_SCALE_PHOTO, STEP_SCALE_PHOTO, MIN_SCALE_VALUE_PHOTO,MAX_SCALE_VALUE_PHOTO} from './const.js';

const pageBody = document.querySelector('body');
const uploadFormPhoto = pageBody.querySelector('.img-upload__form'); // Находим форму
const buttonScaleControlSmaller = uploadFormPhoto.querySelector('.scale__control--smaller');
const buttonScaleControlBigger = uploadFormPhoto.querySelector('.scale__control--bigger');
const scaleValueInput = uploadFormPhoto.querySelector('.scale__control--value');
const uploadPhotoPreview = uploadFormPhoto.querySelector('.img-upload__preview img');

const changeScalePhoto = () => {

  buttonScaleControlSmaller.addEventListener ('click', () => {

    const currentValueInput = parseFloat(scaleValueInput.value.slice(0, -1));

    if (currentValueInput > MIN_SCALE_VALUE_PHOTO) {

      const newScaleValueInput = currentValueInput - STEP_SCALE_PHOTO;
      scaleValueInput.setAttribute('value', `${newScaleValueInput }%`);
      scaleValueInput.value = `${newScaleValueInput }%`;
      const scaleValue = newScaleValueInput / 100;
      uploadPhotoPreview.style.transform = `scale(${scaleValue})`;

      if (newScaleValueInput === MIN_SCALE_VALUE_PHOTO) {
        buttonScaleControlSmaller.setAttribute('disabled', '');
      }
      if (newScaleValueInput < MAX_SCALE_VALUE_PHOTO) {
        buttonScaleControlBigger.removeAttribute ('disabled');
      }
    }
  });

  buttonScaleControlBigger.addEventListener ('click', () => {
    const currentValueInput = parseFloat(scaleValueInput.value.slice(0, -1));

    if (currentValueInput < MAX_SCALE_VALUE_PHOTO) {

      const newScaleValueInput = currentValueInput + STEP_SCALE_PHOTO;
      scaleValueInput.setAttribute('value', `${newScaleValueInput }%`);
      scaleValueInput.value = `${newScaleValueInput }%`;
      const scaleValue = newScaleValueInput / 100;
      uploadPhotoPreview.style.transform = `scale(${scaleValue})`;

      if (newScaleValueInput > MIN_SCALE_VALUE_PHOTO) {
        buttonScaleControlSmaller.removeAttribute('disabled');
        if (newScaleValueInput === MAX_SCALE_VALUE_PHOTO) {
          buttonScaleControlBigger.setAttribute('disabled', '');
        }
      }
    }

  });

};

const resetScalePhoto = () => {
  uploadPhotoPreview.style.transform = 'scale(1)';
  scaleValueInput.setAttribute('value', `${DEFAULT_SCALE_PHOTO }%`);
};

export {changeScalePhoto, resetScalePhoto};
