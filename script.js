let offset = 0; // left offset
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
  offset -= 250;
  if (offset < -750) {
    offset = -750;
  }
  sliderLine.style.left = offset + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  offset += 250;
  if (offset > 0) {
    offset = 0;
  }
  sliderLine.style.left = offset + "px";
});
