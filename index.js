// SCRIPT FOR THE TOGGLE Button
let toggleBtn;
let bigWrapper;
let hamburgerMenu;

function declare() {
  toggleBtn = document.querySelector(".toggle-btn");
  bigWrapper = document.querySelector(".big-wrapper");
  hamburgerMenu = document.querySelector(".hamburger-menu");
}

const mainDiv = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  dark = !dark;
  let clone = bigWrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  mainDiv.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    bigWrapper.remove();
    clone.classList.remove("copy");

    declare();
    events();
  });
}

function events() {
  toggleBtn.addEventListener("click", toggleAnimation);
  hamburgerMenu.addEventListener("click", () => {
    bigWrapper.classList.toggle("active");
  });
}

events();

// SCRIPT FOR BACK TO TOP BUTTON
let myButton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
