import {NO_EFFECT_CONFIG, CHROME_CONFIG, SEPIA_CONFIG, MARVIN_CONFIG, PHOBOS_CONFIG, HEAT_CONFIG} from './const.js';

const pageBody = document.querySelector('body');
const uploadFormPhoto = pageBody.querySelector('.img-upload__form'); // Находим форму
const sliderElement = uploadFormPhoto.querySelector('.effect-level__slider');// слайдер
const sliderElementContainer = uploadFormPhoto.querySelector('.img-upload__effect-level');// контейнер слайдера
const effectsList = uploadFormPhoto.querySelector('.effects__list'); // список эффектов
const uploadPhotoPreview = uploadFormPhoto.querySelector('.img-upload__preview img');
const changeEffectInput = uploadFormPhoto.querySelector('.effect-level__value');// здесь записываем value при движении ползунка.

const radioButtonNoneEffects = uploadFormPhoto.querySelector('#effect-none');
const radioButtonEffectСhrome = uploadFormPhoto.querySelector('#effect-chrome');
const radioButtonEffectSepia = uploadFormPhoto.querySelector('#effect-sepia');
const radioButtonEffectMarvin = uploadFormPhoto.querySelector('#effect-marvin');
const radioButtonEffectPhobos = uploadFormPhoto.querySelector('#effect-phobos');
const radioButtonEffectHeat = uploadFormPhoto.querySelector('#effect-heat');

const applyOriginalEffect = () => {
  uploadPhotoPreview.style.filter = '';
  sliderElement.classList.add('hidden');
  sliderElementContainer.classList.add('hidden');
};

const showSliderElement = () => {
  sliderElement.classList.remove('hidden');
  sliderElementContainer.classList.remove('hidden');
  uploadPhotoPreview.style.filter = '';
};
const createSliderEffects = () => {

  noUiSlider.create(sliderElement, NO_EFFECT_CONFIG);

  effectsList.addEventListener ('change', () => {

    if (radioButtonNoneEffects.checked) {
      applyOriginalEffect();
    }

    if (radioButtonEffectСhrome.checked) {

      showSliderElement();
      sliderElement.noUiSlider.updateOptions(CHROME_CONFIG);

      sliderElement.noUiSlider.on('update', () => {
        if (radioButtonEffectСhrome.checked) {
          const currentEffectValue = sliderElement.noUiSlider.get ();
          uploadPhotoPreview.style.filter = `grayscale(${currentEffectValue})`;
          changeEffectInput.setAttribute('value', currentEffectValue);
          changeEffectInput.value = currentEffectValue;
        }
      });
    }

    if (radioButtonEffectSepia.checked) {

      showSliderElement();
      sliderElement.noUiSlider.updateOptions(SEPIA_CONFIG);

      sliderElement.noUiSlider.on('update', () => {
        if (radioButtonEffectSepia.checked) {
          const currentEffectValue = sliderElement.noUiSlider.get ();
          uploadPhotoPreview.style.filter = `sepia(${currentEffectValue})`;
          changeEffectInput.setAttribute('value', currentEffectValue);
          changeEffectInput.value = currentEffectValue;
        }
      });
    }

    if (radioButtonEffectMarvin.checked) {

      showSliderElement();
      sliderElement.noUiSlider.updateOptions(MARVIN_CONFIG);

      sliderElement.noUiSlider.on('update', (value) => {
        if (radioButtonEffectMarvin.checked) {
          const currentEffectValue = sliderElement.noUiSlider.get (value);
          uploadPhotoPreview.style.filter = `invert(${currentEffectValue}%)`;
          changeEffectInput.setAttribute('value', currentEffectValue);
          changeEffectInput.value = currentEffectValue;
        }
      });
    }

    if (radioButtonEffectPhobos.checked) {

      showSliderElement();
      sliderElement.noUiSlider.updateOptions(PHOBOS_CONFIG);

      sliderElement.noUiSlider.on('update', () => {
        if (radioButtonEffectPhobos.checked) {
          const currentEffectValue = sliderElement.noUiSlider.get ();
          uploadPhotoPreview.style.filter = `blur(${currentEffectValue}px)`;
          changeEffectInput.setAttribute('value', currentEffectValue);
          changeEffectInput.value = currentEffectValue;
        }
      });
    }

    if (radioButtonEffectHeat.checked) {

      showSliderElement();
      sliderElement.noUiSlider.updateOptions(HEAT_CONFIG);

      sliderElement.noUiSlider.on('update', () => {
        if (radioButtonEffectHeat.checked) {
          const currentEffectValue = sliderElement.noUiSlider.get ();
          uploadPhotoPreview.style.filter = `brightness(${currentEffectValue})`;
          changeEffectInput.setAttribute('value', currentEffectValue);
          changeEffectInput.value = currentEffectValue;
        }
      });
    }
  });
};

export {createSliderEffects, applyOriginalEffect};
