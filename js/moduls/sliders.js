import {debounce} from './debounce.js';

export const seeNextSlide =(offsetSlide, slide, wrapper, arraySlides, slider ) => {
  if (window.matchMedia("(min-width: 768px)").matches){
    offsetSlide = (offsetSlide - slide.offsetWidth)%((slide.offsetWidth * arraySlides.length) + slide.offsetWidth - wrapper.offsetWidth);
  } else {
    offsetSlide = (offsetSlide - slide.offsetWidth)%(slide.offsetWidth * arraySlides.length);
  }
  slider.style.marginLeft = offsetSlide + 'px';

  return offsetSlide;
};

export const seePrewSlide =(offsetSlide, slide, arraySlides, slider) => {
  if (offsetSlide === 0) {
    if (window.matchMedia("(min-width: 768px)").matches) {
      offsetSlide = -((slide.offsetWidth * arraySlides.length))
    } else {
      offsetSlide = -(arraySlides.length * slide.offsetWidth);
    }
  }

  offsetSlide = offsetSlide + slide.offsetWidth;
  slider.style.marginLeft = offsetSlide + 'px';

  return offsetSlide;
};

export const seeNextSlideGallery =(offsetSlide, slide, wrapper, arraySlides, slider ) => {
  if (window.matchMedia("(min-width: 768px)").matches){
    offsetSlide = (offsetSlide - slide.offsetWidth)%((slide.offsetWidth * arraySlides.length) - slide.offsetWidth);
  } else {
    offsetSlide = (offsetSlide - slide.offsetWidth)%(slide.offsetWidth * arraySlides.length);
  }
  slider.style.marginLeft = offsetSlide + 'px';

  return offsetSlide;
};

export const seePrewSlideGallery =(offsetSlide, slide, arraySlides, slider) => {
  if (offsetSlide === 0) {
    if (window.matchMedia("(min-width: 768px)").matches) {
      offsetSlide = -((slide.offsetWidth * arraySlides.length) - slide.offsetWidth)
    } else {
      offsetSlide = -(arraySlides.length * slide.offsetWidth);
    }
  }

  offsetSlide = offsetSlide + slide.offsetWidth;
  slider.style.marginLeft = offsetSlide + 'px';

  return offsetSlide;
};

export const touchSlider = (offsetSlide, slide, wrapper, arraySlides, slider) => {
  for (let j = 0; j < arraySlides.length; j++) {
    arraySlides[j].addEventListener('touchstart', function (evt) {


      let startX = evt.changedTouches[0].clientX;

      function touchMove(e) {

        let newX = e.changedTouches[0].clientX;

        debounce(function () {
          if (startX - newX > 0) {
            offsetSlide = seeNextSlide(offsetSlide, slide, wrapper, arraySlides, slider);
          } else {
            offsetSlide = seePrewSlide(offsetSlide, slide, arraySlides, slider)
          }

        }, 100);
      }

      function touchEnd() {

        slider.removeEventListener('touchmove', touchMove);

        slider.removeEventListener('touchend', touchEnd);
      }

      slider.addEventListener('touchmove', touchMove);

      slider.addEventListener('touchend', touchEnd);

    });
  }
};
