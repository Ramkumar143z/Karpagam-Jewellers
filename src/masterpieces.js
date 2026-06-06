import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Initial Animations
window.addEventListener('load', () => {

  // Particles and Floating (Continuous)
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 50; i++) {
      const p = document.createElement('div');
      p.style.position = 'absolute';
      const size = Math.random() * 3 + 1;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.background = '#d4af37';
      p.style.borderRadius = '50%';
      p.style.boxShadow = `0 0 8px rgba(212,175,55,0.8)`;
      p.style.left = Math.random() * 100 + 'vw';
      p.style.top = Math.random() * 100 + 'vh';
      p.style.opacity = Math.random() * 0.5 + 0.1;
      particlesContainer.appendChild(p);

      gsap.to(p, {
        y: `-=${Math.random() * 100 + 50}`,
        x: `+=${Math.random() * 50 - 25}`,
        opacity: [0, Math.random()*0.8, 0],
        duration: Math.random() * 10 + 10,
        repeat: -1,
        ease: 'none',
        delay: Math.random() * 5
      });
    }
  }

  document.querySelectorAll('.item-img').forEach((img, index) => {
    gsap.to(img, {
      y: '-=10',
      duration: 3 + Math.random() * 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: Math.random() * 2
    });
  });

  // Entry Reveals triggered by Scroll
  const mpTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#masterpieces-app',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });

  mpTimeline.fromTo('.mp-overline', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' })
    .fromTo('.mp-title', { y: 30, opacity: 0, filter: 'blur(10px)' }, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.4, ease: 'power3.out' }, '-=0.1')
    .fromTo('.mp-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }, '-=0.2')
    .fromTo('.title-ornament', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.5)' }, '-=0.2')
    .fromTo('.pos-center', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }, '-=0.1')
    .fromTo(['.pos-top-left', '.pos-bottom-left', '.pos-top-right', '.pos-bottom-right'], { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' }, '-=0.2')
    .fromTo('.mp-quote', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }, '-=0.1')
    .fromTo('.spotlight-panel', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.2');

});
