const btnOpenMenu = document.querySelector(`.header-menu__btn`);
const menuPopup = document.querySelector(`.header-menu__list`);
const menuUserList = document.querySelector(`.header-menu-user__list`);

export const openMenuPopup = () => {
  btnOpenMenu.addEventListener(`click`, () => {
    btnOpenMenu.classList.toggle('header-menu__btn--opened');
    menuPopup.classList.toggle(`header-menu__list--opened`);
    menuUserList.classList.toggle(`header-menu-user__list--closed`);
  })
};
