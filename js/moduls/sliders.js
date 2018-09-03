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
      offsetSlide = -((slide.offsetWidth * arraySlides.length) - slide.offsetWidth)
    } else {
      offsetSlide = -(arraySlides.length * slide.offsetWidth);
    }
  }

  offsetSlide = offsetSlide + slide.offsetWidth;
  slider.style.marginLeft = offsetSlide + 'px';

  return offsetSlide;
};
