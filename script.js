let intro = document.querySelector(".intro");
let logo = document.querySelector(".logoHeader");
let logoSpan = document.querySelectorAll(".logo");
let flash = document.querySelector(".flash");
let audioFlash = document.querySelector(".audioFlash");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 900);
    });

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 4500);
    

    setTimeout(()=>{
      audioFlash.play()
    },1900)

    setTimeout(() => {
      
      flash.classList.add("opacity");
      setTimeout(() => {
        flash.classList.remove("opacity");
      }, 300);
    }, 2500);
  });
});

const navWrapper = document.querySelector(".navWrapper");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  navWrapper.classList.add("visible");
});

close.addEventListener("click", () => {
  navWrapper.classList.remove("visible");
});

document.addEventListener("click", (event) => {
  const isNavWrapperClicked = navWrapper.contains(event.target);
  const isOpenButtonClicked = open.contains(event.target);

  // Verificar si se hizo clic fuera del navWrapper y no en el botón "open"
  if (!isNavWrapperClicked && !isOpenButtonClicked) {
    navWrapper.classList.remove("visible");
  }
});

document.addEventListener("scroll", () => {
  navWrapper.classList.remove("visible");
});

const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const slider = document.getElementById("slider");
const sliderSection = document.querySelectorAll(".sliderSection");

btnLeft.addEventListener("click", (e) => moveToLeft());
btnRight.addEventListener("click", (e) => moveToRight());

// setInterval(() => {
//   moveToRight();
// }, 5000);

let operacion = 0;
let counter = 0;
let widthImg = 100 / sliderSection.length;
function moveToRight() {
  if (counter >= sliderSection.length - 1) {
    counter = 0;
    operacion = 0;
    slider.style.transform = `translate(-${operacion}%)`;
    return;
  }
  counter++;
  operacion = operacion + widthImg;
  slider.style.transform = `translate(-${operacion}%)`;
}

function moveToLeft() {
  counter--;
  if (counter < 0) {
    counter = sliderSection.length - 1;
    operacion = widthImg * (sliderSection.length - 1);
    slider.style.transform = `translate(-${operacion}%)`;
    return;
  }
  operacion = operacion - widthImg;
  slider.style.transform = `translate(-${operacion}%)`;
}
