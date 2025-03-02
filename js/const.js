

const MAX_HASHTAG_SYMBOLS = 20;
const MAX_COMMENT_SYMBOLS = 140;
const MAX_QUANTITY_HASHTAGS = 5;
const DEFAULT_SCALE_PHOTO = 100;
const STEP_SCALE_PHOTO = 25;
const MIN_SCALE_VALUE_PHOTO = 25;
const MAX_SCALE_VALUE_PHOTO = 100;
const regexp = /^#[a-zа-яё0-9]+$/i;
const MAX_TIME_ALERT = 5000;
const RERENDERED_DELAY = 500;
const FILE_TYPES = ['jpg', 'jpeg', 'png', 'webp'];

const NO_EFFECT_CONFIG = {
  range: {
    min: 0,
    max: 0,
  },
  start: 0,
  step: 0,
  connect: 'lower',
};

const CHROME_CONFIG = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};

const SEPIA_CONFIG = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};

const MARVIN_CONFIG = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
};

const PHOBOS_CONFIG = {
  range: {
    min: 0,
    max: 3,
  },
  start: 3,
  step: 0.1,
};

const HEAT_CONFIG = {
  range: {
    min: 1,
    max: 3,
  },
  start: 3,
  step: 0.1,
};

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

export {MAX_HASHTAG_SYMBOLS, MAX_COMMENT_SYMBOLS, MAX_QUANTITY_HASHTAGS, DEFAULT_SCALE_PHOTO, STEP_SCALE_PHOTO, MIN_SCALE_VALUE_PHOTO,MAX_SCALE_VALUE_PHOTO, regexp, NO_EFFECT_CONFIG, CHROME_CONFIG, SEPIA_CONFIG, MARVIN_CONFIG, PHOBOS_CONFIG, HEAT_CONFIG, MAX_TIME_ALERT, BASE_URL, Route, RERENDERED_DELAY, FILE_TYPES};
