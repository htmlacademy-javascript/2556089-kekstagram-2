
const START_STATE = 5;
const STEP_COMMENTS = 5;

let currentState = 5;
let commentsLimit = null;
let comments = [];

const commentTemplate = document. querySelector('#comments-item')
  .content
  .querySelector('.social__comment');

const fullPhoto = document.querySelector('.big-picture');
const buttonLoadNewComments = fullPhoto.querySelector('[data-comments-loader]');
const commentsShownCount = fullPhoto.querySelector('.social__comment-shown-count');
const commentsList = fullPhoto.querySelector('.social__comments');

const renderComment = (comment)=> {
  const newCommentElement = commentTemplate.cloneNode(true);
  const commentImg = newCommentElement.querySelector('.social__picture');
  const commentText = newCommentElement.querySelector('.social__text');

  commentImg.src = comment.avatar;
  commentImg.alt = comment.name;
  commentText.textContent = comment.message;
  return newCommentElement;
};

const renderComments = () => {

  commentsList.innerHTML = '';

  comments.forEach((comment, index) => {

    if (index < currentState) {
      const readyCommentElement = renderComment(comment);

      commentsList.appendChild(readyCommentElement);
    }
  });
};

const showNextComments = () => {

  const restComments = commentsLimit - currentState;
  const currentStep = restComments < STEP_COMMENTS ? restComments : STEP_COMMENTS; // ШАГ

  if (currentState < commentsLimit) {
    currentState += currentStep;
    commentsShownCount.textContent = currentState.toString();

    if (currentState === commentsLimit) {
      buttonLoadNewComments.classList.add('hidden');
    }

    renderComments();
  }
};

buttonLoadNewComments.addEventListener ('click',showNextComments);

export const initCommentsCounter = (commentsData) => {
  commentsLimit = commentsData.length;
  currentState = START_STATE;

  if (commentsLimit < START_STATE || START_STATE === commentsLimit) {
    commentsShownCount.textContent = commentsLimit.toString();
    buttonLoadNewComments.classList.add('hidden');

  } else {
    commentsShownCount.textContent = START_STATE.toString();
    buttonLoadNewComments.classList.remove('hidden');
  }
  comments = commentsData;
  renderComments ();
};

export {renderComment};
