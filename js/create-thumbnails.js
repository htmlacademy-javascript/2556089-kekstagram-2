const renderThumbnails = (data) => {
  const picturesList = document. querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const picturesListFragment = document.createDocumentFragment();
  data.forEach ((picture) => {
    const newPictureElement = pictureTemplate.cloneNode(true);
    const pictureImgElement = newPictureElement.querySelector('.picture__img');
    pictureImgElement.src = picture.photo;
    pictureImgElement.alt = picture.description;
    const pictureInfoElement = newPictureElement.querySelector('.picture__info');
    pictureInfoElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureInfoElement.querySelector('.picture__comments').textContent = picture.comments.length;
    picturesListFragment.append (newPictureElement);
  });
  picturesList.append(picturesListFragment);
};

export {renderThumbnails};
