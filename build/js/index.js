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

  openMenuPopup();
  shiftMenu();

}());

//# sourceMappingURL=index.js.map
