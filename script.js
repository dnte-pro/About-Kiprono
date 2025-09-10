// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Close menu on mobile after clicking a link
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger-btn");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
      hamburger.textContent = "☰";
    }
  });
});

// Toggle mobile menu
const hamburger = document.getElementById("hamburger-btn");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");

  // Change icon
  if (navbar.classList.contains("show")) {
    hamburger.textContent = "✖";
  } else {
    hamburger.textContent = "☰";
  }
});
