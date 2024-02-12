var loader = document.getElementById("loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 2000);

gsap.from(".section-left h1", {
  y: 100,
  opacity: 0,
  delay: 0.5,
  duration: 1.9,
  stagger: 0.3,
});
gsap.from(".section-left h2", {
  y: 100,
  opacity: 0,
  delay: 0.5,
  duration: 0.9,
  stagger: 0.5,
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
