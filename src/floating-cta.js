document.addEventListener("DOMContentLoaded", () => {
  const cta = document.getElementById("floating-cta");
  if (!cta) return;

  // Show CTA after scrolling past 50% of the viewport height
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.5) {
      cta.classList.add("visible");
    } else {
      cta.classList.remove("visible");
    }
  });
});
