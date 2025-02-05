/*
Окно должно открываться при клике на миниатюру. Данные для окна (изображение, комментарии, лайки и так далее) берите из того же объекта, который использовался для отрисовки соответствующей миниатюры.
Для отображения окна нужно удалять класс hidden у элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:

Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.

Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

Количество показанных комментариев подставьте как текстовое содержание элемента .social__comment-shown-count.

Общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента .social__comment-total-count.

Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

<li class="social__comment">
  <img
    class="social__picture"
    src="{{аватар}}"
    alt="{{имя комментатора}}"
    width="35" height="35">
  <p class="social__text">{{текст комментария}}</p>
</li>

Описание фотографии description вставьте строкой в блок .social__caption.

После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.

Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

Подключите модуль в проект.
*/


//Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

const bigPicturePreview = () => {

  const bigPictureElement = document.querySelector('.big-picture'); // это большая открывающаяся фотка;
  const thumbnailsList = document.querySelectorAll('.picture');//это список/коллекция миниатюр 25 шт
  const buttonCloseBigPicture = document.querySelector('.big-picture__cancel');//кнопка - закрывашка


  const bigPictureImg = bigPictureElement.querySelector('.big-picture__img img');
  const bigPictureDescription = bigPictureElement.querySelector('.social__caption');
  const bigPictureCountLikes = bigPictureElement.querySelector('.likes-count');


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
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        bigPictureElement.classList.add('hidden');
      }
    });
  }
};

export {bigPicturePreview};

