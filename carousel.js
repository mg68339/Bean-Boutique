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


























let currentSlideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-image");
  const indicators = document.querySelectorAll(".indicator");

  // Loop through slides and hide them
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
    indicators[i].classList.remove("active");
  });

  // Show the current slide and highlight its indicator
  indicators[index].classList.add("active");
}

function nextSlide() {
  currentSlideIndex =
    (currentSlideIndex + 1) %
    document.querySelectorAll(".carousel-image").length;
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex =
    (currentSlideIndex -
      1 +
      document.querySelectorAll(".carousel-image").length) %
    document.querySelectorAll(".carousel-image").length;
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index;
  showSlide(currentSlideIndex);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Get references to the elements
const offerForm = document.getElementById("offerForm");
const closeFormBtn = document.getElementById("closeFormBtn");
const redeemOfferBtn = document.getElementById("redeemOfferBtn");

// Show the form when the page loads for the first time
window.onload = function () {
  if (!localStorage.getItem("offerRedeemed")) {
    offerForm.style.display = "block";
  }
};

// Close the form when the Close button is clicked
closeFormBtn.addEventListener("click", function () {
  offerForm.style.display = "none";
});

// Redeem the offer and store information in localStorage to prevent it from showing again
redeemOfferBtn.addEventListener("click", function () {
  const email = document.getElementById("email").value;

  if (email) {
    alert("Offer redeemed successfully for " + email + "!");
    localStorage.setItem("offerRedeemed", "true"); // Set flag to prevent showing form again
    offerForm.style.display = "none";
  } else {
    alert("Please enter a valid email address.");
  }
});
