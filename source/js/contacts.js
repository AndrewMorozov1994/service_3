import {openMenuPopup, openHeaderPhoneItem} from './moduls/header.js';
import {shiftMenu} from './moduls/menu.js';
import {openEnterPopup} from './moduls/popups/enterPopup.js';

openMenuPopup();
shiftMenu();
openEnterPopup();
openHeaderPhoneItem();

const wrapper = document.querySelector(`.page-contacts__sub-list`);

const clickTurnEl = (evt) => {
 const turnDownWrapper = evt.target.closest(`.page-contacts__sub-item`);
 if (turnDownWrapper === null) {
   return;
 }

 const input = turnDownWrapper.querySelector(`.page-contacts-radio-input`);
 const turnDown = turnDownWrapper.querySelector(`.turn-down`);

 if (evt.target === turnDown) {
   evt.preventDefault();
   input.checked = false
 }
};

wrapper.addEventListener(`click`, clickTurnEl);
