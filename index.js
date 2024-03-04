
const carousel = document.querySelector(".carousel");
const slides = document.querySelector(".slides");
const prevButton = document.querySelector(".carousel-button_prev");
const nextButton = document.querySelector(".carousel-button_next");
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;
let slideWidth = carousel.offsetWidth;
// console.log(slideWidth);
prevButton.addEventListener("click", function () {
    console.log('prev');
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.children.length - 1;
  }
  updateSlide();
  updateIndicator();
});

nextButton.addEventListener("click", function () {
    console.log('next');
  currentIndex++;
  if (currentIndex > slides.children.length - 1) {
    currentIndex = 0;
  }
  updateSlide();
  updateIndicator();
});

for (let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener("click", () => {
    currentIndex = i;
    updateSlide();
    updateIndicator();
  });
}

function updateSlide() {
  let translateValue = -currentIndex * slideWidth;
  slides.style.transform = `translateX(${translateValue}px)`;
}

function updateIndicator() {
  for (let indicator of indicators) {
    indicator.classList.remove("active");
  }
  indicators[currentIndex].classList.add("active");
}
