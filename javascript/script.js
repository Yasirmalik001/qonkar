var loader = document.getElementById("loader");
setTimeout(function () {
  loader.style.top = "-100%";
  console.log("first");
}, 3500);

let typed = new Typed("#aimation-text", {
  strings: ["software solution", "with Qonkar", "digital ideas"],
  typeSpeed: 90,
  loop: true,
  backDelay: 100,
});

let portfolioSwiper = new Swiper(".portfolio-container", {
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  speed: 5000,
  parallax: true,
  autoplayDisableOnInteraction: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
document.querySelector(".portfolio-container").addEventListener("click", function () {
  portfolioSwiper.stopAutoplay();
});

document.querySelector(".portfolio-container").addEventListener("mouseleave", function () {
  portfolioSwiper.startAutoplay();
});

// ----------//
