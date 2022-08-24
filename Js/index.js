var currentScreenWdth = window.innerWidth;

let navLinks = document.querySelector("#nav-links");
let navHandles = document.querySelector("#nav-handles");
let navToggler = document.querySelector("#nav-toggler");
let scndNavLinks = document.querySelector("#scnd-nav-links");
let togglerIcon = document.querySelector(".fa-bars");

let block = "block";
let none = "none";

var fadeInInterval;
var fadeOutInterval;

scndNavLinks.style.display = none;

function resize() {
  if (currentScreenWdth < 960) {
    navLinks.style.display = none;
    navHandles.style.display = none;
    navToggler.style.display = block;
  } else {
    navLinks.style.display = block;
    navHandles.style.display = block;
    navToggler.style.display = none;
  }
}

//To refresh device width value after device is resized
window.onresize = resize();
window.addEventListener("resize", function () {
  window.location.reload(true);
});

navToggler.addEventListener("click", function () {
  if (scndNavLinks.style.display == none) {
    scndNavLinks.style.display = block;
    clearInterval(fadeInInterval);
    scndNavLinks.fadeIn(10);
    togglerIcon.classList.replace("fa-bars", "fa-times");
  } else {
    scndNavLinks.style.display = none;
    togglerIcon.classList.replace("fa-times", "fa-bars");
    clearInterval(fadeInInterval);
    fadeOut();
  }
});

//To fade in fade in navToggler links
scndNavLinks.fadeIn = function (timing) {
  var newValue = 0;

  scndNavLinks.style.display = block;
  scndNavLinks.style.opacity = 0;

  fadeInInterval = setInterval(function () {
    if (newValue < 1) {
      newValue += 0.01;
    } else if (newValue === 1) {
      clearInterval(fadeInInterval);
    }

    scndNavLinks.style.opacity = newValue;
  }, timing);
};

//To fade out navToggler links
function fadeOut() {
  clearInterval(fadeInInterval);
  clearInterval(fadeOutInterval);

  scndNavLinks.fadeOut = function (timing) {
    var newValue = 1;
    scndNavLinks.style.opacity = 1;

    fadeOutInterval = setInterval(function () {
      if (newValue > 0) {
        newValue -= 0.01;
      } else if (newValue < 0) {
        scndNavLinks.style.opacity = 0;
        scndNavLinks.style.display = "none";
        clearInterval(fadeOutInterval);
      }

      scndNavLinks.style.opacity = newValue;
    }, timing);
  };

  scndNavLinks.fadeOut(10);
}
