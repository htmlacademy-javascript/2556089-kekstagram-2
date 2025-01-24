import {getRandomInteger, getRandomIdFromRangeGenerator} from './utils.js';
import {DESCRIPTION_PHOTOS, TEXT_COMMENTS, USERS_NAME, POSTS_ARRAY_LENGTH, minCountIdPost, maxCountIdPost, minCountIdPhoto, maxCountIdPhoto, minCountIdComment, maxCountIdComment, minCountAvatar, maxCountAvatar, minCountILikes, maxCountILikes, minCommentsCount, maxCommentsCount} from './const.js';


const generateRandomIdPost = getRandomIdFromRangeGenerator(minCountIdPost, maxCountIdPost);
const generateRandomIdPhoto = getRandomIdFromRangeGenerator(minCountIdPhoto, maxCountIdPhoto);
const generateRandomIdComment = getRandomIdFromRangeGenerator(minCountIdComment, maxCountIdComment);


const getComment = () => {
  const createAvatarUrl = `img/avatar-${ getRandomInteger(minCountAvatar, maxCountAvatar) }.svg`;
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
  const likes = getRandomInteger(minCountILikes, maxCountILikes);
  const commentsCount = getRandomInteger(minCommentsCount, maxCommentsCount);

  const commentsArray = Array.from({length: commentsCount}, getComment);
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
