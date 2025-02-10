import { createPosts } from './create-array-posts.js';
import { renderThumbnails } from './create-thumbnails.js';
import { UploadPhotoForm } from './form.js';

const createdArray = createPosts();
renderThumbnails(createdArray);

UploadPhotoForm();
