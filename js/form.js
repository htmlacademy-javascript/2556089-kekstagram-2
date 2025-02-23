import {isEscapeKey} from './utils.js';

const MAX_HASHTAG_SYMBOLS = 20;
const MAX_COMMENT_SYMBOLS = 140;
const MAX_QUANTITY_HASHTAGS = 5;
// const DEFAULT_SCALE_PHOTO = 100;
const STEP_SCALE_PHOTO = 25;
const MIN_SCALE_VALUE_PHOTO = 25;
const MAX_SCALE_VALUE_PHOTO = 100;

const pageBody = document.querySelector('body');
const uploadFormPhoto = pageBody.querySelector('.img-upload__form'); // Находим форму
const uploadFileControl = uploadFormPhoto.querySelector('#upload-file'); // Находим поле для загрузки файла
const photoEditorForm = uploadFormPhoto.querySelector ('.img-upload__overlay'); // Находим форму редактирования фото
const buttonResetUploadFormPhoto = uploadFormPhoto.querySelector('.img-upload__cancel'); // Находим кнопку закрытия формы
const hashtagsInput = uploadFormPhoto.querySelector('.text__hashtags');// поле для ввода хэштегов
const commentInput = uploadFormPhoto.querySelector('.text__description'); // поле для ввода комментария

const buttonScaleControlSmaller = uploadFormPhoto.querySelector('.scale__control--smaller');
const buttonScaleControlBigger = uploadFormPhoto.querySelector('.scale__control--bigger');
const scaleValueInput = uploadFormPhoto.querySelector('.scale__control--value');

const uploadPhotoPreview = uploadFormPhoto.querySelector('.img-upload__preview');


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

function openUploadFormPhoto () {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);

  });
}

function closeUploadFormPhoto () {
  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadFormPhoto.reset();
  pristine.reset();
  uploadFileControl.value = '';
  console.log('Сброс масштаба к исходному размеру');

  uploadPhotoPreview.style.transform = 'scale(1)';


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
  const hashtagArray = value.trim().split(' ');

  if (hashtagArray.length > MAX_QUANTITY_HASHTAGS) {
    return false;
  }
  return true;
},
'Максимальное количество Хэштегов: 5');

pristine.addValidator(hashtagsInput, (value) => {

  const hashtagArray = value.trim().toLowerCase().split(' ');
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

buttonScaleControlSmaller.addEventListener ('click', () => {

  const currentValueInput = parseFloat(scaleValueInput.value.slice(0, -1));

  if (currentValueInput > MIN_SCALE_VALUE_PHOTO) {

    const newScaleValueInput = currentValueInput - STEP_SCALE_PHOTO;
    scaleValueInput.setAttribute('value', `${newScaleValueInput }%`);
    scaleValueInput.value = `${newScaleValueInput }%`;
    const scaleValue = newScaleValueInput / 100;
    uploadPhotoPreview.style.transform = `scale(${scaleValue})`;

    if (newScaleValueInput === MIN_SCALE_VALUE_PHOTO) {
      buttonScaleControlSmaller.classList.add('hidden');
    }
    if (newScaleValueInput < MAX_SCALE_VALUE_PHOTO) {
      buttonScaleControlBigger.classList.remove('hidden');
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
      buttonScaleControlSmaller.classList.remove('hidden');
      if (newScaleValueInput === MAX_SCALE_VALUE_PHOTO) {
        buttonScaleControlBigger.classList.add('hidden');
      }
    }
  }

});

export {openUploadFormPhoto};
