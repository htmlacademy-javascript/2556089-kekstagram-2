import {isEscapeKey} from './utils.js';
import {renderComment} from './render-comment.js';

const pageBody = document.querySelector('body');
const fullPhoto = document.querySelector('.big-picture');
const fullPhotoImg = fullPhoto.querySelector('.big-picture__img img');
const fullPhotoCaption = fullPhoto.querySelector('.social__caption');
const fullPhotoLikes = fullPhoto.querySelector('.likes-count');
const fullPhotoTotalComments = fullPhoto.querySelector('.social__comment-total-count');
const buttonCloseFullPhoto = fullPhoto.querySelector('.big-picture__cancel');
const dowloaderNewComment = fullPhoto.querySelector('.comments-loader');
const commentsCount = fullPhoto.querySelector('.social__comment-count');
const comments = fullPhoto.querySelector('.social__comments');

const clearOldComments = () => {
  while (comments.firstChild) {
    comments.removeChild(comments.lastChild);
  }
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

const registerEvents = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  buttonCloseFullPhoto.addEventListener('click', closeFullPhoto);
};

const renderComments = (commentsData) => {
  commentsData.forEach((comment) => {

    const readyCommentElement = renderComment(comment);
    comments.appendChild(readyCommentElement);
  });

};

const openFullPhoto = (picture) => {
  fullPhoto.classList.remove('hidden');
  dowloaderNewComment.classList.add('hidden');
  commentsCount.classList.add('hidden');
  pageBody.classList.add('modal-open');
  registerEvents ();
  addDataInPhoto (picture);
  clearOldComments();
  renderComments (picture.comments);
};

export {openFullPhoto};


