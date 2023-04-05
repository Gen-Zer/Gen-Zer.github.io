const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let index = 0;
displaySlides(index);

function displaySlides(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  displaySlides(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  displaySlides(index);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
