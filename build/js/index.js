(function () {
  'use strict';

  var menuPopup = document.querySelector(".header-menu__list");
  var menuUserList = document.querySelector(".header-menu-user__list");
  var headerWrapperMenu = document.querySelector(".header-menu");
  var mainWrapperMenu = document.querySelector(".main-menu");
  var headerPhoneList = document.querySelector(".header-phone__list");
  var headerPhoneBtn = headerPhoneList.querySelector(".header-phone__list-btn");

  var openMenu = function openMenu(e) {

    var btnOpenMenu = e.target.closest(".header-menu__btn");
    if (btnOpenMenu === null) {
      return;
    }
    e.preventDefault();
    btnOpenMenu.classList.toggle('header-menu__btn--opened');
    menuPopup.classList.toggle("header-menu__list--opened");
    menuUserList.classList.toggle("header-menu-user__list--closed");
  };

  var openMenuPopup = function openMenuPopup() {
    headerWrapperMenu.addEventListener("click", openMenu);
    mainWrapperMenu.addEventListener("click", openMenu);
  };

  var openHeaderPhone = function openHeaderPhone() {
    if (window.matchMedia("(max-width: 1169px)").matches) {
      headerPhoneList.classList.toggle("header-phone__list--opened");
    }
  };

  var openHeaderPhoneItem = function openHeaderPhoneItem() {
    headerPhoneBtn.addEventListener("click", openHeaderPhone);
  };

  //
  // const headerPopupItemsList = document.querySelector(`.header-popup-item__list`);
  // const headerPopupLinks = headerPopupItemsList.querySelectorAll(`.header-popup-item__item`);
  // const headerPopupDescription = headerPopupItemsList.querySelectorAll(`.header-popup-item__description`);
  //
  // export const openHeaderPopupDescription = () => {
  //   for (let i = 0; i < headerPopupLinks.length; i++) {
  //     headerPopupLinks[i].addEventListener(`click`, (evt) =>{
  //       evt.preventDefault();
  //       headerPopupLinks[i].classList.toggle(`header-popup-item__item--active`);
  //       headerPopupDescription[i].classList.add(`header-popup-item__description--opened`)
  //     })
  //   }
  // };

  var shiftMenu = function shiftMenu() {

    var mainWrapper = document.querySelector(".main__wrapper");
    var leftMenu = mainWrapper.querySelector(".main-menu");

    var getCoordinate = function getCoordinate() {
      var shiftWrapper = mainWrapper.getBoundingClientRect().left;
      leftMenu.style.left = shiftWrapper - leftMenu.offsetWidth + "px";
    };

    if (window.matchMedia("(min-width: 1920px)").matches) {
      getCoordinate();

      window.addEventListener("resize", function () {
        getCoordinate();
      });
    }
  };

  var ESC_KEYCODE = 27;
  var linksPopup = document.querySelectorAll(".popup-enter");
  var popupEnter = document.querySelector(".main-modal--enter");
  var popupEnterCloseBtn = popupEnter.querySelector(".main-modal__btn");
  var sendLink = popupEnter.querySelector(".main-modal-form__btn");

  var regLink = popupEnter.querySelector(".registration");
  var regPopup = document.querySelector(".main-modal--reg");
  var linkRegPopup = regPopup.querySelector(".main-modal-form__btn");
  var closeRegPopupBtn = regPopup.querySelector(".main-modal__btn");

  var openEnterPopup = function openEnterPopup() {
    for (var i = 0; i < linksPopup.length; i++) {
      linksPopup[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        popupEnter.classList.add("main-modal--opened");

        popupEnterCloseBtn.addEventListener("click", closePopup);
        escClosePopup();
        sendLink.addEventListener("click", closePopup);

        regLink.addEventListener("click", function (evt) {
          evt.preventDefault();
          popupEnter.classList.remove("main-modal--opened");

          regPopup.classList.add("main-modal--opened");
          closeRegPopupBtn.addEventListener("click", closeRegPopup);
          escCloseRegpopup();
          linkRegPopup.addEventListener("click", closeRegPopup);
        });
      });
    }
  };

  var closePopup = function closePopup(evt) {
    evt.preventDefault();
    popupEnter.classList.remove("main-modal--opened");
  };

  var escClosePopup = function escClosePopup() {
    document.addEventListener("keydown", function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        evt.preventDefault();
        popupEnter.classList.remove("main-modal--opened");
      }
    });
  };

  var closeRegPopup = function closeRegPopup(evt) {
    evt.preventDefault();
    regPopup.classList.remove("main-modal--opened");
  };

  var escCloseRegpopup = function escCloseRegpopup() {
    document.addEventListener("keydown", function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        evt.preventDefault();
        regPopup.classList.remove("main-modal--opened");
      }
    });
  };

  var ESC_KEYCODE$1 = 27;

  var questionLinks = document.querySelectorAll(".question-btn");
  var questionModal = document.querySelector(".main-modal--question");
  var sendLink$1 = questionModal.querySelector(".main-modal-form__btn");
  var closeQuestPopupBtn = questionModal.querySelector(".main-modal__btn");

  var openQuestPopup = function openQuestPopup() {
    for (var i = 0; i < questionLinks.length; i++) {
      questionLinks[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        questionModal.classList.add("main-modal--opened");

        sendLink$1.addEventListener("click", closePopup$1);
        closeQuestPopupBtn.addEventListener("click", closePopup$1);
        escClosePopup$1();
      });
    }
  };

  var closePopup$1 = function closePopup(evt) {
    evt.preventDefault();
    questionModal.classList.remove("main-modal--opened");
  };

  var escClosePopup$1 = function escClosePopup() {
    document.addEventListener("keydown", function (evt) {
      if (evt.keyCode === ESC_KEYCODE$1) {
        evt.preventDefault();
        questionModal.classList.remove("main-modal--opened");
      }
    });
  };

  shiftMenu();
  openEnterPopup();
  openQuestPopup();
  openMenuPopup();
  openHeaderPhoneItem();

  var map = document.querySelector('.map');
  var myMap = void 0;

  var init = function init() {

    myMap = new ymaps.Map('map', {
      center: [61.257033, 73.398755],
      zoom: 16
    });
    // Создаём макет содержимого.

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Сервис-3'
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
  var wrap = document.querySelector('.gallery__list-wrapper');
  var galleryList = wrap.querySelector('.gallery__list');
  var galleryArray = wrap.querySelectorAll('.gallery__item');
  var galleryItem = wrap.querySelector('.gallery__item');
  var nextGalleryBtn = document.querySelector('.slider-arrow__btn--next');
  var prewFalleryBtn = document.querySelector('.slider-arrow__btn--back');

  // galleryList.style.width = galleryItem.offsetWidth * galleryArray.length + `px`;

  var overlay = document.querySelector('.overlay');
  var viewFullGalleryItem = function viewFullGalleryItem() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      var _loop = function _loop(i) {
        galleryArray[i].addEventListener('click', function () {
          galleryArray[i].classList.toggle('gallery__item--full');
          overlay.classList.toggle('overlay--opened');

          document.addEventListener('keydown', function (evt) {
            if (evt.keyCode === 27) {
              evt.preventDefault();
              galleryArray[i].classList.remove('gallery__item--full');
              overlay.classList.remove('overlay--opened');
            }
          });
        });
      };

      for (var i = 0; i < galleryArray.length; i++) {
        _loop(i);
      }
    }
  };
  viewFullGalleryItem();

  // фуллКартинки service-3__img
  var serviceList = document.querySelector('.service-3__list');
  var serviceItems = serviceList.querySelectorAll('.service-3__item');

  var viewFullServiceItem = function viewFullServiceItem() {
    var _loop2 = function _loop2(i) {
      serviceItems[i].addEventListener('click', function () {
        serviceItems[i].classList.toggle('service-3__item--opened');
        overlay.classList.toggle('overlay--opened');

        document.addEventListener('keydown', function (evt) {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            serviceItems[i].classList.remove('service-3__item--opened');
            overlay.classList.remove('overlay--opened');
          }
        });
      });
    };

    for (var i = 0; i < serviceItems.length; i++) {
      _loop2(i);
    }
  };
  viewFullServiceItem();

}());

//# sourceMappingURL=index.js.map
