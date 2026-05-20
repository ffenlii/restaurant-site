const swiper = new Swiper('.swiper', {
  // Використовуємо ваш клас .swiper
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true, // Курсор-рука для зручності
  simulateTouch: true,
  touchStartPreventDefault: false,

  // Налаштування адаптиву
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  // Налаштування крапок під слайдером
  pagination: {
    el: '.pagination',
    clickable: true,
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
});
