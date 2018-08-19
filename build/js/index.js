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

  openMenuPopup();

}());

//# sourceMappingURL=index.js.map
