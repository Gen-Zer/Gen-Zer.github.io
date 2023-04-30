// Get all the buttons with the class "add-to-cart-btn"
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

// Add a click event listener to each button
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productId = event.target.parentNode.id;
    addToCart(productId);
  });
});

// Define the addToCart function
function addToCart(productId) {
  // Replace this alert with your actual add-to-cart logic
  alert(`Added product ${productId} to cart!`);
}
