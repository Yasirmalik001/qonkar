var loader = document.getElementById("loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 2000);

const myText2 = new SplitType(".section-left h2");

var tl = gsap.to(".left-plan > p", {
  backgroundPositionX: "0%",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".left-plan",
    scrub: 1,
    delay: 0.05,
    duration: 0.1,
    start: "top center",
    end: "bottom center",
  },
});
gsap.to(".char", {
  y: 0,
  stagger: 0.1,
  delay: 1.2,
  duration: 0.2,
});

let portfolioSwiper = new Swiper(".portfolio-container", {
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  slidesPerView: 3,
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
