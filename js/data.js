import {getRandomInteger, generateRandomIdPost, generateRandomIdPhoto, generateRandomIdComment } from './utils.js';
import {DESCRIPTION_PHOTOS, TEXT_COMMENTS, USERS_NAME, POSTS_ARRAY_LENGTH} from './const.js';

const getComment = () => {
  const createAvatarUrl = `img/avatar-${ getRandomInteger(1, 6) }.svg`;
  const randomCommentIndex = getRandomInteger(0, TEXT_COMMENTS.length - 1);
  const randomNameIndex = getRandomInteger(0, USERS_NAME.length - 1);
  return {
    id: generateRandomIdComment(),
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

  const commentsArray = Array.from({length: commentsNumber}, getComment);
  return {
    id: postId,
    photo: photoUrl,
    description: DESCRIPTION_PHOTOS[photoId - 1],
    likes: likes,
    comments: commentsArray,
  };
};

const createPosts = () => Array.from({length: POSTS_ARRAY_LENGTH}, createPost);

export {createPosts};
