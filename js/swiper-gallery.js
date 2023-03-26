const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
      // when window width is >= 320px
      360: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 3,
      }
    },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar .hero_swiper-scrollbar',
    raggable: true,
            // Snaps slider position to slides when you release Scrollbar
            snapOnRelease: true,
            // Size (Length) of Scrollbar Draggable Element in px
            dragSize: 'auto',
  },
});