
gsap.registerPlugin(ScrollTrigger);

// Prevent FOUC by making body visible after GSAP is ready
gsap.set('body', { visibility: 'visible' });

// Inject Particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 40; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  p.style.width = Math.random() * 3 + 1 + 'px';
  p.style.height = p.style.width;
  p.style.left = Math.random() * 100 + 'vw';
  p.style.top = Math.random() * 100 + 'vh';
  p.style.opacity = Math.random() * 0.4 + 0.1;
  particlesContainer.appendChild(p);
}

// Particle floating animation
gsap.to('.particle', {
  y: "-=30",
  x: "random(-10, 10)",
  duration: "random(4, 10)",
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Initial Load Entrance Animation
const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

// Stage and Product
tl.from('.active-product', { y: -30, opacity: 0, scale: 1.1, duration: 1.2 });

// Header
tl.from('.navbar', { y: -20, opacity: 0, duration: 0.8 }, "-=1");

// Left Col (Text & Features)
tl.from('.hero-headline', { x: -30, opacity: 0, duration: 0.8 }, "-=0.8")
  .from('.hero-subheading', { x: -30, opacity: 0, duration: 0.8 }, "-=0.6")
  .from('.feature-item', { x: -30, opacity: 0, stagger: 0.15, duration: 0.6 }, "-=0.6");

// Right Col (Price & CTA)
tl.from('.price-section', { x: 30, opacity: 0, duration: 0.8 }, "-=0.8");

// Bottom Panel
tl.from('.related-panel', { y: 50, opacity: 0, duration: 0.8 }, "-=0.6")
  .from('.related-item', { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.4");

// Parallax effect on mouse move for the floating elements
document.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 50;

  gsap.to('.active-product', {
    x: xAxis * 1.5,
    y: yAxis * 1.5,
    ease: 'power1.out',
    duration: 1
  });
});

// Product Swapping Logic
const relatedItems = document.querySelectorAll('.related-item');
const activeProduct = document.querySelector('.active-product');
const priceValueEl = document.querySelector('.price-value');
const priceLabelEl = document.querySelector('.price-label');

relatedItems.forEach(item => {
  item.style.cursor = 'pointer';

  item.addEventListener('click', () => {
    const newPrice = item.getAttribute('data-price');
    const newSrc = item.querySelector('img').getAttribute('src');

    // Don't swap if clicking the already active one
    if (activeProduct.getAttribute('src') === newSrc) return;


    // Animate active product out
    gsap.to(activeProduct, {
      opacity: 0,
      y: 50,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        // Update image source
        activeProduct.setAttribute('src', newSrc);
        // Animate new product in
        gsap.fromTo(activeProduct,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
        );
      }
    });

    // Animate price change
    gsap.to([priceValueEl, priceLabelEl], {
      opacity: 0,
      y: -10,
      duration: 0.3,
      onComplete: () => {
        priceLabelEl.style.display = 'block';
        priceValueEl.style.display = 'block';
        priceValueEl.innerText = newPrice;
        gsap.to([priceValueEl, priceLabelEl], { opacity: 1, y: 0, duration: 0.3 });
      }
    });
  });
});

// Reset to Home Image
const homeLink = document.querySelector('.nav-links .nav-link');
if (homeLink) {
  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    const defaultSrc = '../public/assets/image.png';
    const defaultPrice = '₹2,49,999';

    if (activeProduct.getAttribute('src') === defaultSrc) return;


    // Animate active product out
    gsap.to(activeProduct, {
      opacity: 0,
      y: 50,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        activeProduct.setAttribute('src', defaultSrc);
        gsap.fromTo(activeProduct,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
        );
      }
    });

    // Animate price change
    gsap.to([priceValueEl, priceLabelEl], {
      opacity: 0,
      y: -10,
      duration: 0.3,
      onComplete: () => {
        priceLabelEl.style.display = 'none';
        priceValueEl.style.display = 'none';
        priceValueEl.innerText = '';
      }
    });
  });
}

// Add continuous subtle hover to the active product
function startSubtleHover() {
  gsap.to(activeProduct, {
    y: "-=10",
    rotationZ: "random(-1, 1)",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    overwrite: "auto"
  });
}

setTimeout(startSubtleHover, 2000);

// Automatic Hero Image Rotation (7 seconds interval)
const heroImages = [
  '../public/assets/signatures/image copy 5.png',
  '../public/assets/signatures/image copy 2.png',
  '../public/assets/signatures/image copy 4.png',
  '../public/assets/signatures/image copy.png',
  '../public/assets/signatures/ancient_hero_necklace.png'
];
let currentHeroIndex = 0;

setInterval(() => {
  if (!activeProduct) return;

  currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
  const newSrc = heroImages[currentHeroIndex];

  // Smooth drop out animation
  gsap.to(activeProduct, {
    y: 100,
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    ease: 'power2.in',
    onComplete: () => {
      activeProduct.setAttribute('src', newSrc);
      // Smooth drop in animation
      gsap.fromTo(activeProduct,
        { y: -100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', onComplete: startSubtleHover }
      );
    }
  });
}, 7000);

// Collections Cards Animation
const collectionCards = document.querySelectorAll('.collection-card');
if (collectionCards.length >= 4) {
  // Cards 1 and 2 (index 0 and 1) come from left
  gsap.fromTo([collectionCards[0], collectionCards[1]], 
    { x: -300, opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration: 0.6, 
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".collections-section",
        start: "top 70%",
      }
    }
  );

  // Cards 3 and 4 (index 2 and 3) come from right
  gsap.fromTo([collectionCards[2], collectionCards[3]], 
    { x: 300, opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration: 0.6, 
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".collections-section",
        start: "top 70%",
      }
    }
  );
}
