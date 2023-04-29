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
