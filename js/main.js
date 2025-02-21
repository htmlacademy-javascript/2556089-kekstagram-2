import { createPosts } from './create-array-posts.js';
import { renderThumbnails } from './create-thumbnails.js';
import { openUploadFormPhoto } from './form.js';

const createdArray = createPosts();
renderThumbnails(createdArray);

openUploadFormPhoto();
