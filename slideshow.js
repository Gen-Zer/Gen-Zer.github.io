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

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function nextSlide() {
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

function prevSlide() {
  // hide the currently displayed image
  images[index].style.display = 'none';

  // decrement the index
  index--;

  // if the index is less than 0, set it to the last image index
  if (index < 0) {
    index = images.length - 1;
  }

  // show the previous image
  images[index].style.display = 'block';
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);
