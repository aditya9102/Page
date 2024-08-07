const slider = document.querySelector(".slider");
const sliderInner = document.querySelector(".slider-inner");
const slides = document.querySelectorAll(".slider img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideIndex = 0;
const slideWidth = slides[0].clientWidth;

const nextSlide = () => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  sliderInner.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
};

const prevSlide = () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  sliderInner.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
