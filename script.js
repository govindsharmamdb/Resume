// Theme toggle with persistence
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

// Mobile nav toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Project filter interactions
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    projectCards.forEach((card) => {
      const categories = card.dataset.category || "";
      const show = filter === "all" || categories.includes(filter);
      card.style.display = show ? "block" : "none";
    });
  });
});

// Reveal on scroll (micro-animation)
const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));

// Contact form validation
const form = document.getElementById("contact-form");
const statusText = document.getElementById("form-status");

if (form && statusText) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
      statusText.textContent = "Please enter a valid name (at least 2 characters).";
      statusText.style.color = "#f97316";
      return;
    }

    if (!emailRegex.test(email)) {
      statusText.textContent = "Please enter a valid email address.";
      statusText.style.color = "#f97316";
      return;
    }

    if (message.length < 20) {
      statusText.textContent = "Message should be at least 20 characters.";
      statusText.style.color = "#f97316";
      return;
    }

    statusText.textContent = "Thanks! Your message has been validated successfully.";
    statusText.style.color = "#22c55e";
    form.reset();
  });
}
