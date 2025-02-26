// const pageBody = document.querySelector('body');
// const uploadFormPhoto = pageBody.querySelector('.img-upload__form'); // Находим форму

const doLoadData = (onSuccess, onError) => fetch ('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if(response.ok) {
      return response.json ();
    }

    throw new Error (`${response.status} ${response.statusText}`);
  })

  .then((data) => {
    onSuccess (data);
  })

  .catch ((err) => {
    onError(err);
  });

export {doLoadData};


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


