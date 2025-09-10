document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger-btn");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburger || !navLinks) return;

  // Toggle nav when hamburger clicked
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("show");
    hamburger.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
  });

  // Smooth scroll for in-page anchors
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = this.getAttribute("href");
      if (!target || target === "#") return;

      const el = document.querySelector(target);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }

      // close menu on mobile after clicking a link
      if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
        hamburger.textContent = "☰";
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (navLinks.classList.contains("show")) {
      if (!navLinks.contains(e.target) && e.target !== hamburger) {
        navLinks.classList.remove("show");
        hamburger.textContent = "☰";
      }
    }
  });

  // Ensure menu closes when resizing to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
      hamburger.textContent = "☰";
    }
  });
});
