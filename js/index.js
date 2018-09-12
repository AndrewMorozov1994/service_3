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
  var modalEnt = popupEnter.querySelector(".main-modal__wrapper");

  var regLink = popupEnter.querySelector(".registration");
  var regPopup = document.querySelector(".main-modal--reg");
  var linkRegPopup = regPopup.querySelector(".main-modal-form__btn");
  var closeRegPopupBtn = regPopup.querySelector(".main-modal__btn");
  var modalReg = regPopup.querySelector(".main-modal__wrapper");

  var openEnterPopup = function openEnterPopup() {
    for (var i = 0; i < linksPopup.length; i++) {
      linksPopup[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        popupEnter.classList.add("main-modal--opened");
        modalEnt.style.top = window.pageYOffset + 50 + "px";

        popupEnterCloseBtn.addEventListener("click", closePopup);
        escClosePopup();
        sendLink.addEventListener("click", closePopup);

        regLink.addEventListener("click", function (evt) {
          evt.preventDefault();
          popupEnter.classList.remove("main-modal--opened");

          regPopup.classList.add("main-modal--opened");
          modalReg.style.top = window.pageYOffset + 50 + "px";
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
  var modalWr = questionModal.querySelector(".main-modal__wrapper");

  var openQuestPopup = function openQuestPopup() {
    for (var i = 0; i < questionLinks.length; i++) {
      questionLinks[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        questionModal.classList.add("main-modal--opened");
        modalWr.style.top = window.pageYOffset + 50 + "px";

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

  var lastTimeout = void 0;
  var debounce = function debounce(fun, interval) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(fun, interval);
  };

  var seeNextSlide = function seeNextSlide(offsetSlide, slide, wrapper, arraySlides, slider) {
    if (window.matchMedia("(min-width: 768px)").matches) {
      offsetSlide = (offsetSlide - slide.offsetWidth) % (slide.offsetWidth * arraySlides.length + slide.offsetWidth - wrapper.offsetWidth);
    } else {
      offsetSlide = (offsetSlide - slide.offsetWidth) % (slide.offsetWidth * arraySlides.length);
    }
    slider.style.marginLeft = offsetSlide + 'px';

    return offsetSlide;
  };

  var seePrewSlide = function seePrewSlide(offsetSlide, slide, arraySlides, slider) {
    if (offsetSlide === 0) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        offsetSlide = -(slide.offsetWidth * arraySlides.length);
      } else {
        offsetSlide = -(arraySlides.length * slide.offsetWidth);
      }
    }

    offsetSlide = offsetSlide + slide.offsetWidth;
    slider.style.marginLeft = offsetSlide + 'px';

    return offsetSlide;
  };

  var seeNextSlideGallery = function seeNextSlideGallery(offsetSlide, slide, wrapper, arraySlides, slider) {
    if (window.matchMedia("(min-width: 768px)").matches) {
      offsetSlide = (offsetSlide - slide.offsetWidth) % (slide.offsetWidth * arraySlides.length - slide.offsetWidth);
    } else {
      offsetSlide = (offsetSlide - slide.offsetWidth) % (slide.offsetWidth * arraySlides.length);
    }
    slider.style.marginLeft = offsetSlide + 'px';

    return offsetSlide;
  };

  var seePrewSlideGallery = function seePrewSlideGallery(offsetSlide, slide, arraySlides, slider) {
    if (offsetSlide === 0) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        offsetSlide = -(slide.offsetWidth * arraySlides.length - slide.offsetWidth);
      } else {
        offsetSlide = -(arraySlides.length * slide.offsetWidth);
      }
    }

    offsetSlide = offsetSlide + slide.offsetWidth;
    slider.style.marginLeft = offsetSlide + 'px';

    return offsetSlide;
  };

  var touchSlider = function touchSlider(offsetSlide, slide, wrapper, arraySlides, slider) {
    for (var j = 0; j < arraySlides.length; j++) {
      arraySlides[j].addEventListener('touchstart', function (evt) {

        var startX = evt.changedTouches[0].clientX;

        function touchMove(e) {

          var newX = e.changedTouches[0].clientX;

          debounce(function () {
            if (startX - newX > 0) {
              offsetSlide = seeNextSlide(offsetSlide, slide, wrapper, arraySlides, slider);
            } else {
              offsetSlide = seePrewSlide(offsetSlide, slide, arraySlides, slider);
            }
          }, 100);
        }

        function touchEnd() {

          slider.removeEventListener('touchmove', touchMove);

          slider.removeEventListener('touchend', touchEnd);
        }

        slider.addEventListener('touchmove', touchMove);

        slider.addEventListener('touchend', touchEnd);
      });
    }
  };

  var buttonCloseGlobal = document.querySelector('.button-close-global');

  openMenuPopup();
  shiftMenu();
  openEnterPopup();
  openHeaderPhoneItem();

  var globalClose = function globalClose(i, item, itemSelector) {
    buttonCloseGlobal.classList.toggle('button-close-global--opened');

    buttonCloseGlobal.addEventListener('click', function () {
      item[i].classList.remove(itemSelector);
      item[i].style.top = 0 + 'px';
      overlay.classList.remove('overlay--opened');
      buttonCloseGlobal.classList.remove('button-close-global--opened');
      buttonCloseGlobal.removeEventListener('click', function () {});
    });
  };

  var revItems = document.querySelectorAll('.reviews__img');
  var overlay = document.querySelector('.overlay');

  var viewFullImg = function viewFullImg() {
    var _loop = function _loop(i) {
      revItems[i].addEventListener('click', function () {
        revItems[i].classList.toggle('reviews__img--opened');
        overlay.classList.toggle('overlay--opened');
        globalClose(i, revItems, 'reviews__img--opened');

        document.addEventListener('keydown', function (evt) {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            revItems[i].classList.remove('reviews__img--opened');
            overlay.classList.remove('overlay--opened');
            buttonCloseGlobal.classList.remove('button-close-global--opened');
          }
        });
      });
    };

    for (var i = 0; i < revItems.length; i++) {
      _loop(i);
    }
  };
  viewFullImg();

  shiftMenu();
  openEnterPopup();
  openQuestPopup();
  openMenuPopup();
  openHeaderPhoneItem();

  var buttonCloseGlobal$1 = document.querySelector('.button-close-global');

  var nextGalleryBtn = document.querySelectorAll('.slider-arrow__btn--next');
  var prewFalleryBtn = document.querySelectorAll('.slider-arrow__btn--back');

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
  //Слайдер наши дома
  var ourHousesWrap = document.querySelector('.our-houses__list-wapper');
  var ourHousesList = ourHousesWrap.querySelector('.our-houses__list');
  var ourHousesArray = ourHousesWrap.querySelectorAll('.our-houses');
  var ourHousesItem = ourHousesWrap.querySelector('.our-houses');

  var ourHoesesSlide = 0;

  nextGalleryBtn[1].addEventListener('click', function () {
    ourHoesesSlide = seeNextSlide(ourHoesesSlide, ourHousesItem, ourHousesWrap, ourHousesArray, ourHousesList);
  });
  prewFalleryBtn[1].addEventListener('click', function () {
    ourHoesesSlide = seePrewSlide(ourHoesesSlide, ourHousesItem, ourHousesArray, ourHousesList);
  });

  touchSlider(ourHoesesSlide, ourHousesItem, ourHousesWrap, ourHousesArray, ourHousesList);

  // Слайдер Новости
  var newsWrap = document.querySelector('.news__list-wrapper');
  var newsList = newsWrap.querySelector('.news__list');
  var newsArray = newsWrap.querySelectorAll('.news__item');
  var newsItem = newsWrap.querySelector('.news__item');

  var newsSlide = 0;

  nextGalleryBtn[0].addEventListener('click', function () {
    newsSlide = seeNextSlide(newsSlide, newsItem, newsWrap, newsArray, newsList);
  });
  prewFalleryBtn[0].addEventListener('click', function () {
    newsSlide = seePrewSlide(newsSlide, newsItem, newsArray, newsList);
  });

  touchSlider(newsSlide, newsItem, newsWrap, newsArray, newsList);

  // Слайдер галерея
  var wrap = document.querySelector('.gallery__list-wrapper');
  var galleryList = wrap.querySelector('.gallery__list');
  var galleryArray = wrap.querySelectorAll('.gallery__item');
  var galleryItem = wrap.querySelector('.gallery__item');

  var currentSlid = 0;

  nextGalleryBtn[2].addEventListener('click', function () {
    currentSlid = seeNextSlideGallery(currentSlid, galleryItem, wrap, galleryArray, galleryList);
  });

  prewFalleryBtn[2].addEventListener('click', function () {
    currentSlid = seePrewSlideGallery(currentSlid, galleryItem, galleryArray, galleryList);
  });

  for (var k = 0; k < galleryArray.length; k++) {
    galleryArray[k].addEventListener('touchstart', function (evt) {

      var startX = evt.changedTouches[0].clientX;

      function touchMove(e) {

        var newX = e.changedTouches[0].clientX;

        debounce(function () {
          if (startX - newX > 0) {
            currentSlid = seeNextSlideGallery(currentSlid, galleryItem, wrap, galleryArray, galleryList);
          } else {
            currentSlid = seePrewSlideGallery(currentSlid, galleryItem, galleryArray, galleryList);
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

  var overlay$1 = document.querySelector('.overlay');

  var a = function a(i) {
    overlay$1.addEventListener('click', function (evt) {
      evt.preventDefault();
      galleryArray[i].classList.remove('gallery__item--full');
      overlay$1.classList.remove('overlay--opened');
      buttonCloseGlobal$1.classList.remove('button-close-global--opened');
    });
  };
  var viewFullGalleryItem = function viewFullGalleryItem() {

    if (window.matchMedia("(min-width: 768px)").matches) {
      var _loop = function _loop(i) {
        galleryArray[i].addEventListener('click', function () {
          galleryArray[i].classList.toggle('gallery__item--full');
          overlay$1.classList.toggle('overlay--opened');
          globalClose(i, galleryArray, 'gallery__item--full');
          a(i);

          document.addEventListener('keydown', function (evt) {
            if (evt.keyCode === 27) {
              evt.preventDefault();
              galleryArray[i].classList.remove('gallery__item--full');
              overlay$1.classList.remove('overlay--opened');
              buttonCloseGlobal$1.classList.remove('button-close-global--opened');
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
  window.addEventListener('resize', function () {

    viewFullGalleryItem();
  });
  // фуллКартинки service-3__img
  var serviceList = document.querySelector('.service-3__list');
  var serviceItems = serviceList.querySelectorAll('.service-3__item');

  var viewFullServiceItem = function viewFullServiceItem() {
    var _loop2 = function _loop2(i) {
      serviceItems[i].addEventListener('click', function () {
        serviceItems[i].classList.toggle('service-3__item--opened');
        // serviceItems[i].style.top = window.pageYOffset + 50 + `px`;
        overlay$1.classList.toggle('overlay--opened');
        globalClose(i, serviceItems, 'service-3__item--opened');

        document.addEventListener('keydown', function (evt) {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            serviceItems[i].classList.remove('service-3__item--opened');
            // serviceItems[i].style.top = 0 + `px`;
            overlay$1.classList.remove('overlay--opened');
            buttonCloseGlobal$1.classList.remove('button-close-global--opened');
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
