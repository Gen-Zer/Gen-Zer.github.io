const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slider-images');
const slide = slides.querySelectorAll('.slider-image');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slide[currentSlide].classList.remove('active');
  currentSlide = (n + slide.length) % slide.length;
  slide[currentSlide].classList.add('active');
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

const prev = slider.querySelector('.slider-prev');
const next = slider.querySelector('.slider-next');

prev.addEventListener('click', () => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
});

next.addEventListener('click', () => {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
});

setInterval(() => {
  nextSlide();
}, 3000);
