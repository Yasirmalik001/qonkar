var loader = document.getElementById("loading__animation");
setTimeout(function () {
  loader.style.top = "-100%";
}, 2500);

let portfolioSwiper = new Swiper(".portfolio-container", {
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  speed: 3000,
  parallax: true,
  autoplayDisableOnInteraction: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

// ----------//
