import { renderThumbnails } from './create-thumbnails';
let errorMessage;

const loadDataFromServer = () => {
  fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      renderThumbnails(data);
    })
    .catch((error) => {
      const pictureTemplate = document.querySelector('#error')
        .content
        .querySelector('.error');

      errorMessage = pictureTemplate.cloneNode(true);

      document.body.appendChild(errorMessage);

      // Удалить сообщение об ошибке через 5 секунд (5000 миллисекунд)
      setTimeout(() => {
        errorMessage.remove();
      }, 5000); // 5000 миллисекунд = 5 секунд
    });
};

export {loadDataFromServer};

