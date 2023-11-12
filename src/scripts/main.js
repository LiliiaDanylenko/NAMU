'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  document.querySelector('form').reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// eslint-disable-next-line no-new, no-undef
new Swiper('.slider', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});
