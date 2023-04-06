const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const slide = slides.querySelectorAll('.slide');

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

const prev = slider.querySelector('.prev');
const next = slider.querySelector('.next');

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
