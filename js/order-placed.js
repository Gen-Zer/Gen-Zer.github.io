function buyNow(shoesId) {
  // code to place the order
  // ...

  // show the popup
  var popup = document.createElement("div");
  popup.classList.add("popup");

  var closeButton = document.createElement("button");
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", function() {
    popup.classList.remove("show");
  });
  popup.appendChild(closeButton);

  var message = document.createElement("p");
  message.innerHTML = "<h3>Order placed! &check;</h3>";
  message.style.margin = "0";
  message.style.textAlign = "center";

  popup.appendChild(message);
  document.body.appendChild(popup);
  popup.classList.add("show");
}
