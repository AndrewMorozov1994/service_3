import {openMenuPopup, openHeaderPhoneItem} from './moduls/header.js';
import {shiftMenu} from './moduls/menu.js';
import {openEnterPopup} from './moduls/popups/enterPopup.js';
import {openQuestPopup} from './moduls/popups/questionPopup.js';
import {seeNextSlide, seePrewSlide} from './moduls/sliders.js';
import {debounce} from './moduls/debounce.js';

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
      balloonImageOffset: [-125, -170],
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
const nextGalleryBtn = document.querySelectorAll(`.slider-arrow__btn--next`);
const prewFalleryBtn = document.querySelectorAll(`.slider-arrow__btn--back`);

let currentSlid = 0;

nextGalleryBtn[2].addEventListener(`click`, () =>{
  currentSlid = seeNextSlide(currentSlid, galleryItem, wrap, galleryArray, galleryList)
});

prewFalleryBtn[2].addEventListener(`click`, () => {
  currentSlid = seePrewSlide(currentSlid, galleryItem, wrap, galleryArray, galleryList)
});

for (let k = 0; k < galleryArray.length; k++) {
  galleryArray[k].addEventListener('touchstart', function (evt) {


    let startX = evt.changedTouches[0].clientX;

    function touchMove(e) {

      let newX = e.changedTouches[0].clientX;

      debounce(function () {
        if (startX - newX > 0) {
          currentSlid = seeNextSlide(currentSlid, galleryItem, wrap, galleryArray, galleryList)
        } else {
          currentSlid = seePrewSlide(currentSlid, galleryItem, wrap, galleryArray, galleryList)
        }

      }, 50);
    }

    function touchEnd(endEvt) {

      galleryList.removeEventListener('touchmove', touchMove);

      galleryList.removeEventListener('touchend', touchEnd);
    }

    galleryList.addEventListener('touchmove', touchMove);

    galleryList.addEventListener('touchend', touchEnd);

  });
}


const overlay = document.querySelector(`.overlay`);

const a = (i) => {
  overlay.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    galleryArray[i].classList.remove(`gallery__item--full`);
    galleryArray[i].style.width = wrap.offsetWidth / 2 + `px`;
    overlay.classList.remove(`overlay--opened`);
  });
};
const viewFullGalleryItem = () => {

  if (window.matchMedia("(min-width: 768px)").matches) {

    wrap.style.width = document.documentElement.clientWidth + `px`;
    galleryList.style.width = galleryItem.offsetWidth * galleryArray.length + `px`;

    for (let i = 0; i < galleryArray.length; i++) {
      galleryArray[i].style.width = wrap.offsetWidth / 2 + `px`;
      galleryArray[i].addEventListener(`click`, () => {
        galleryArray[i].classList.add(`gallery__item--full`);
        galleryArray[i].style.width = wrap.offsetWidth + `px`;
        overlay.classList.add(`overlay--opened`);
        a(i);

        document.addEventListener(`keydown`, (evt) => {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            galleryArray[i].classList.remove(`gallery__item--full`);
            galleryArray[i].style.width = wrap.offsetWidth / 2 + `px`;
            overlay.classList.remove(`overlay--opened`);
          }
        })
      });
    }
  }
};
viewFullGalleryItem();
window.addEventListener(`resize`, () => {

console.log(document.documentElement.clientWidth);
viewFullGalleryItem();
});
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

