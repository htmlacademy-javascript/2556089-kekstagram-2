import { createPosts } from './create-array-posts.js';
import { renderThumbnails } from './create-thumbnails.js';

const createdArray = createPosts();
renderThumbnails(createdArray);

console.log(createdArray);
