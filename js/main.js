import { createPosts } from './create-array-posts.js';
import { renderThumbnails } from './create-thumbnails.js';
import { bigPicturePreview } from './big-picture-preview.js';

const createdArray = createPosts();
renderThumbnails(createdArray);
bigPicturePreview ();


