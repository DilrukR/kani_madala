// loder
const loder = document.getElementById("loder");

function load() {
  loder.style.animation = "fade";
  loder.style.display = "none";
}

//for smooth scroll

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetposition = target.getBoundingClientRect(0).top;
  var startPosition = window.pageYOffset;

  console.log(startPosition);
}

smoothScroll("header", 1000);

// mobile menu
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
