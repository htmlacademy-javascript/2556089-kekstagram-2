// import { createPosts } from './create-array-posts.js';
import { renderThumbnails } from './create-thumbnails.js';
import { openUploadFormPhoto } from './form.js';


fetch ('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then ((response) => response.json())
  .then ((data) => {
    renderThumbnails(data);
    console.log (data);
  }
  );


// const createdArray = createPosts();

// renderThumbnails(createdArray);

openUploadFormPhoto();
