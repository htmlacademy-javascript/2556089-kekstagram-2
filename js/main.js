import { createPosts } from './create-array-posts.js';
import { renderThumbnails } from './create-thumbnails.js';
import { ViewPictureFullSize } from './View-Picture-Full-Size.js';

const createdArray = createPosts();
renderThumbnails(createdArray);
ViewPictureFullSize ();


