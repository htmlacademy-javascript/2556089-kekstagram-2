import { createPosts } from './create-array-posts.js';
import { renderThumbnails } from './create-thumbnails.js';
import { ViewPictureFullSize } from './ViewPictureFullSize.js';

const createdArray = createPosts();
renderThumbnails(createdArray);
ViewPictureFullSize ();


