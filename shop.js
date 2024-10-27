

function register(event) {
  window.alert(
    "Thank you for registering the workshop We'll send you a confirmation email shortly."
  );
}


function redeem(event) {
    window.alert(
        "Awesome! Your offer is redeemed. Get ready to brew some savings!"
      );
    
    
}






document.getElementById("signup-btn").addEventListener("click", function () {
  window.location.href = "signin.html"; // Redirects to the signin.html page
});

function register() {
  document.getElementById("registerFormModal").style.display = "flex"; // Show form
}

function closeForm() {
  document.getElementById("registerFormModal").style.display = "none"; // Hide form
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
