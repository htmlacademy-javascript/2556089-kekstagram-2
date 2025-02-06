import {isEscapeKey} from './utils.js';

const ViewPictureFullSize = () => {

  const bigPictureElement = document.querySelector('.big-picture');
  const thumbnailsList = document.querySelectorAll('.picture');
  const buttonCloseBigPicture = document.querySelector('.big-picture__cancel');


  const bigPictureImg = bigPictureElement.querySelector('.big-picture__img img');
  const bigPictureDescription = bigPictureElement.querySelector('.social__caption');
  const bigPictureCountLikes = bigPictureElement.querySelector('.likes-count');

  //const openPictureFullSize = () => {

  for (const thumbnailElement of thumbnailsList) {

    thumbnailElement.addEventListener ('click', () => {
      const thumbnailsImgElement = thumbnailElement.querySelector('.picture__img');
      const thumbnailsElementCountLikes = thumbnailElement.querySelector('.picture__likes').textContent;

      const thumbnailsImgElementData = {
        photo: thumbnailsImgElement.src,
        description: thumbnailsImgElement.alt,
        likes: thumbnailsElementCountLikes,
      };

      bigPictureImg.src = thumbnailsImgElementData.photo;
      bigPictureDescription.textContent = thumbnailsImgElementData.description;
      bigPictureCountLikes.textContent = thumbnailsImgElementData.likes;

      bigPictureElement.classList.remove('hidden');
    });

    buttonCloseBigPicture.addEventListener('click', () => {
      bigPictureElement.classList.add('hidden');

      document.addEventListener('keydown', (evt) => {
        if (isEscapeKey(evt)) {
          evt.preventDefault();
          bigPictureElement.classList.add('hidden');
        }
      });

    });
  }
};

export {ViewPictureFullSize};

