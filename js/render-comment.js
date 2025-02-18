const commentTemplate = document. querySelector('#comments-item')
  .content
  .querySelector('.social__comment');

const fullPhoto = document.querySelector('.big-picture');
const buttonLoadNewComments = fullPhoto.querySelector('[data-comments-loader]');
const commentsShownCount = fullPhoto.querySelector('.social__comment-shown-count');
const commentsTotalCount = fullPhoto.querySelector('.social__comment-total-count');

const renderComment = (comment)=> {
  const newCommentElement = commentTemplate.cloneNode(true);
  const commentImg = newCommentElement.querySelector('.social__picture');
  const commentText = newCommentElement.querySelector('.social__text');

  commentImg.src = comment.avatar;
  commentImg.alt = comment.name;
  commentText.textContent = comment.comment;
  return newCommentElement;
};

const START_STATE = 5;
let currentState = 5;
let commentsLimit = null;
const STEP_COMMENTS = 5;


const showNextComments = () => {

  const restComments = commentsLimit - currentState;//остаток
  const currentStep = restComments < STEP_COMMENTS ? restComments : STEP_COMMENTS; // ШАГ

  if (currentState < commentsLimit) {
    currentState += currentStep;

    commentsShownCount.textContent = currentState.toString();
  }
};


buttonLoadNewComments.addEventListener ('click',showNextComments);

export const initCommentsCounter = (limit) => {
  commentsLimit = limit;
  currentState = START_STATE;

  if (commentsLimit < START_STATE) {
    commentsShownCount.textContent = commentsLimit.toString();
    buttonLoadNewComments.classList.add('hidden');
  } else {
    commentsShownCount.textContent = START_STATE.toString();
    buttonLoadNewComments.classList.remove('hidden');

  }
};

const renderComments = (commentsData) => {
  commentsData.forEach((comment, index) => {
    if (index < currentState) {
      const readyCommentElement = renderComment(comment);
      comments.appendChild(readyCommentElement);
    }
  });

};


export {renderComment};
