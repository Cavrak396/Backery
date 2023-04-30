"use strict";

const hamburger = document.querySelector(".js-hamburger");
const navList = document.querySelector(".js-navigation-list");
const navLinks = document.querySelectorAll(".js-nav-link");
const active = "active";

hamburger.addEventListener("click", () => {
  navList.classList.add(active);
  document.querySelector("body").style.overflow = "hidden";
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navList.classList.remove(active);
    document.querySelector("body").style.overflow = "scroll";
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navList.classList.remove(active);
    document.querySelector("body").style.overflow = "scroll";
  }
});

const slider = document.querySelector(".js-about-slider");
const slides = document.querySelectorAll(".js-slide");
let slideHeight = 0;
let currentSlideIndex = 0;

function setSlideHeight() {
  slideHeight = parseFloat(
    window.getComputedStyle(slides[0]).getPropertyValue("height")
  );
}

function moveSlide(direction) {
  if (direction === "up") {
    currentSlideIndex =
      currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
  } else if (direction === "down") {
    currentSlideIndex =
      currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1;
  }

  const slidePosition = currentSlideIndex * slideHeight * -1;
  slider.style.transform = `translateY(${slidePosition}px)`;
}

window.addEventListener("resize", setSlideHeight);
setSlideHeight();

document
  .querySelector(".js-btn-up")
  .addEventListener("click", () => moveSlide("up"));
document
  .querySelector(".js-button-down")
  .addEventListener("click", () => moveSlide("down"));
