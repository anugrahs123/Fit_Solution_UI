document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide scroll to top button
window.addEventListener("scroll", function () {
  const scrollButton = document.querySelector(".scroll-to-top");
  if (window.pageYOffset > 300) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});

// Add hover effects to interactive elements
document
  .querySelectorAll(".cta-button, .hero-cta, .tech-item, .device-card")
  .forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    element.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".feature-item, .service-card, .tech-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

const locations = ["India", "Bahrain"];
const locationText = document.getElementById("location-text");
let index = 0;

setInterval(() => {
  // Fade out
  locationText.classList.add("hidden");

  setTimeout(() => {
    // Change text after fade-out
    index = (index + 1) % locations.length;
    locationText.textContent = locations[index];

    // Fade in
    locationText.classList.remove("hidden");
  }, 600); // Should match CSS transition time
}, 3000); // Total interval for switch
