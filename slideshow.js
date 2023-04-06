const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slider-images');
const slide = slides.querySelectorAll('.slider-image');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  clearInterval(slideInterval);
  slide[currentSlide].classList.remove('active');
  currentSlide = (n + slide.length) % slide.length;
  slide[currentSlide].classList.add('active');
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  slideInterval = setInterval(nextSlide, 3000);
}

const prev = slider.querySelector('.slider-prev');
const next = slider.querySelector('.slider-next');

prev.addEventListener('click', () => {
  prevSlide();
});

next.addEventListener('click', () => {
  nextSlide();
});

slideInterval = setInterval(nextSlide, 3000);
