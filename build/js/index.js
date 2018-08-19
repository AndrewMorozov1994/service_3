(function () {
  'use strict';

  var btnOpenMenu = document.querySelector('.header-menu__btn');
  var menuPopup = document.querySelector('.header-menu__list');

  var openMenuPopup = function openMenuPopup() {
    btnOpenMenu.addEventListener('click', function () {
      btnOpenMenu.classList.toggle('header-menu__btn--opened');
      menuPopup.classList.toggle('header-menu__list--opened');
    });
  };

  openMenuPopup();

}());

//# sourceMappingURL=index.js.map
