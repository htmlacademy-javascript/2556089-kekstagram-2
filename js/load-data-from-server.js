import { renderThumbnails } from './create-thumbnails';
import {MAX_TIME_ALERT, BASE_URL, Route} from './const.js';
let errorMessage;

const showAlertMessage = () => {
  const pictureTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');

  errorMessage = pictureTemplate.cloneNode(true);

  document.body.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, MAX_TIME_ALERT);

};

const loadDataFromServer = () => {
  fetch(`${BASE_URL}${Route.GET_DATA}`)
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
      showAlertMessage ();
    });
};

export {loadDataFromServer};

