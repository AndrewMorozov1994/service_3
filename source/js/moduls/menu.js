const shiftMenu = () => {

  const mainWrapper = document.querySelector(`.main__wrapper`);
  const leftMenu = mainWrapper.querySelector(`.main-menu`);

  const getCoordinate = () => {
    const shiftWrapper = mainWrapper.getBoundingClientRect().left;
    leftMenu.style.left = shiftWrapper - leftMenu.offsetWidth + `px`;
  };

  if (window.matchMedia("(min-width: 1920px)").matches) {
    getCoordinate();

    window.addEventListener(`resize`, () => {
      getCoordinate();
    })
  }
};

export {shiftMenu};
