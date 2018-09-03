const ESC_KEYCODE = 27;
const linksPopup = document.querySelectorAll(`.popup-enter`);
const popupEnter = document.querySelector(`.main-modal--enter`);
const popupEnterCloseBtn = popupEnter.querySelector(`.main-modal__btn`);
const sendLink = popupEnter.querySelector(`.main-modal-form__btn`);
const modalEnt = popupEnter.querySelector(`.main-modal__wrapper`);

const regLink = popupEnter.querySelector(`.registration`);
const regPopup = document.querySelector(`.main-modal--reg`);
const linkRegPopup = regPopup.querySelector(`.main-modal-form__btn`);
const closeRegPopupBtn = regPopup.querySelector(`.main-modal__btn`);
const modalReg = regPopup.querySelector(`.main-modal__wrapper`);

const openEnterPopup = () => {
  for (let i = 0; i < linksPopup.length; i++) {
    linksPopup[i].addEventListener(`click`, (evt) => {
      evt.preventDefault();
      popupEnter.classList.add(`main-modal--opened`);
      modalEnt.style.top = window.pageYOffset + 50 + `px`;

      popupEnterCloseBtn.addEventListener(`click`, closePopup);
      escClosePopup();
      sendLink.addEventListener(`click`, closePopup);

      regLink.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        popupEnter.classList.remove(`main-modal--opened`);

        regPopup.classList.add(`main-modal--opened`);
        modalReg.style.top = window.pageYOffset + 50 + `px`;
        closeRegPopupBtn.addEventListener(`click`, closeRegPopup);
        escCloseRegpopup();
        linkRegPopup.addEventListener(`click`, closeRegPopup);
      });
    })
  }
};

const closePopup = (evt) => {
  evt.preventDefault();
  popupEnter.classList.remove(`main-modal--opened`)
};

const escClosePopup = () => {
  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      popupEnter.classList.remove(`main-modal--opened`);
    }
  })
};

const closeRegPopup = (evt) => {
  evt.preventDefault();
  regPopup.classList.remove(`main-modal--opened`);
};

const escCloseRegpopup = () => {
  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      regPopup.classList.remove(`main-modal--opened`);
    }
  })
};

export {openEnterPopup};
