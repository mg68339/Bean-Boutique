function addToCart(productName, price) {
    // Retrieve the existing cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Find if the product already exists in the cart
    const existingProduct = cart.find(item => item.name === productName);
  
    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity if it exists
    } else {
      // Add new product to the cart with initial quantity 1
      cart.push({ name: productName, price: price, quantity: 1 });
    }
  
    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    alert(`${productName} has been added to your cart!`);
  }

  

  const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const container = document.getElementById('content-box')

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        container.classList.add('z-index');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        container.classList.remove('z-index');
    })
}

