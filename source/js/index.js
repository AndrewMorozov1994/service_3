import {openMenuPopup, openHeaderPhoneItem} from './moduls/header.js';
import {shiftMenu} from './moduls/menu.js';
import {openEnterPopup} from './moduls/popups/enterPopup.js';
import {openQuestPopup} from './moduls/popups/questionPopup.js';
import {seeNextSlide, seePrewSlide} from './moduls/sliders.js';

shiftMenu();
openEnterPopup();
openQuestPopup();
openMenuPopup();
openHeaderPhoneItem();

const map = document.querySelector(`.map`);
let myMap;

const init = () => {

  myMap = new ymaps.Map(`map`, {
    center: [61.257033, 73.398755],
    zoom: 16
  });
    // Создаём макет содержимого.

    let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Сервис-3',
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      // Размеры метки.
      iconImageSize: [30, 35],
      balloonLayout: "default#imageWithContent",
      // Картинка балуна
      balloonImageHref: '../img/logoMap.png',
      balloonImageSize: [250, 170],
      balloonImageOffset: [-125, -170]
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
    });

    myMap.geoObjects.add(myPlacemark);
};

ymaps.ready(init);

// Слайдер галерея
const wrap = document.querySelector(`.gallery__list-wrapper`);
const galleryList = wrap.querySelector(`.gallery__list`);
const galleryArray = wrap.querySelectorAll(`.gallery__item`);
const galleryItem = wrap.querySelector(`.gallery__item`);
const nextGalleryBtn = document.querySelector(`.slider-arrow__btn--next`);
const prewFalleryBtn = document.querySelector(`.slider-arrow__btn--back`);

const currentSlid = 0;

// galleryList.style.width = galleryItem.offsetWidth * galleryArray.length + `px`;

const overlay = document.querySelector(`.overlay`);
const viewFullGalleryItem = () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    for (let i = 0; i < galleryArray.length; i++) {
      galleryArray[i].addEventListener(`click`, () => {
        galleryArray[i].classList.toggle(`gallery__item--full`);
        overlay.classList.toggle(`overlay--opened`);

        document.addEventListener(`keydown`, (evt) => {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            galleryArray[i].classList.remove(`gallery__item--full`);
            overlay.classList.remove(`overlay--opened`);
          }
        })
      })
    }
  }
};
viewFullGalleryItem();

// фуллКартинки service-3__img
const serviceList = document.querySelector(`.service-3__list`);
const serviceItems = serviceList.querySelectorAll(`.service-3__item`);

const viewFullServiceItem = () => {
  for (let i = 0; i < serviceItems.length; i++) {
    serviceItems[i].addEventListener(`click`, () => {
      serviceItems[i].classList.toggle(`service-3__item--opened`);
      overlay.classList.toggle(`overlay--opened`);

      document.addEventListener(`keydown`, (evt) => {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          serviceItems[i].classList.remove(`service-3__item--opened`);
          overlay.classList.remove(`overlay--opened`);
        }
      })
    })
  }
};
viewFullServiceItem();

