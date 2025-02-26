import { renderThumbnails } from './create-thumbnails';
import {MAX_TIME_ALERT} from './const.js';
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


      setTimeout(() => {
        errorMessage.remove();
      }, MAX_TIME_ALERT);
    });
};

export {loadDataFromServer};

