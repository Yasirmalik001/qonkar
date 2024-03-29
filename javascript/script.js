var loader = document.getElementById("loading__animation");
setTimeout(function () {
  loader.style.top = "-100%";
}, 2500);


var btn = document.querySelector(".circle__up");
const checkScroll = () => {
  switch (true) {
    case window.scrollY < 100:
      btn.classList.remove("button-show");
      break;
    case window.scrollY >= 200:
      btn.classList.add("button-show");
      break;
  }
};

checkScroll();
window.addEventListener("scroll", checkScroll);

var btn = document.querySelector(".circle__up");
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const button = document.querySelector(".button");
const menu = document.querySelector(".menu");
button.addEventListener("click", () => {
  button.classList.toggle("-menu-open");
  menu.classList.toggle("-open");
});




var typed2 = new Typed(".typed", {
  strings: ["digital IDEAS", "digital SUCCESS", "UI/UX DESIGN"],
  typeSpeed: 50,
  backSpeed: 20,
  cursorChar: "_",
  shuffle: true,
  fadeOut: true,
  loop: true,
});

const bankAccounts = document.getElementById("bank-accounts");

let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

bankAccounts.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - bankAccounts.offsetLeft;
  startY = e.pageY - bankAccounts.offsetTop;
  scrollLeft = bankAccounts.scrollLeft;
  scrollTop = bankAccounts.scrollTop;
  bankAccounts.style.cursor = "grabbing";
});

bankAccounts.addEventListener("mouseleave", () => {
  isDown = false;
  bankAccounts.style.cursor = "grab";
});

bankAccounts.addEventListener("mouseup", () => {
  isDown = false;
  bankAccounts.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - bankAccounts.offsetLeft;
  const y = e.pageY - bankAccounts.offsetTop;
  const walkX = (x - startX) * 1;
  const walkY = (y - startY) * 1;
  bankAccounts.scrollLeft = scrollLeft - walkX;
  bankAccounts.scrollTop = scrollTop - walkY;
});

const scrollLeftButton = document.getElementById("action-button--previous");
const scrollRightButton = document.getElementById("action-button--next");

scrollLeftButton.addEventListener("click", () => {
  bankAccounts.scrollBy({
    top: 0,
    left: -200,
    behavior: "smooth",
  });
});

scrollRightButton.addEventListener("click", () => {
  bankAccounts.scrollBy({
    top: 0,
    left: 200,
    behavior: "smooth",
  });
});

bankAccounts.addEventListener("scroll", (e) => {
  const position = bankAccounts.scrollLeft;
  if (position === 0) {
    scrollLeftButton.disabled = true;
  } else {
    scrollLeftButton.disabled = false;
  }

  if (Math.round(position) === bankAccounts.scrollWidth - bankAccounts.clientWidth) {
    scrollRightButton.disabled = true;
  } else {
    scrollRightButton.disabled = false;
  }
});

// ----------//

let portfolioSwiper = new Swiper(".portfolio-container", {
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  speed: 7000,
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
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    840: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// ----------//
// let circle = document.getElementById("menu_item");
// let frames = document.querySelectorAll("#frame");
// const lerp = (x, y, a) => x * (1 - a) + y * a;

// frames.forEach((frame) => {
//   frame.addEventListener("mousemove", function (dets) {
//     var dims = frame.getBoundingClientRect();
//     var xstart = dims.x;
//     var xend = dims.x + dims.width;

//     var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

//     gsap.to(circle, {
//       scale: 8,
//     });
//     gsap.to(frame.children, {
//       color: "#fc6736",
//       duration: 0.4,
//       y: "-5vw",
//     });
//     gsap.to(frame.children, {
//       x: lerp(-50, 50, zeroone),
//       duration: 0.3,
//     });
//   });
//   frame.addEventListener("mouseleave", function (dets) {
//     gsap.to(circle, {
//       scale: 0,
//     });
//     gsap.to(frame.children, {
//       color: "#000",
//       duration: 0.4,
//       y: 0,
//     });
//     gsap.to(frame.children, {
//       x: 0,
//       duration: 0.3,
//     });
//   });
// });
// window.addEventListener("mousemove", function (dets) {
//   circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
//   gsap.to(circle, {
//     x: dets.clientX,
//     y: dets.clientY,
//     duration: 0.2,
//     ease: Expo,
//   });
// });