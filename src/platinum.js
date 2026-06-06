// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Global speedup for mobile/tablet to ensure 1-second load times
if (window.innerWidth <= 1024) {
  gsap.globalTimeline.timeScale(2.5);
}


// Initial Animations
window.addEventListener('load', () => {

  // Hero Timeline
  const tl = gsap.timeline();

  tl.fromTo('.halo-ring', 
    { scale: 0.5, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 3, ease: 'power2.out' }
  )
  .fromTo('.liquid-bg',
    { opacity: 0 },
    { opacity: 0.4, duration: 2 },
    '-=2'
  )
  .fromTo('.hero-necklace',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 2, ease: 'power2.out' },
    '-=1.5'
  )
  .fromTo('.hero-label',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    '-=1'
  )
  .fromTo('.hero-title',
    { opacity: 0, filter: 'blur(10px)' },
    { opacity: 1, filter: 'blur(0px)', duration: 1.5 },
    '-=0.8'
  )
  .fromTo('.hero-subtitle',
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    '-=0.8'
  )
  .fromTo('.hero-desc',
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    '-=0.6'
  )
  .fromTo('.cta-explore',
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    '-=0.4'
  )
  .fromTo('.scroll-indicator',
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    '-=0.2'
  );

  // Floating animation for platinum masterpiece
  gsap.to('.hero-necklace', {
    y: '-=15',
    duration: 4,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut'
  });

  // Story Section
  const storyTl = gsap.timeline({ scrollTrigger: { trigger: '.section-story', start: 'top 65%', toggleActions: 'play none none reverse' } });
  storyTl.fromTo('.story-img', { filter: 'grayscale(100%) brightness(0)', opacity: 0 }, { filter: 'grayscale(100%) brightness(1.2)', opacity: 1, duration: 2, ease: 'power2.out' })
  .fromTo('.story-label', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1')
  .fromTo('.story-title', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.8')
  .fromTo('.story-divider', { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, duration: 0.8 }, '-=0.8')
  .fromTo('.story-text', { opacity: 0 }, { opacity: 1, duration: 0.8, stagger: 0.2 }, '-=0.6')
  .fromTo('.btn-outline', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.4');

  // Categories
  gsap.fromTo('.category-panel',
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.out', scrollTrigger: { trigger: '.section-categories', start: 'top 60%' } }
  );

  // Masterpiece
  const mpTl = gsap.timeline({ scrollTrigger: { trigger: '.section-masterpiece', start: 'top 60%' } });
  mpTl.fromTo('.mp-left', { opacity: 0 }, { opacity: 1, duration: 1.5 })
      .fromTo('.mp-right', { opacity: 0 }, { opacity: 1, duration: 1.5 }, '-=1')
      .fromTo('.mp-spotlight', { opacity: 0 }, { opacity: 1, duration: 2 }, '-=1.5')
      .fromTo('.mp-img', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 2, ease: 'power2.out' }, '-=1.5');

  // Gallery & Preview Panel
  const galleryItems = document.querySelectorAll('.gallery-item');
  const previewPanel = document.getElementById('preview-panel');
  const pvImg = document.getElementById('pv-img');
  const pvName = document.getElementById('pv-name');
  const pvStory = document.getElementById('pv-story');
  const pvWeight = document.getElementById('pv-weight');
  const pvPurity = document.getElementById('pv-purity');
  const pvPrice = document.getElementById('pv-price');

  if(previewPanel) {
    galleryItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        pvImg.src = item.querySelector('img').src;
        pvName.textContent = item.dataset.name;
        pvStory.textContent = item.dataset.story;
        pvWeight.textContent = item.dataset.weight;
        pvPurity.textContent = item.dataset.purity;
        pvPrice.textContent = item.dataset.price;
        previewPanel.classList.add('active');
      });

      item.addEventListener('mousemove', (e) => {
        gsap.to(previewPanel, { x: e.clientX, y: e.clientY, duration: 0.3, ease: 'power2.out' });
      });

      item.addEventListener('mouseleave', () => {
        previewPanel.classList.remove('active');
      });
    });
  }

  // Craftsmanship Timeline
  const craftTl = gsap.timeline({ scrollTrigger: { trigger: '.section-craft', start: 'top 70%', toggleActions: 'play none none reverse' } });
  craftTl.fromTo('.craft-header', { opacity: 0 }, { opacity: 1, duration: 1 })
    .to('#craft-progress', { width: '100%', duration: 2, ease: 'power1.inOut' }, '-=0.5')
    .fromTo('.craft-stage', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.4 }, '-=1.5');

  // Trust Badges Grid
  gsap.fromTo('.trust-badge-minimal',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out', scrollTrigger: { trigger: '.section-trust', start: 'top 60%' } }
  );

  // Experience
  gsap.fromTo('.testimonial-minimal',
    { opacity: 0 },
    { opacity: 1, duration: 1.5, scrollTrigger: { trigger: '.section-experience', start: 'top 60%' } }
  );

  // Grand Finale Horizon
  const finaleTl = gsap.timeline({ scrollTrigger: { trigger: '.section-finale', start: 'top 50%', toggleActions: 'play none none reverse' } });
  finaleTl.fromTo('.horizon-line', { scaleX: 0 }, { scaleX: 1, duration: 2, ease: 'power2.inOut' })
          .fromTo('.horizon-glow', { opacity: 0 }, { opacity: 1, duration: 2 }, '-=1')
          .fromTo('.finale-content', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.5 }, '-=1');
});
