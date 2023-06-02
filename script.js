// Initialize an empty cart
var cartItems = [];

// Function to add items to the cart
function addToCart(item) {
  cartItems.push(item);
  updateCart();
}

// Function to update the cart UI
function updateCart() {
  var cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  
  cartItems.forEach(function(item) {
    var li = document.createElement("li");
    li.innerText = item;
    cartList.appendChild(li);
  });
}

// Function to handle the checkout
function checkout() {
  if (cartItems.length > 0) {
    alert("Thank you for your order!");
    cartItems = [];
    updateCart();
  } else {
    alert("Your cart is empty.");
  }
}
