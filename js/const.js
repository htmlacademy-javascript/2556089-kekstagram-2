const DESCRIPTION_PHOTOS = ['Пустой пляж','Указатель', 'Сказочное Бали', 'Фотограф в отпуске', 'Рисовые человечки в SPA', 'Black Supercar', 'Завтрак из клубники', 'Два стакана с морсом', 'Сброс продуктов участникам реалити-шоу', 'Полка с обувью', 'Выход к воде', 'AUDI RS', 'Салат', 'Котосуши', 'Чьи-то ноги в дутиках', 'Самолет высоко в небе', 'Репетиция оркестра "Кто в лес, кто по дрова', 'Old vintage car', 'Подкрадули Xiaomi 3S с подсветкой', 'Пальмы', 'Салат с деревянной вилкой', 'Sunset', 'ТоксиКраб', 'Концерт Газманова в Мытищах', 'Бегемот восхищается проходимостью Land Rover'];

const TEXT_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];

const USERS_NAME = ['Юлия', 'Михаил', 'Захар', 'Заяц', 'Саша', 'Граф де Бильбо', 'ЖП', 'The_best_programmer_ever', 'Анононим', 'Конь в яблоках', 'Колян', 'Изя Шниперсон', 'Арнольд Ш.', 'Артем', 'Женя', 'Дж.Байден', 'Трамп', 'Вовка'];

const minCountIdPost = 1;
const maxCountIdPost = 25;
const minCountIdPhoto = 1;
const maxCountIdPhoto = 25;
const minCountIdComment = 1;
const maxCountIdComment = 5000;
const minCountAvatar = 1;
const maxCountAvatar = 6;
const minCountILikes = 30;
const maxCountILikes = 200;
const minCommentsCount = 0;
const maxCommentsCount = 30;
const POSTS_ARRAY_LENGTH = 25; // Длина массива с объектами (по ДЗ - это 25);


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

export {DESCRIPTION_PHOTOS, TEXT_COMMENTS, USERS_NAME, POSTS_ARRAY_LENGTH, minCountIdPost, maxCountIdPost, minCountIdPhoto, maxCountIdPhoto, minCountIdComment, maxCountIdComment, minCountAvatar, maxCountAvatar, minCountILikes, maxCountILikes, minCommentsCount, maxCommentsCount, MAX_HASHTAG_SYMBOLS, MAX_COMMENT_SYMBOLS, MAX_QUANTITY_HASHTAGS, DEFAULT_SCALE_PHOTO, STEP_SCALE_PHOTO, MIN_SCALE_VALUE_PHOTO,MAX_SCALE_VALUE_PHOTO, regexp, NO_EFFECT_CONFIG, CHROME_CONFIG, SEPIA_CONFIG, MARVIN_CONFIG, PHOBOS_CONFIG, HEAT_CONFIG, MAX_TIME_ALERT, BASE_URL, Route, RERENDERED_DELAY, FILE_TYPES};
