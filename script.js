document.addEventListener("DOMContentLoaded", function () {
  const toggleCheckbox = document.getElementById("toggleCheckbox");
  const menuContents = document.getElementById("menuContents");

  toggleCheckbox.addEventListener("click", function () {
    console.log("clicked");
    if (this.checked) {
      menuContents.classList.remove("hidden");
    } else {
      menuContents.classList.add("hidden");
    }
  });
});

window.addEventListener("load", function () {
  const carousel = document.getElementById("testimonialCarousel");

  function scrollCarousel() {
    if (window.innerWidth <= 768) {
      carousel.scrollLeft += carousel.scrollWidth / 4;
    }
  }

  setInterval(scrollCarousel, 5000); // Change automatically every 5 seconds
});

function openWhatsapp() {
  var phoneNumber = "+919083831824";
  var message = "Hello, I want to book a stay at your place!";
  var apiLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
  window.open(apiLink, "_blank");
};
