const form = document.querySelector('#place-order-form');
const popup = document.createElement('div');
popup.classList.add('popup');
popup.textContent = 'Order placed.';

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting normally

  // clear form fields
  form.reset();

  // add popup to page
  document.body.appendChild(popup);

  // remove popup after 3 seconds
  setTimeout(() => {
    document.body.removeChild(popup);
  }, 3000);
});
