import { loadDataFromServer } from './load-data-from-server.js';

const filtersGroup = document.querySelector('.img-filters');
const filterButtons = filtersGroup.querySelectorAll('.img-filters__button');
const defaultFilterButton = filtersGroup.querySelector('#filter-default');
const randomFilterButton = filtersGroup.querySelector('#filter-random');
const discussedFilterButton = filtersGroup.querySelector('#filter-discussed');

const resetActiveClassButton = () => {
  filterButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};

const discussedfilter = () => {
  discussedFilterButton.addEventListener ('click', () => {
    console.log ('Нажат фильтр обсуждаемые');
    resetActiveClassButton ();
    discussedFilterButton.classList.add ('img-filters__button--active');
  }
  );
};


export {discussedfilter};
