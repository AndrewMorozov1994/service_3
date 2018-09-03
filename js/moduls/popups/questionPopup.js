const ESC_KEYCODE = 27;

const questionLinks = document.querySelectorAll(`.question-btn`);
const questionModal = document.querySelector(`.main-modal--question`);
const sendLink = questionModal.querySelector(`.main-modal-form__btn`);
const closeQuestPopupBtn = questionModal.querySelector(`.main-modal__btn`);
const modalWr = questionModal.querySelector(`.main-modal__wrapper`);

const openQuestPopup = () => {
  for (let i = 0; i < questionLinks.length; i++) {
    questionLinks[i].addEventListener(`click`, (evt) => {
      evt.preventDefault();
      questionModal.classList.add(`main-modal--opened`);
      modalWr.style.top = window.pageYOffset + 50 + `px`;

      sendLink.addEventListener(`click`, closePopup);
      closeQuestPopupBtn.addEventListener(`click`, closePopup);
      escClosePopup();
    })
  }
};

const closePopup = (evt) => {
  evt.preventDefault();
  questionModal.classList.remove(`main-modal--opened`)
};

const escClosePopup = () => {
  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      questionModal.classList.remove(`main-modal--opened`);
    }
  })
};

export {openQuestPopup};
