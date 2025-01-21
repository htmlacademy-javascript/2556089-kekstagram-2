/*В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.//

Структура каждого объекта должна быть следующей:

id: число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться,

url: 'строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться',

description: 'строка — описание фотографии. Описание придумайте самостоятельно',

likes: число — количество лайков, поставленных фотографии. Случайное число от 15 до 200

comments:
массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
{ id: 135, avatar: 'img/avatar-6.svg', message: 'В целом всё неплохо. Но не всё.', name: 'Артём' }

У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.

Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:

'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'

Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.

------------------------------------------------------------------------------------------------------------------------------
*/

//Массив с описанием фотографий:

const DESCRIPTION_PHOTOS = ['Пустой пляж','Указатель', 'Сказочное Бали', 'Фотограф в отпуске', 'Рисовые человечки в SPA', 'Black Supercar', 'Завтрак из клубники', 'Два стакана с морсом', 'Сброс продуктов участникам реалити-шоу', 'Полка с обувью', 'Выход к воде', 'AUDI RS', 'Салат', 'Котосуши', 'Чьи-то ноги в дутиках', 'Самолет высоко в небе', 'Репетиция оркестра "Кто в лес, кто по дрова', 'Old vintage car', 'Подкрадули Xiaomi 3S с подсветкой', 'Пальмы', 'Салат с деревянной вилкой', 'Sunset', 'ТоксиКраб', 'Концерт Газманова в Мытищах', 'Бегемот восхищается проходимостью Land Rover'];

//Массив c комментариями:

const TEXT_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];

//Массив с именами юзеров

const USERS_NAME = ['Юлия', 'Михаил', 'Захар', 'Заяц', 'Саша', 'Граф де Бильбо', 'ЖП', 'The_best_programmer_ever', 'Анононим', 'Конь в яблоках', 'Колян', 'Изя Шниперсон', 'Арнольд Ш.', 'Артем', 'Женя', 'Дж.Байден', 'Трамп', 'Вовка'];

const POSTS_ARRAY_LENGTH = 25; // Длина массива с объектами (по ДЗ - это 25);

//Генератор случайных чисел
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Проверка на уникальность id

const getRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max }`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// Генерируем случайные id постов, фото и комментов
const generateRandomIdPost = getRandomIdFromRangeGenerator(1, 25);
const generateRandomIdPhoto = getRandomIdFromRangeGenerator(1, 25);
const randomCommentId = getRandomIdFromRangeGenerator(1, 5000);

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

const posts = Array.from({length: POSTS_ARRAY_LENGTH}, createPost);

console.log(posts);

