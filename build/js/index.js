(function () {
  'use strict';

  var btnOpenMenu = document.querySelector('.header-menu__btn');
  var menuPopup = document.querySelector('.header-menu__list');
  var menuUserList = document.querySelector('.header-menu-user__list');

  var openMenuPopup = function openMenuPopup() {
    btnOpenMenu.addEventListener('click', function () {
      btnOpenMenu.classList.toggle('header-menu__btn--opened');
      menuPopup.classList.toggle('header-menu__list--opened');
      menuUserList.classList.toggle('header-menu-user__list--closed');
    });
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

  openMenuPopup();
  shiftMenu();
  openEnterPopup();
  openQuestPopup();

}());

//# sourceMappingURL=index.js.map
