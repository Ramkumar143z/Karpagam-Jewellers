/* =========================================================================
   THE ART OF CREATION - GSAP ANIMATIONS
   ========================================================================= */

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Ensure GSAP and ScrollTrigger are available
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const creationSection = document.getElementById('creation-section');
  if (!creationSection) return;

  // Header Animation
  gsap.fromTo('.creation-header', 
    { opacity: 0, y: 50 },
    {
      opacity: 1, 
      y: 0, 
      duration: 0.3, 
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.creation-header',
        start: 'top 90%',
      }
    }
  );

  // Process Cards Stagger
  gsap.fromTo('.process-card', 
    { opacity: 0, y: 80 },
    {
      opacity: 1, 
      y: 0, 
      duration: 0.3, 
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.process-grid',
        start: 'top 90%',
      }
    }
  );

  // Arrows Fade In
  gsap.fromTo('.process-arrow', 
    { opacity: 0, scale: 0.5 },
    {
      opacity: 1, 
      scale: 1, 
      duration: 0.3, 
      delay: 0.2,
      stagger: 0.05,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: '.process-grid',
        start: 'top 90%',
      }
    }
  );

});
