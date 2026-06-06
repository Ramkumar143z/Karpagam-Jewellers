document.addEventListener("DOMContentLoaded", () => {
  const topNav = document.querySelector(".luxury-top-nav");
  const hamburger = document.querySelector(".hamburger-menu");
  const closeBtn = document.querySelector(".close-menu");
  const overlay = document.querySelector(".fullscreen-menu-overlay");
  const menuItems = document.querySelectorAll(".menu-item");

  // Scroll effect for top nav
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      topNav.classList.add("scrolled");
    } else {
      topNav.classList.remove("scrolled");
    }
  });

  // Open Menu
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      overlay.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    });
  }

  // Close Menu
  const closeMenu = () => {
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  // Close menu when a link is clicked
  menuItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
});
