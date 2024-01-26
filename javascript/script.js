var typed = new Typed("#element", {
  strings: ["software solution", "with Qonkar", "digital ideas"],
  typeSpeed: 60,
  loop: true,
  backDelay: 500,
});

let portfolioSwiper = new Swiper(".portfolio-container", {
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
document.querySelector(".portfolio-container").addEventListener("click", function () {
  portfolioSwiper.stopAutoplay();
  console.log("portfolioSwiper");
});

document.querySelector(".portfolio-container").addEventListener("mouseleave", function () {
  portfolioSwiper.startAutoplay();
});
