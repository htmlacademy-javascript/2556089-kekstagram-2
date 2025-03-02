import { renderThumbnails } from './create-thumbnails.js';
import { debounce } from './utils.js';
import {RERENDERED_DELAY} from './const.js';

const filtersGroup = document.querySelector('.img-filters');
const filterButtons = filtersGroup.querySelectorAll('.img-filters__button');
const defaultFilterButton = filtersGroup.querySelector('#filter-default');
const randomFilterButton = filtersGroup.querySelector('#filter-random');
const discussedFilterButton = filtersGroup.querySelector('#filter-discussed');
let thumbnailList = [];


const resetActiveClassButton = () => {
  filterButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};

const initFilters = (data) => {
  thumbnailList = data;

};

const getRandomElements = (array, count) => {
  const shuffled = array.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const renderThumbnailsDebounced = debounce (renderThumbnails, RERENDERED_DELAY);

const applyFilters = () => {

  defaultFilterButton.addEventListener ('click', () => {
    resetActiveClassButton ();
    defaultFilterButton.classList.add ('img-filters__button--active');
    renderThumbnailsDebounced(thumbnailList);

  });


  discussedFilterButton.addEventListener ('click', () => {
    resetActiveClassButton ();
    discussedFilterButton.classList.add ('img-filters__button--active');

    const sortedThumbnailsListByComments = thumbnailList.slice().sort((a, b) => {
      if (a.comments < b.comments) {
        return 1;
      }
      if (a.comments > b.comments) {
        return -1;
      }
      return 0;
    });

    renderThumbnailsDebounced(sortedThumbnailsListByComments);
  });


  randomFilterButton.addEventListener ('click', () => {
    resetActiveClassButton ();
    randomFilterButton.classList.add ('img-filters__button--active');

    const randomThumbnails = getRandomElements(thumbnailList, 10);

    renderThumbnailsDebounced(randomThumbnails);
  });
};


export {applyFilters, initFilters};
