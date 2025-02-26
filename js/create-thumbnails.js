import {openFullPhoto} from './open-fullsize-photo';

const renderThumbnails = (data) => {
  const picturesList = document. querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const picturesListFragment = document.createDocumentFragment();
  data.forEach ((picture) => {
    const newPictureElement = pictureTemplate.cloneNode(true);

    newPictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      openFullPhoto(picture);
    });

    const pictureImgElement = newPictureElement.querySelector('.picture__img');
    const pictureInfoElement = newPictureElement.querySelector('.picture__info');
    const likes = pictureInfoElement.querySelector('.picture__likes');
    const comments = pictureInfoElement.querySelector('.picture__comments');

    pictureImgElement.src = picture.url;
    pictureImgElement.alt = picture.description;
    likes.textContent = picture.likes;
    comments.textContent = picture.comments.length;
    picturesListFragment.append (newPictureElement);

  });
  picturesList.append(picturesListFragment);
};


export {renderThumbnails};
