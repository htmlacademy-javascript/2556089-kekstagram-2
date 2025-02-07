const commentTemplate = document. querySelector('#comments-item')
  .content
  .querySelector('.social__comment');

const renderComment = (comment)=> {
  const newCommentElement = commentTemplate.cloneNode(true);
  const commentImg = newCommentElement.querySelector('.social__picture');
  const commentText = newCommentElement.querySelector('.social__text');

  commentImg.src = comment.avatar;
  commentImg.alt = comment.name;
  commentText.textContent = comment.comment;
  return newCommentElement;
};

export {renderComment};
