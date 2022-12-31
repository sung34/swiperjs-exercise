const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  slidesPerView: 1.5,
  loop: true,
  autoplay: {
    delay: 5000
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    clickableClass: '.test'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});