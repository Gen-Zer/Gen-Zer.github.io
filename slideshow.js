// Your JavaScript code goes here

// set the slideshow interval to change every 3 seconds
const interval = 3000;

// get all images in the slideshow
const images = document.querySelectorAll('.slideshow img');

// set the index of the currently displayed image
let index = 0;

// show the first image
images[index].style.display = 'block';

// function to change the displayed image
function changeImage() {
  // hide the currently displayed image
  images[index].style.display = 'none';

  // increment the index
  index++;

  // if the index is greater than the number of images, reset it to 0
  if (index >= images.length) {
    index = 0;
  }

  // show the next image
  images[index].style.display = 'block';
}

// set the slideshow interval to change images every 3 seconds
setInterval(changeImage, interval);

const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".slide");
  for (var i = 1; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
});

function showSlide() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[index].style.display = 'block';
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  showSlide();
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide();
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

showSlide();
