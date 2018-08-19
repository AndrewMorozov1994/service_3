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
