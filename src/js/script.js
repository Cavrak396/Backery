"use strict";

const hamburger = document.querySelector(".js-hamburger");
const navList = document.querySelector(".js-navigation-list");
const navLinks = document.querySelectorAll(".js-nav-link");
const closeNav = document.querySelector(".js-nav-btn");
const active = "active";

const closingNav = function () {
  navList.classList.remove(active);
  document.querySelector("body").style.overflow = "scroll";
};

hamburger.addEventListener("click", () => {
  navList.classList.add(active);
  document.querySelector("body").style.overflow = "hidden";
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    closingNav();
  });
});

closeNav.addEventListener("click", function () {
  closingNav();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navList.classList.remove(active);
    document.querySelector("body").style.overflow = "scroll";
  }
});

const slider = document.querySelector(".js-about-slider");
const slides = document.querySelectorAll(".js-slide");
const button_down = document.querySelector(".js-button-down");
const button_up = document.querySelector(".js-btn-up");
let i = 0;
slides[i].style.display = "block";

button_down.addEventListener("click", function () {
  slides[i].style.display = "none";
  i++;
  if (i === slides.length) {
    i = 0;
  }
  slides[i].style.display = "block";
});

button_up.addEventListener("click", function () {
  slides[i].style.display = "none";
  i--;
  if (i < 0) {
    i = slides.length - 1;
  }
  slides[i].style.display = "block";
});

const play = document.querySelector(".js-video-play");
const video = document.querySelector(".js-video");
const closeBtn = document.querySelector(".js-video-close");
const appear = "appear";
const closer = function () {
  video.classList.remove(appear);
  document.querySelector("body").style.overflow = "scroll";
};

play.addEventListener("click", () => {
  video.classList.add(appear);
  document.querySelector("body").style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  closer();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closer();
  }
});

const impressionsSlider = document.querySelector(".impressions__slider");
let pressed = false;
let startX = 0;
let scrollSpeed = 3;

impressionsSlider.addEventListener("mousedown", startSwipe);
impressionsSlider.addEventListener("touchstart", startSwipe);

function startSwipe(event) {
  pressed = true;
  startX = getEventXPosition(event);
  impressionsSlider.style.cursor = "grabbing";
}

impressionsSlider.addEventListener("mouseleave", endSwipe);
impressionsSlider.addEventListener("mouseup", endSwipe);
impressionsSlider.addEventListener("touchend", endSwipe);

function endSwipe() {
  pressed = false;
  impressionsSlider.style.cursor = "grab";
}

impressionsSlider.addEventListener("mousemove", moveSlider);
impressionsSlider.addEventListener("touchmove", moveSlider);

function moveSlider(event) {
  if (!pressed) {
    return;
  }
  const currentPosition = getEventXPosition(event);
  const scrollAmount = (startX - currentPosition) / scrollSpeed;
  impressionsSlider.scrollLeft += scrollAmount;
}

function getEventXPosition(event) {
  if (event.type.startsWith("touch")) {
    return event.touches[0].clientX;
  } else {
    return event.clientX;
  }
}

const feedback_input = document.querySelector(".js-footer-input");
const feedback_button = document.querySelector(".js-footer-button");
const check_false = function () {
  document.querySelector(".js-feedback").textContent =
    "Please write your question!";
  document.querySelector(".js-feedback").style.color = "red";
};
const check_true = function () {
  document.querySelector(".js-feedback").textContent = "Message has been sent!";
  document.querySelector(".js-feedback").style.color = "green";
  feedback_input.value = "";
};

feedback_button.addEventListener("click", function () {
  if (feedback_input.value === "") {
    check_false();
  } else {
    check_true();
  }
});
