import {isEscapeKey} from './utils.js';

const fullPhoto = document.querySelector('.big-picture');
const fullPhotoImg = fullPhoto.querySelector('.big-picture__img img');
const fullPhotoCaption = fullPhoto.querySelector('.social__caption');
const fullPhotoLikes = fullPhoto.querySelector('.likes-count');
const fullPhotoTotalComments = fullPhoto.querySelector('.social__comment-total-count');
const buttonCloseFullPhoto = document.querySelector('.big-picture__cancel');
const dowloaderNewComment = document.querySelector('.comments-loader');
const commentsCount = document.querySelector('.social__comment-count');
const comments = fullPhoto.querySelector('.social__comments');

const commentTemplate = document. querySelector('#comments-item')
  .content
  .querySelector('.social__comment');

const clearOldComments = () => {
  while (comments.firstChild) {
    comments.removeChild(comments.lastChild);
  }
};

const closeFullPhoto = () => {
  fullPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  clearOldComments();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPhoto();
  }
};

clearOldComments();

const renderComment = (comment)=> {
  const newCommentElement = commentTemplate.cloneNode(true);
  const commentImg = newCommentElement.querySelector('.social__picture');
  const commentText = newCommentElement.querySelector('.social__text');

  commentImg.src = comment.avatar;
  commentImg.alt = comment.name;
  commentText.textContent = comment.comment;
  return newCommentElement;
};

const openFullPhoto = (picture) => {
  fullPhoto.classList.remove('hidden');
  dowloaderNewComment.classList.add('hidden');
  commentsCount.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  fullPhotoImg.src = picture.photo;
  fullPhotoCaption.textContent = picture.description;
  fullPhotoLikes.textContent = picture.likes;
  fullPhotoTotalComments.textContent = picture.comments.length;

  picture.comments.forEach((comment) => {

    const readyCommentElement = renderComment(comment);
    comments.appendChild(readyCommentElement);
  });

  buttonCloseFullPhoto.addEventListener('click', closeFullPhoto);
};

export {openFullPhoto};
