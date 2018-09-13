import {openMenuPopup, openHeaderPhoneItem} from './moduls/header.js';
import {shiftMenu} from './moduls/menu.js';
import {openEnterPopup} from './moduls/popups/enterPopup.js';
const buttonCloseGlobal = document.querySelector(`.button-close-global`);

openMenuPopup();
shiftMenu();
openEnterPopup();
openHeaderPhoneItem();

export const globalClose = (i, item, itemSelector) => {
  buttonCloseGlobal.classList.toggle(`button-close-global--opened`);

  buttonCloseGlobal.addEventListener(`click`, () => {
    item[i].classList.remove(itemSelector);
    item[i].style.top = 0 + `px`;
    overlay.classList.remove(`overlay--opened`);
    buttonCloseGlobal.classList.remove(`button-close-global--opened`);
    buttonCloseGlobal.removeEventListener(`click`, () => {})
  })
};

const revItems = document.querySelectorAll(`.reviews__img`);
const overlay = document.querySelector(`.overlay`);

const viewFullImg = () => {
  for (let i = 0; i < revItems.length; i++) {
    revItems[i].addEventListener(`click`, () => {
      revItems[i].classList.toggle(`reviews__img--opened`);
      overlay.classList.toggle(`overlay--opened`);
      globalClose(i, revItems, `reviews__img--opened`);

      document.addEventListener(`keydown`, (evt) => {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          revItems[i].classList.remove(`reviews__img--opened`);
          overlay.classList.remove(`overlay--opened`);
          buttonCloseGlobal.classList.remove(`button-close-global--opened`);
        }
      })
    })
  }
};
viewFullImg();
