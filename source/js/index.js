import {openMenuPopup, openHeaderPhoneItem} from './moduls/header.js';
import {shiftMenu} from './moduls/menu.js';
import {openEnterPopup} from './moduls/popups/enterPopup.js';
import {openQuestPopup} from './moduls/popups/questionPopup.js';
import {seeNextSlide, seePrewSlide, seeNextSlideGallery, seePrewSlideGallery, touchSlider} from './moduls/sliders.js';
import {debounce} from './moduls/debounce.js';
import {globalClose} from './reviews.js'

shiftMenu();
openEnterPopup();
openQuestPopup();
openMenuPopup();
openHeaderPhoneItem();

const buttonCloseGlobal = document.querySelector(`.button-close-global`);

const nextGalleryBtn = document.querySelectorAll(`.slider-arrow__btn--next`);
const prewFalleryBtn = document.querySelectorAll(`.slider-arrow__btn--back`);

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
//Слайдер наши дома
const ourHousesWrap = document.querySelector(`.our-houses__list-wapper`);
const ourHousesList = ourHousesWrap.querySelector(`.our-houses__list`);
const ourHousesArray = ourHousesWrap.querySelectorAll(`.our-houses`);
const ourHousesItem = ourHousesWrap.querySelector(`.our-houses`);

let ourHoesesSlide = 0;

nextGalleryBtn[1].addEventListener(`click`, () => {
  ourHoesesSlide = seeNextSlide(ourHoesesSlide, ourHousesItem, ourHousesWrap, ourHousesArray, ourHousesList);
});
prewFalleryBtn[1].addEventListener(`click`, () => {
  ourHoesesSlide = seePrewSlide(ourHoesesSlide, ourHousesItem, ourHousesArray, ourHousesList)
});

touchSlider(ourHoesesSlide, ourHousesItem, ourHousesWrap, ourHousesArray, ourHousesList);

// Слайдер Новости
const newsWrap = document.querySelector(`.news__list-wrapper`);
const newsList = newsWrap.querySelector(`.news__list`);
const newsArray = newsWrap.querySelectorAll(`.news__item`);
const newsItem = newsWrap.querySelector(`.news__item`);

let newsSlide = 0;

nextGalleryBtn[0].addEventListener(`click`, () => {
  newsSlide = seeNextSlide(newsSlide, newsItem, newsWrap, newsArray, newsList);
});
prewFalleryBtn[0].addEventListener(`click`, () => {
  newsSlide = seePrewSlide(newsSlide, newsItem, newsArray, newsList)
});

touchSlider(newsSlide, newsItem, newsWrap, newsArray, newsList);

// Слайдер галерея
const wrap = document.querySelector(`.gallery__list-wrapper`);
const galleryList = wrap.querySelector(`.gallery__list`);
const galleryArray = wrap.querySelectorAll(`.gallery__item`);
const galleryItem = wrap.querySelector(`.gallery__item`);

let currentSlid = 0;

nextGalleryBtn[2].addEventListener(`click`, () =>{
  currentSlid = seeNextSlideGallery(currentSlid, galleryItem, wrap, galleryArray, galleryList)
});

prewFalleryBtn[2].addEventListener(`click`, () => {
  currentSlid = seePrewSlideGallery(currentSlid, galleryItem, galleryArray, galleryList)
});

for (let k = 0; k < galleryArray.length; k++) {
  galleryArray[k].addEventListener('touchstart', function (evt) {


    let startX = evt.changedTouches[0].clientX;

    function touchMove(e) {

      let newX = e.changedTouches[0].clientX;

      debounce(function () {
        if (startX - newX > 0) {
          currentSlid = seeNextSlideGallery(currentSlid, galleryItem, wrap, galleryArray, galleryList)
        } else {
          currentSlid = seePrewSlideGallery(currentSlid, galleryItem, galleryArray, galleryList)
        }

      }, 100);
    }

    function touchEnd() {

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
    overlay.classList.remove(`overlay--opened`);
    buttonCloseGlobal.classList.remove(`button-close-global--opened`);
  });
};
const viewFullGalleryItem = () => {

  if (window.matchMedia("(min-width: 768px)").matches) {


    for (let i = 0; i < galleryArray.length; i++) {
      galleryArray[i].addEventListener(`click`, () => {
        galleryArray[i].classList.toggle(`gallery__item--full`);
        overlay.classList.toggle(`overlay--opened`);
        globalClose(i, galleryArray, `gallery__item--full`);
        a(i);

        document.addEventListener(`keydown`, (evt) => {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            galleryArray[i].classList.remove(`gallery__item--full`);
            overlay.classList.remove(`overlay--opened`);
            buttonCloseGlobal.classList.remove(`button-close-global--opened`);
          }
        })
      });
    }
  }
};
viewFullGalleryItem();
window.addEventListener(`resize`, () => {

viewFullGalleryItem();
});
// фуллКартинки service-3__img
const serviceList = document.querySelector(`.service-3__list`);
const serviceItems = serviceList.querySelectorAll(`.service-3__item`);

const viewFullServiceItem = () => {
  for (let i = 0; i < serviceItems.length; i++) {
    serviceItems[i].addEventListener(`click`, () => {
      serviceItems[i].classList.toggle(`service-3__item--opened`);
      // serviceItems[i].style.top = window.pageYOffset + 50 + `px`;
      overlay.classList.toggle(`overlay--opened`);
      globalClose(i, serviceItems, `service-3__item--opened`);

      document.addEventListener(`keydown`, (evt) => {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          serviceItems[i].classList.remove(`service-3__item--opened`);
          // serviceItems[i].style.top = 0 + `px`;
          overlay.classList.remove(`overlay--opened`);
          buttonCloseGlobal.classList.remove(`button-close-global--opened`);
        }
      })
    })
  }
};
viewFullServiceItem();
