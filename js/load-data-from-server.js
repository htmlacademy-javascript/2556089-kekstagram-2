import { renderThumbnails } from './create-thumbnails';
import {MAX_TIME_ALERT, BASE_URL, Route} from './const.js';
import { initFilters } from './apply-filters.js';

let errorMessage;
const filterGroup = document.querySelector('.img-filters');


const showAlertMessage = () => {
  const errorMessageTemplate = document.querySelector('#data-error')
    .content
    .querySelector('.data-error');

  errorMessage = errorMessageTemplate.cloneNode(true);

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
      filterGroup.classList.remove('img-filters--inactive');
      initFilters (data);
      renderThumbnails(data);

    })
    .catch(() => {
      showAlertMessage ();
    });
};

export {loadDataFromServer};

