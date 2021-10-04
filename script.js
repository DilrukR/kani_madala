// loder
const loder = document.getElementById("loder");

function load() {
  loder.style.animation = "fade";
  loder.style.display = "none";
}

// mobile menu
//
const nav = document.getElementById("nav");
const ham = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const ul = document.querySelector("ul");

ham.addEventListener("click", show);
cross.addEventListener("click", hide);

function show() {
  nav.style.transform = "translatex(0%)";
  ham.style.display = "none";
  cross.style.display = "block";
  nav.style.opacity = 1;
}

function hide() {
  nav.style.transform = "translatex(-100%)";
  cross.style.display = "none";
  ham.style.display = "block";
  nav.style.opacity = 0;
}

// register pop up

const btn = document.querySelector(".reg");
const formArea = document.querySelector(".form-area");
const form = document.querySelector(".form-con");

btn.addEventListener("click", regshow);
form.addEventListener("click", hidden);

function regshow() {
  form.style.display = "flex";
}
function hidden() {
  form.style.display = "none";
}
