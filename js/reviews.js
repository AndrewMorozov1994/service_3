import {openMenuPopup} from './moduls/header.js';
import {shiftMenu} from './moduls/menu.js';
import {openEnterPopup} from './moduls/popups/enterPopup.js';

openMenuPopup();
shiftMenu();
openEnterPopup();

const revItems = document.querySelectorAll(`.reviews__img`);
const overlay = document.querySelector(`.overlay`);

const viewFullImg = () => {
  for (let i = 0; i < revItems.length; i++) {
    revItems[i].addEventListener(`click`, () => {
      revItems[i].classList.toggle(`reviews__img--opened`);
      overlay.classList.toggle(`overlay--opened`);

      document.addEventListener(`keydown`, (evt) => {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          revItems[i].classList.remove(`reviews__img--opened`);
          overlay.classList.remove(`overlay--opened`);
        }
      })
    })
  }
};
viewFullImg();
