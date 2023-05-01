// Define the URL of the Acme Products API endpoint
const apiUrl = "https://api.acmeproducts.com/products/123";

// Use the fetch() function to retrieve the product information from the API
fetch(apiUrl)
  .then(response => response.json()) // Parse the JSON response
  .then(product => {
    // Extract the relevant information from the product object
    const name = product.product_name;
    const price = product.price;
    const imageUrl = product.image_url;
    const description = product.description;

    // Find the container element on the webpage where the product information will be displayed
    const productContainer = document.querySelector("#product-info");

    // Create the HTML code to display the product information
    const productHtml = `
      <img src="${imageUrl}" alt="${name}">
      <h2>${name}</h2>
      <p>Price: ${price}</p>
      <p>Description: ${description}</p>
    `;

    // Add the product HTML code to the container element
    productContainer.innerHTML = productHtml;
  })
  .catch(error => {
    console.error("Error retrieving product information:", error);
  });

// Define the form submission event handler
const handleSubmit = event => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Extract the user's information from the form
  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const email = document.querySelector("#email").value;
  const address = document.querySelector("#address").value;

  // Create the order object
  const order = {
    product: {
      name: document.querySelector("#product-name").textContent,
      price: document.querySelector("#product-price").textContent,
    },
    customer: {
      firstName,
      lastName,
      email,
      address,
    },
  };

  // Submit the order to the API
  fetch("https://api.acmeproducts.com/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then(response => {
      if (response.ok) {
        alert("Your order has been submitted successfully.");
        document.querySelector("form").reset(); // Reset the form
      } else {
        throw new Error("Error submitting order.");
      }
    })
    .catch(error => {
      console.error("Error submitting order:", error);
      alert("There was an error submitting your order. Please try again.");
    });
};

// Attach the form submission event handler to the form element
document.querySelector("form").addEventListener("submit", handleSubmit);
