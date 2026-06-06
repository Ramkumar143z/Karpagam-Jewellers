// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Global speedup for mobile/tablet to ensure 1-second load times
if (window.innerWidth <= 1024) {
  gsap.globalTimeline.timeScale(999);
}


// Initial Animations
window.addEventListener('load', () => {

  // Hero Timeline
  const tl = gsap.timeline();

  tl.fromTo('.halo-ring', 
    { scale: 0.5, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 2.5, ease: 'power2.out' }
  )
  .fromTo('.prism-rays',
    { opacity: 0, rotation: -20 },
    { opacity: 1, rotation: 0, duration: 3, ease: 'power2.out' },
    '-=2'
  )
  .fromTo('.hero-necklace',
    { y: 50, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 2.5, ease: 'power3.out' },
    '-=2'
  )
  .fromTo('.hero-label',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    '-=1.5'
  )
  .fromTo('.hero-title',
    { y: 20, opacity: 0, filter: 'blur(10px)' },
    { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5 },
    '-=1.2'
  )
  .fromTo('.hero-subtitle',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    '-=1'
  )
  .fromTo('.hero-desc',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    '-=0.8'
  )
  .fromTo('.cta-explore',
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.5)' },
    '-=0.6'
  )
  .fromTo('.scroll-indicator',
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    '-=0.5'
  );

  // Floating & Rotating animation for diamond masterpiece
  gsap.to('.hero-necklace', {
    y: '-=20',
    rotationY: '+=5',
    rotationX: '+=2',
    duration: 5,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut'
  });

  // Story Section
  const storyTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-story',
      start: 'top 70%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  storyTl.fromTo('.story-img',
    { filter: 'grayscale(100%) brightness(0.5)', opacity: 0 },
    { filter: 'grayscale(100%) brightness(1.4)', opacity: 1, duration: 2, ease: 'power2.out' }
  )
  .fromTo('.story-label', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, '-=1.2')
  .fromTo('.story-title', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '-=1')
  .fromTo('.story-divider', { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, duration: 0.8 }, '-=0.8')
  .fromTo('.story-text', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, '-=0.6')
  .fromTo('.btn-outline', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.4');

  // Categories
  gsap.fromTo('.category-panel',
    { y: 50, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out',
      scrollTrigger: { trigger: '.section-categories', start: 'top 60%' }
    }
  );

  // Masterpiece
  const mpTl = gsap.timeline({ scrollTrigger: { trigger: '.section-masterpiece', start: 'top 60%' } });
  mpTl.fromTo('.mp-left', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
      .fromTo('.mp-right', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '-=1')
      .fromTo('.mp-spotlight', { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 1.5, ease: 'power2.out' }, '-=1')
      .fromTo('.mp-img', { scale: 0.8, opacity: 0, filter: 'brightness(0)' }, { scale: 1, opacity: 1, filter: 'brightness(1)', duration: 2, ease: 'back.out(1.2)' }, '-=1.5');

  // Gallery & Preview
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
  const craftTl = gsap.timeline({ scrollTrigger: { trigger: '.section-craft', start: 'top 70%', end: 'bottom 20%', toggleActions: 'play none none reverse' } });
  craftTl.fromTo('.craft-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
    .to('#craft-progress', { width: '100%', duration: 2, ease: 'power1.inOut' }, '-=0.5')
    .fromTo('.craft-stage', { y: 50, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.4 }, '-=1.8');

  // Trust Badges
  gsap.fromTo('.trust-badge',
    { opacity: 0, scale: 0, rotation: -90 },
    { opacity: 1, scale: 1, rotation: 0, duration: 1.5, stagger: 0.15, ease: 'elastic.out(1, 0.5)',
      scrollTrigger: { trigger: '.section-trust', start: 'top 50%' }
    }
  );

  // Experience
  gsap.fromTo('.testimonial-card',
    { y: 30, opacity: 0, filter: 'blur(5px)' },
    { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, scrollTrigger: { trigger: '.section-experience', start: 'top 60%' } }
  );

  // Grand Finale Particles (Diamond Rain)
  const finaleContainer = document.getElementById('finale-particles');
  function createFinaleParticles() {
    if (!finaleContainer) return;
    for (let i = 0; i < 150; i++) {
      const p = document.createElement('div');
      p.style.position = 'absolute';
      const size = Math.random() * 4 + 1;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.background = '#fff';
      p.style.boxShadow = `0 0 ${Math.random() * 15 + 5}px rgba(255,255,255,0.9)`;
      p.style.borderRadius = '50%';
      // Start randomly at the top or slightly above
      p.style.left = Math.random() * 100 + 'vw';
      p.style.top = (Math.random() * 50 - 50) + 'vh';
      p.style.opacity = Math.random();
      finaleContainer.appendChild(p);

      // Diamond falling animation
      gsap.to(p, {
        y: `+=${Math.random() * 100 + 100}vh`,
        x: `+=${Math.random() * 100 - 50}`,
        rotation: Math.random() * 360,
        opacity: [0, 1, 0],
        duration: Math.random() * 5 + 5,
        repeat: -1,
        ease: 'none',
        delay: Math.random() * 5
      });
    }
  }

  createFinaleParticles();

  const finaleTl = gsap.timeline({ scrollTrigger: { trigger: '.section-finale', start: 'top 50%', toggleActions: 'play none none reverse' } });
  finaleTl.fromTo('.finale-content', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: 'back.out(1.2)' });
});
