import {isEscapeKey} from './utils.js';
import {initCommentsCounter} from './comments.js';

const pageBody = document.querySelector('body');
const fullPhoto = document.querySelector('.big-picture');
const fullPhotoImg = fullPhoto.querySelector('.big-picture__img img');
const fullPhotoCaption = fullPhoto.querySelector('.social__caption');
const fullPhotoLikes = fullPhoto.querySelector('.likes-count');
const fullPhotoTotalComments = fullPhoto.querySelector('.social__comment-total-count');
const buttonCloseFullPhoto = fullPhoto.querySelector('.big-picture__cancel');
const comments = fullPhoto.querySelector('.social__comments');

const clearOldComments = () => {
  comments.textContent = '';
};

const closeFullPhoto = () => {
  fullPhoto.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPhoto();
  }
};

const addDataInPhoto = (pictureData) => {
  fullPhotoImg.src = pictureData.photo;
  fullPhotoImg.alt = pictureData.description;
  fullPhotoCaption.textContent = pictureData.description;
  fullPhotoLikes.textContent = pictureData.likes;
  fullPhotoTotalComments.textContent = pictureData.comments.length;
};

const registerEventsForCloseFullPhoto = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  buttonCloseFullPhoto.addEventListener('click', closeFullPhoto, {once: true});
};


const openFullPhoto = (picture) => {
  fullPhoto.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);


  pageBody.classList.add('modal-open');
  registerEventsForCloseFullPhoto ();
  addDataInPhoto (picture);
  clearOldComments();
  initCommentsCounter(picture.comments);
};

export {openFullPhoto};
