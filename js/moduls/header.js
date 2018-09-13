const menuPopup = document.querySelector(`.header-menu__list`);
const menuUserList = document.querySelector(`.header-menu-user__list`);
const headerWrapperMenu = document.querySelector(`.header-menu`);
const mainWrapperMenu = document.querySelector(`.main-menu`);
const headerPhoneList = document.querySelector(`.header-phone__list`);
const headerPhoneBtn = headerPhoneList.querySelector(`.header-phone__list-btn`);

const openMenu = (e) => {

  const btnOpenMenu = e.target.closest(`.header-menu__btn`);
  if (btnOpenMenu === null) {
    return;
  }
    e.preventDefault();
    btnOpenMenu.classList.toggle('header-menu__btn--opened');
    menuPopup.classList.toggle(`header-menu__list--opened`);
    menuUserList.classList.toggle(`header-menu-user__list--closed`);
};

export const openMenuPopup = () => {
  headerWrapperMenu.addEventListener(`click`, openMenu);
  mainWrapperMenu.addEventListener(`click`, openMenu);
};

const openHeaderPhone = () => {
  if (window.matchMedia("(max-width: 1169px)").matches) {
    headerPhoneList.classList.toggle(`header-phone__list--opened`);
  }
};

export const openHeaderPhoneItem = () => {
  headerPhoneBtn.addEventListener(`click`, openHeaderPhone);
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
