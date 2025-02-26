// const pageBody = document.querySelector('body');
// const uploadFormPhoto = pageBody.querySelector('.img-upload__form'); // Находим форму

fetch ('https://31.javascript.htmlacademy.pro/kekstagram/data')

  .then((response) => response.json ())
  .then((data) => {
    console.log (data);

  });


// fetch ('https://31.javascript.htmlacademy.pro/kekstagram',
//   {
//     method: 'POST',
//     body: new FormData (uploadFormPhoto),
//   },
// )

//   .then((response) => response.json ())
//   .then((data) => {
//     console.log (uploadFormPhoto);
//     console.log (data);
//   });


// export {dowloadDataFromServer};
