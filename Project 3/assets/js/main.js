let swiper = new Swiper(".cards-wrapper .mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: {
        enabled: true,
    },
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

  swiper.addEventListener("keydown", function(e) {
    if (e.key == 38) {
      swiper.slidePrev();
    }
    if (e.key == 40) {
      swiper.slideNext();
    }
  });