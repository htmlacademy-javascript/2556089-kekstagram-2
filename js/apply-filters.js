import { renderThumbnails } from './create-thumbnails.js';
import { debounce } from './utils.js';
import {RERENDERED_DELAY} from './const.js';

const filtersGroup = document.querySelector('.img-filters');
const filterButtons = filtersGroup.querySelectorAll('.img-filters__button');
const defaultFilterButton = filtersGroup.querySelector('#filter-default');
const randomFilterButton = filtersGroup.querySelector('#filter-random');
const discussedFilterButton = filtersGroup.querySelector('#filter-discussed');
let thumbnails = [];


const resetActiveClassButton = () => {
  filterButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};

const initFilters = (data) => {
  thumbnails = data;

};

const getRandomElements = (items, count) => {
  const shuffled = items.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const renderThumbnailsDebounced = debounce (renderThumbnails, RERENDERED_DELAY);

const applyFilters = () => {

  defaultFilterButton.addEventListener ('click', () => {
    resetActiveClassButton ();
    defaultFilterButton.classList.add ('img-filters__button--active');
    renderThumbnailsDebounced(thumbnails);

  });


  discussedFilterButton.addEventListener ('click', () => {
    resetActiveClassButton ();
    discussedFilterButton.classList.add ('img-filters__button--active');

    const sortedThumbnailsByComments = thumbnails.slice().sort((a, b) => {
      if (a.comments < b.comments) {
        return 1;
      }
      if (a.comments > b.comments) {
        return -1;
      }
      return 0;
    });

    renderThumbnailsDebounced(sortedThumbnailsByComments);
  });


  randomFilterButton.addEventListener ('click', () => {
    resetActiveClassButton ();
    randomFilterButton.classList.add ('img-filters__button--active');

    const randomThumbnails = getRandomElements(thumbnails, 10);

    renderThumbnailsDebounced(randomThumbnails);
  });
};


export {applyFilters, initFilters};
