import {isEscapeKey} from './utils.js';

const viewPictureFullSize = () => {

  const bigPictureElement = document.querySelector('.big-picture');
  const thumbnailsList = document.querySelectorAll('.picture');
  const buttonCloseBigPicture = document.querySelector('.big-picture__cancel');
  const dowloaderNewComment = document.querySelector('.comments-loader');


  const bigPictureImg = bigPictureElement.querySelector('.big-picture__img img');
  const bigPictureDescription = bigPictureElement.querySelector('.social__caption');
  const bigPictureCountLikes = bigPictureElement.querySelector('.likes-count');
  const bigPictureTotalCountComments = bigPictureElement.querySelector('.social__comment-total-count');

  const closeFullPicture = () => {
    bigPictureElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeFullPicture();
    }
  };

  for (const thumbnailElement of thumbnailsList) {

    thumbnailElement.addEventListener ('click', () => {
      const thumbnailsImgElement = thumbnailElement.querySelector('.picture__img');
      const thumbnailsElementCountLikes = thumbnailElement.querySelector('.picture__likes').textContent;
      const thumbnailsElementTotalCountComments = thumbnailElement.querySelector('.picture__comments').textContent;

      const thumbnailsImgElementData = {
        photo: thumbnailsImgElement.src,
        description: thumbnailsImgElement.alt,
        likes: thumbnailsElementCountLikes,
        comments:thumbnailsElementTotalCountComments,
      };

      bigPictureImg.src = thumbnailsImgElementData.photo;
      bigPictureDescription.textContent = thumbnailsImgElementData.description;
      bigPictureCountLikes.textContent = thumbnailsImgElementData.likes;
      bigPictureTotalCountComments.textContent = thumbnailsImgElementData.comments;

      bigPictureElement.classList.remove('hidden');
      document.body.classList.add('modal-open');
      dowloaderNewComment.classList.add('hidden');
      document.addEventListener('keydown', onDocumentKeydown);

    });

    buttonCloseBigPicture.addEventListener('click', () => {
      closeFullPicture();
    });

  }

};

export {ViewPictureFullSize};

