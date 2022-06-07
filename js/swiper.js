const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // clickable: true,
    // dynamicBullets: true,
    // renderBullet: function (index, className) {
    //   return `<span class="${className}"><span class="bullet-text">${index + 1}</span></span>`
    // },
    //просто номер N с totalN
    type: 'fraction',
    renderFraction: function (currentSlide, totalSlides) {
      return `Picture <span class="${currentSlide}"></span> from <span class="${totalSlides}"></span>`;
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  touchRation: 2,
  touchAngel: 10,
  slideToClickedSlide: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper-slide',
  },
  slidesPerView: 1,
  //отступы между слайдами
  spaceBetween: 10,
  //активный слайд по центру
  centeredSlides: true,
  speed: 1000,
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
});
