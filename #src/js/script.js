"use strict";
const menuBtn = document.querySelector(".header__button"),
  menu = document.querySelector(".nav");
  menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("header__button--active");
  menu.classList.toggle("header__nav--active");
});
