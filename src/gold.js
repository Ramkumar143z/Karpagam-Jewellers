// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Global speedup for mobile/tablet to ensure 1-second load times
if (window.innerWidth <= 1024) {
  gsap.globalTimeline.timeScale(999);
}


// Particle Generator for Hero
const particlesContainer = document.getElementById('hero-particles');

function createParticles() {
  if (!particlesContainer) return;
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 4 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = 'radial-gradient(circle, rgba(255,223,115,1) 0%, rgba(212,175,55,0) 70%)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.opacity = Math.random();
    particlesContainer.appendChild(particle);

    gsap.to(particle, {
      y: `-=${Math.random() * 200 + 100}`,
      x: `+=${Math.random() * 100 - 50}`,
      opacity: 0,
      duration: Math.random() * 5 + 5,
      repeat: -1,
      ease: 'none',
      delay: Math.random() * 5
    });
  }
}

// Initial Animations
window.addEventListener('load', () => {
  createParticles();

  // Hero Timeline
  const tl = gsap.timeline();

  tl.fromTo('.halo-ring', 
    { scale: 0, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
  )
  .fromTo('.hero-necklace',
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' },
    '-=1.5'
  )
  .fromTo('.hero-label',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    '-=1'
  )
  .fromTo('.hero-title',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    '-=0.6'
  )
  .fromTo('.hero-subtitle',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    '-=0.8'
  )
  .fromTo('.hero-desc',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    '-=0.6'
  )
  .fromTo('.cta-explore',
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
    '-=0.4'
  )
  .fromTo('.scroll-indicator',
    { opacity: 0 },
    { opacity: 1, duration: 1 }
  );

  // Floating animation for necklace
  gsap.to('.hero-necklace', {
    y: '-=20',
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut'
  });

  // Story Section ScrollTrigger
  const storyTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-story',
      start: 'top 70%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  storyTl.fromTo('.story-img',
    { scale: 1.2, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
  )
  .fromTo('.story-label',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    '-=1'
  )
  .fromTo('.story-title',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    '-=0.8'
  )
  .fromTo('.story-divider',
    { width: 0 },
    { width: 60, duration: 0.8 },
    '-=0.6'
  )
  .fromTo('.story-text',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
    '-=0.4'
  )
  .fromTo('.btn-outline',
    { opacity: 0 },
    { opacity: 1, duration: 0.6 },
    '-=0.2'
  );

  // Categories Section ScrollTrigger
  const catTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-categories',
      start: 'top 75%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  catTl.fromTo('.category-header',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
  )
  .fromTo('.category-panel',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)' },
    '-=0.5'
  );

  // Masterpiece Section ScrollTrigger
  const mpTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-masterpiece',
      start: 'top 60%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  mpTl.fromTo('.mp-spotlight',
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
  )
  .fromTo('.mp-img',
    { scale: 1.1, opacity: 0, filter: 'blur(10px)' },
    { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out' },
    '-=1.5'
  )
  .fromTo('.mp-left > *',
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
    '-=1'
  )
  .fromTo('.mp-right > *',
    { x: 30, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
    '-=1'
  );

  // Gallery Section ScrollTrigger
  const galTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-gallery',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  galTl.fromTo('.gallery-header',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
  )
  .fromTo('.gallery-item',
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' },
    '-=0.5'
  );

  // Micro-parallax for gallery images on mouse move inside them
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    const imgWrapper = item.querySelector('.gallery-img-wrapper');
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      gsap.to(imgWrapper, {
        x: x * -20,
        y: y * -20,
        duration: 0.5,
        ease: 'power1.out'
      });
    });
    item.addEventListener('mouseleave', () => {
      gsap.to(imgWrapper, { x: 0, y: 0, duration: 0.5, ease: 'power1.out' });
    });
  });

  // Floating Preview Panel Logic
  const previewPanel = document.getElementById('preview-panel');
  const pvImg = document.getElementById('pv-img');
  const pvName = document.getElementById('pv-name');
  const pvWeight = document.getElementById('pv-weight');
  const pvPurity = document.getElementById('pv-purity');
  const pvPrice = document.getElementById('pv-price');
  const pvStory = document.getElementById('pv-story');

  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      previewPanel.classList.add('active');
      const img = item.querySelector('img').src;
      pvImg.src = img;
      pvName.textContent = item.dataset.name;
      pvWeight.textContent = item.dataset.weight;
      pvPurity.textContent = item.dataset.purity;
      pvPrice.textContent = item.dataset.price;
      pvStory.textContent = item.dataset.story;
    });

    item.addEventListener('mousemove', (e) => {
      gsap.to(previewPanel, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    item.addEventListener('mouseleave', () => {
      previewPanel.classList.remove('active');
    });
  });

  // Craftsmanship Journey ScrollTrigger
  const craftTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-craft',
      start: 'top 70%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  craftTl.fromTo('.craft-header',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
  )
  .to('#craft-progress', {
    width: '100%',
    duration: 2,
    ease: 'power1.inOut'
  }, '-=0.5')
  .fromTo('.craft-stage',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.4 },
    '-=1.8'
  );

  // Trust Badges ScrollTrigger
  gsap.fromTo('.trust-badge',
    { opacity: 0, scale: 0 },
    { 
      opacity: 1, 
      scale: 1, 
      duration: 1, 
      stagger: 0.1, 
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: '.section-trust',
        start: 'top 50%',
      }
    }
  );

  // Experience Slider
  gsap.fromTo('.testimonial-card',
    { y: 30, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 1,
      scrollTrigger: {
        trigger: '.section-experience',
        start: 'top 60%'
      }
    }
  );

  // Transition Particles
  const silverParticlesContainer = document.getElementById('silver-particles');
  function createSilverParticles() {
    if (!silverParticlesContainer) return;
    for (let i = 0; i < 60; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.background = 'radial-gradient(circle, rgba(224,224,224,1) 0%, rgba(192,192,192,0) 70%)';
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      particle.style.opacity = Math.random();
      silverParticlesContainer.appendChild(particle);

      gsap.to(particle, {
        y: `-=${Math.random() * 200 + 100}`,
        x: `+=${Math.random() * 100 - 50}`,
        opacity: 0,
        duration: Math.random() * 5 + 5,
        repeat: -1,
        ease: 'none',
        delay: Math.random() * 5
      });
    }
  }

  createSilverParticles();

  const transitionTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-transition',
      start: 'top 60%',
      toggleActions: 'play none none reverse'
    }
  });

  transitionTl.fromTo('.transition-title',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
  )
  .fromTo('.transition-btn',
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' },
    '-=0.5'
  );
});
