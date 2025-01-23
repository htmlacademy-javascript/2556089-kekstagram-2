import {getRandomInteger} from './utils.js';
import {generateRandomIdPost} from './utils.js';
import {generateRandomIdPhoto} from './utils.js';
import {randomCommentId} from './utils.js';

const DESCRIPTION_PHOTOS = ['Пустой пляж','Указатель', 'Сказочное Бали', 'Фотограф в отпуске', 'Рисовые человечки в SPA', 'Black Supercar', 'Завтрак из клубники', 'Два стакана с морсом', 'Сброс продуктов участникам реалити-шоу', 'Полка с обувью', 'Выход к воде', 'AUDI RS', 'Салат', 'Котосуши', 'Чьи-то ноги в дутиках', 'Самолет высоко в небе', 'Репетиция оркестра "Кто в лес, кто по дрова', 'Old vintage car', 'Подкрадули Xiaomi 3S с подсветкой', 'Пальмы', 'Салат с деревянной вилкой', 'Sunset', 'ТоксиКраб', 'Концерт Газманова в Мытищах', 'Бегемот восхищается проходимостью Land Rover'];

const TEXT_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];

const USERS_NAME = ['Юлия', 'Михаил', 'Захар', 'Заяц', 'Саша', 'Граф де Бильбо', 'ЖП', 'The_best_programmer_ever', 'Анононим', 'Конь в яблоках', 'Колян', 'Изя Шниперсон', 'Арнольд Ш.', 'Артем', 'Женя', 'Дж.Байден', 'Трамп', 'Вовка'];

const POSTS_ARRAY_LENGTH = 25; // Длина массива с объектами (по ДЗ - это 25);

const comment = () => {
  const createAvatarUrl = `img/avatar-${ getRandomInteger(1, 6) }.svg`;
  const randomCommentIndex = getRandomInteger(0, TEXT_COMMENTS.length - 1);
  const randomNameIndex = getRandomInteger(0, USERS_NAME.length - 1);
  return {
    id: randomCommentId(),
    avatar: createAvatarUrl,
    comment: TEXT_COMMENTS[randomCommentIndex],
    name: USERS_NAME[randomNameIndex],
  };
};

const createPost = () => {
  const photoId = generateRandomIdPhoto();
  const postId = generateRandomIdPost();
  const photoUrl = `photos/${ photoId }.jpg`;
  const likes = getRandomInteger(15, 200);
  const commentsNumber = getRandomInteger(0, 30);

  const commentsArray = Array.from({length: commentsNumber}, comment);
  return {
    id: postId,
    photo: photoUrl,
    description: DESCRIPTION_PHOTOS[photoId - 1],
    likes: likes,
    comments: commentsArray,
  };
};

const createRequiredArray = () => Array.from({length: POSTS_ARRAY_LENGTH}, createPost);

export {createRequiredArray};
