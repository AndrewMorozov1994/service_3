(function () {
  'use strict';

  const btnOpenMenu = document.querySelector(`.header-menu__btn`);
  const menuPopup = document.querySelector(`.header-menu__list`);

  const openMenuPopup = () => {
    btnOpenMenu.addEventListener(`click`, () => {
      btnOpenMenu.classList.toggle('header-menu__btn--opened');
      menuPopup.classList.toggle(`header-menu__list--opened`);
    });
  };

  openMenuPopup();

}());

//# sourceMappingURL=index.js.map
