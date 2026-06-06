/* =========================================================================
   HERITAGE & LEGACY SECTIONS - GSAP ANIMATIONS
   ========================================================================= */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const heritageSection = document.getElementById('heritage-section');
  if (!heritageSection) return;

  // 1. Heritage Showcase
  gsap.fromTo('.h-showcase-left', 
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.3, ease: 'power3.out', scrollTrigger: { trigger: '.h-showcase', start: 'top 90%' }}
  );

  gsap.fromTo('.h-showcase-center', 
    { opacity: 0, scale: 0.9, y: 50 },
    { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out', scrollTrigger: { trigger: '.h-showcase', start: 'top 90%' }}
  );

  gsap.fromTo('.h-stat-card', 
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: 'power3.out', scrollTrigger: { trigger: '.h-showcase', start: 'top 90%' }}
  );

  // 2. Journey Timeline
  gsap.fromTo('.h-journey .h-title', 
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out', scrollTrigger: { trigger: '.h-journey', start: 'top 90%' }}
  );

  gsap.fromTo('.h-timeline-line', 
    { width: '0%' },
    { width: '80%', duration: 0.5, ease: 'power1.inOut', scrollTrigger: { trigger: '.h-timeline-grid', start: 'top 90%' }}
  );

  gsap.fromTo('.h-timeline-stop', 
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, delay: 0.1, ease: 'back.out(1.5)', scrollTrigger: { trigger: '.h-timeline-grid', start: 'top 90%' }}
  );

  // 3. Testimonials
  gsap.fromTo('.h-test-left', 
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.3, ease: 'power3.out', scrollTrigger: { trigger: '.h-testimonials', start: 'top 90%' }}
  );

  gsap.fromTo('.test-card', 
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 0.3, stagger: 0.05, ease: 'power3.out', scrollTrigger: { trigger: '.test-cards-container', start: 'top 90%' }}
  );

  gsap.fromTo('.h-test-right', 
    { opacity: 0, x: 50, rotate: 5 },
    { opacity: 1, x: 0, rotate: 0, duration: 0.4, ease: 'power3.out', scrollTrigger: { trigger: '.h-testimonials', start: 'top 90%' }}
  );

  // 4. Trust Badges
  gsap.fromTo('.trust-badge', 
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: 'power3.out', scrollTrigger: { trigger: '.h-trust-bar', start: 'top 95%' }}
  );
});
