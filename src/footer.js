/* =========================================================================
   FOOTER ANIMATIONS
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.site-footer');
  if (!footer) return;

  // Hide floating socials when footer is visible
  const floatingSocials = document.querySelector('.floating-socials');
  if (floatingSocials) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          floatingSocials.style.opacity = '0';
          floatingSocials.style.visibility = 'hidden';
          floatingSocials.style.pointerEvents = 'none';
        } else {
          floatingSocials.style.opacity = '1';
          floatingSocials.style.visibility = 'visible';
          floatingSocials.style.pointerEvents = 'auto';
        }
      });
    }, { threshold: 0.1 });
    observer.observe(footer);
  }

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.fromTo('.footer-newsletter', 
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.site-footer', start: 'top 90%' }}
  );

  gsap.fromTo('.footer-col', 
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.footer-main', start: 'top 85%' }}
  );

  gsap.fromTo('.footer-bottom', 
    { opacity: 0 },
    { opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out', scrollTrigger: { trigger: '.footer-bottom', start: 'top 95%' }}
  );
});
