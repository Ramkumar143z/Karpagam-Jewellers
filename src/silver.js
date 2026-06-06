// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Global speedup for mobile/tablet to ensure 1-second load times
if (window.innerWidth <= 1024) {
  gsap.globalTimeline.timeScale(999);
}


// Hero Mist Animation
const mistContainer = document.getElementById('hero-mist');
if (mistContainer) {
  gsap.to(mistContainer, {
    backgroundPosition: '100% 100%',
    duration: 100,
    ease: 'none',
    repeat: -1
  });
}

// Initial Animations
window.addEventListener('load', () => {

  // Hero Timeline
  const tl = gsap.timeline();

  tl.fromTo('.halo-ring', 
    { scale: 0.5, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 2.5, ease: 'power2.out' }
  )
  .fromTo('.moonlight-rays',
    { opacity: 0 },
    { opacity: 0.8, duration: 2, ease: 'power2.inOut' },
    '-=2'
  )
  .fromTo('.hero-necklace',
    { y: 50, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 2, ease: 'power3.out' },
    '-=1.5'
  )
  .fromTo('.hero-label',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    '-=1.2'
  )
  .fromTo('.hero-title',
    { y: 20, opacity: 0, filter: 'blur(5px)' },
    { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2 },
    '-=1'
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
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    '-=0.6'
  )
  .fromTo('.scroll-indicator',
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    '-=0.5'
  );

  // Floating animation for silver masterpiece
  gsap.to('.hero-necklace', {
    y: '-=15',
    rotationZ: '+=1',
    duration: 4,
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
    { filter: 'grayscale(100%)', opacity: 0 },
    { filter: 'grayscale(0%)', opacity: 1, duration: 2, ease: 'power2.out' }
  )
  .fromTo('.story-label',
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.8 },
    '-=1.2'
  )
  .fromTo('.story-title',
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 },
    '-=1'
  )
  .fromTo('.story-divider',
    { scaleX: 0, transformOrigin: 'left' },
    { scaleX: 1, duration: 0.8 },
    '-=0.8'
  )
  .fromTo('.story-text',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
    '-=0.6'
  )
  .fromTo('.btn-outline',
    { opacity: 0 },
    { opacity: 1, duration: 0.8 },
    '-=0.4'
  );
  // Category Panels Hover (Optional: GSAP enhancements)
  gsap.fromTo('.category-panel',
    { y: 50, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 1, stagger: 0.2,
      scrollTrigger: {
        trigger: '.section-categories',
        start: 'top 60%',
      }
    }
  );

  // Masterpiece ScrollTrigger
  const mpTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-masterpiece',
      start: 'top 60%'
    }
  });

  mpTl.fromTo('.mp-left', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
      .fromTo('.mp-right', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '-=1')
      .fromTo('.mp-img', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: 'back.out(1.2)' }, '-=1');

  // Immersive Gallery & Preview Panel
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
      item.addEventListener('mouseenter', (e) => {
        const imgSrc = item.querySelector('img').src;
        pvImg.src = imgSrc;
        pvName.textContent = item.dataset.name;
        pvStory.textContent = item.dataset.story;
        pvWeight.textContent = item.dataset.weight;
        pvPurity.textContent = item.dataset.purity;
        pvPrice.textContent = item.dataset.price;
        
        previewPanel.classList.add('active');
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
  }

  // Craftsmanship Journey ScrollTrigger
  const craftTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-craft',
      start: 'top 70%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  craftTl.fromTo('.craft-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
    .to('#craft-progress', { width: '100%', duration: 2, ease: 'power1.inOut' }, '-=0.5')
    .fromTo('.craft-stage', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.4 }, '-=1.8');

  // Trust Badges ScrollTrigger
  gsap.fromTo('.trust-badge',
    { opacity: 0, scale: 0 },
    { 
      opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: 'back.out(1.5)',
      scrollTrigger: { trigger: '.section-trust', start: 'top 50%' }
    }
  );

  // Experience Slider
  gsap.fromTo('.testimonial-card',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: '.section-experience', start: 'top 60%' } }
  );

  // Transition Particles (Diamond Sparkles)
  const diamondParticlesContainer = document.getElementById('diamond-particles');
  function createDiamondParticles() {
    if (!diamondParticlesContainer) return;
    for (let i = 0; i < 80; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      const size = Math.random() * 3 + 1;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      // Diamond crystal look
      particle.style.background = 'radial-gradient(circle, #fff 0%, rgba(200,220,255,0.8) 40%, transparent 100%)';
      particle.style.boxShadow = '0 0 10px rgba(255,255,255,0.8)';
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      particle.style.opacity = Math.random();
      diamondParticlesContainer.appendChild(particle);

      gsap.to(particle, {
        y: `-=${Math.random() * 150 + 50}`,
        x: `+=${Math.random() * 50 - 25}`,
        opacity: 0,
        scale: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 3,
        repeat: -1,
        ease: 'none',
        delay: Math.random() * 5
      });
    }
  }

  createDiamondParticles();

  const transitionTl = gsap.timeline({
    scrollTrigger: { trigger: '.section-transition', start: 'top 60%', toggleActions: 'play none none reverse' }
  });

  transitionTl.fromTo('.transition-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
    .fromTo('.transition-btn', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.5');
});
