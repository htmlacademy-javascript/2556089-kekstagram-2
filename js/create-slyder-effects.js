const pageBody = document.querySelector('body');
const uploadFormPhoto = pageBody.querySelector('.img-upload__form'); // Находим форму
const sliderElement = uploadFormPhoto.querySelector('.effect-level__slider');// слайдер
const sliderElementContainer = uploadFormPhoto.querySelector('.img-upload__effect-level');// контейнер слайдера
const effectsList = uploadFormPhoto.querySelector('.effects__list'); // список эффектов
const uploadPhotoPreview = uploadFormPhoto.querySelector('.img-upload__preview img');
const changeEffectInput = uploadFormPhoto.querySelector('.effect-level__value');// здесь записываем value при движении ползунка.

const radioButtonNoneEffects = uploadFormPhoto.querySelector('#effect-none');
const radioButtonEffecСhrom = uploadFormPhoto.querySelector('#effect-chrome');

const radioButtonEffectSepia = uploadFormPhoto.querySelector('#effect-sepia');
const radioButtonEffectMarvin = uploadFormPhoto.querySelector('#effect-marvin');
const radioButtonEffectPhobos = uploadFormPhoto.querySelector('#effect-phobos');
const radioButtonEffectHeat = uploadFormPhoto.querySelector('#effect-heat');

const applyOriginalEffect = () => {
  uploadPhotoPreview.style.filter = '';
  sliderElement.classList.add('hidden');
  sliderElementContainer.classList.add('hidden');
};

const createSliderEffects = () => {

  const showSliderElement = () => {
    sliderElement.classList.remove('hidden');
    sliderElementContainer.classList.remove('hidden');
    uploadPhotoPreview.style.filter = '';
  };

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 0,
    },
    start: 0,
    step: 0,
    connect: 'lower',
  });

  effectsList.addEventListener ('change', () => {

    if (radioButtonNoneEffects.checked) {
      applyOriginalEffect();
    }

    if (radioButtonEffecСhrom.checked) {

      showSliderElement();
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        const currentEffectValue = sliderElement.noUiSlider.get ();
        uploadPhotoPreview.style.filter = `grayscale(${currentEffectValue})`;
        changeEffectInput.setAttribute('value', currentEffectValue);
      });
    }

    if (radioButtonEffectSepia.checked) {

      showSliderElement();
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        const currentEffectValue = sliderElement.noUiSlider.get ();
        uploadPhotoPreview.style.filter = `sepia(${currentEffectValue})`;
        changeEffectInput.setAttribute('value', currentEffectValue);
      });
    }

    if (radioButtonEffectMarvin.checked) {

      showSliderElement();
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });

      sliderElement.noUiSlider.on('update', (value) => {
        const currentEffectValue = sliderElement.noUiSlider.get (value);
        uploadPhotoPreview.style.filter = `invert(${currentEffectValue}%)`;
        changeEffectInput.setAttribute('value', currentEffectValue);
      });
    }

    if (radioButtonEffectPhobos.checked) {

      showSliderElement();
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        const currentEffectValue = sliderElement.noUiSlider.get ();
        uploadPhotoPreview.style.filter = `blur(${currentEffectValue}px)`;
        changeEffectInput.setAttribute('value', currentEffectValue);
      });
    }

    if (radioButtonEffectHeat.checked) {

      showSliderElement();
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        const currentEffectValue = sliderElement.noUiSlider.get ();
        uploadPhotoPreview.style.filter = `brightness(${currentEffectValue})`;
        changeEffectInput.setAttribute('value', currentEffectValue);
      });
    }
  });
};

export {createSliderEffects, applyOriginalEffect};
