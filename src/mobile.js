
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Only execute logic if mobile view is present
  const mobileView = document.querySelector('.mobile-view');
  if (!mobileView) return;

  /* =========================================
     1. DATA POPULATION
     ========================================= */

  // Products
  const productsData = [
    {
      img: './public/assets/signatures/image.png',
      title: 'ETERNAL JHUMKAS',
      col: 'Heritage Collection',
      desc: 'Inspired by the rich traditions of temple craftsmanship, celebrating divinity and eternal beauty.'
    },
    {
      img: './public/assets/signatures/image copy 2.png',
      title: 'ROYAL TEMPLE HARAM',
      col: 'Timeless Heritage',
      desc: 'A masterpiece created over 120 hours of intricate craftsmanship using 22K Gold.'
    },
    {
      img: './public/assets/signatures/image copy 4.png',
      title: 'CELESTIAL NECKLACE',
      col: 'Diamond Collection',
      desc: 'The brilliance of perfection, featuring uncut diamonds set flawlessly in pure gold.'
    }
  ];

  const productsContainer = document.querySelector('.m-products-scroll-container');
  if (productsContainer) {
    productsData.forEach(p => {
      const card = document.createElement('div');
      card.className = 'm-product-card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.title}" class="m-product-card-img">
        <h3 class="m-product-card-title">${p.title}</h3>
        <p class="m-product-card-col">${p.col}</p>
        <p class="m-product-card-desc">${p.desc}</p>
        <button class="m-product-btn" onclick="window.location.href='masterpieces.html'">EXPLORE DETAILS</button>
      `;
      productsContainer.appendChild(card);
    });
  }

  // Collections
  const collData = [
    { title: 'GOLD', sub: 'THE RADIANCE OF TRADITION', img: './public/assets/collections/gold.png', link: 'gold.html' },
    { title: 'SILVER', sub: 'THE PURITY OF ELEGANCE', img: './public/assets/collections/silver.png', link: 'silver.html' },
    { title: 'DIAMOND', sub: 'THE BRILLIANCE OF PERFECTION', img: './public/assets/collections/diamond.png', link: 'diamond.html' },
    { title: 'PLATINUM', sub: 'THE RARITY OF ETERNITY', img: './public/assets/collections/platinum.png', link: 'platinum.html' }
  ];

  const collContainer = document.querySelector('.m-coll-items');
  if (collContainer) {
    collData.forEach(c => {
      const card = document.createElement('div');
      card.className = 'm-coll-card';
      card.onclick = () => window.location.href = c.link;
      card.innerHTML = `
        <img src="${c.img}" alt="${c.title}">
        <div class="m-coll-overlay">
          <h3 class="m-coll-title">${c.title}</h3>
          <p class="m-coll-sub">${c.sub}</p>
        </div>
      `;
      collContainer.appendChild(card);
    });
  }

  // Heritage Timeline
  const heritageData = [
    { year: '1898', title: 'THE BEGINNING', desc: 'A small atelier with a big dream of preserving temple artistry.' },
    { year: '1940s', title: 'ROOTS STRONGER', desc: 'Passed down knowledge, preserving age-old techniques.' },
    { year: '1970s', title: 'CRAFT EVOLVES', desc: 'Blending tradition with innovation. Expanding our creations.' },
    { year: '2000s', title: 'BEYOND BORDERS', desc: 'Our masterpieces find a place in the hearts around the world.' },
    { year: 'TODAY', title: 'ETERNAL LEGACY', desc: 'Continuing the legacy with the same passion, for generations to come.' }
  ];

  const timelineContainer = document.querySelector('.m-timeline');
  if (timelineContainer) {
    heritageData.forEach(h => {
      const item = document.createElement('div');
      item.className = 'm-timeline-item';
      item.innerHTML = `
        <div class="m-timeline-dot"></div>
        <h4 class="m-timeline-year">${h.year}</h4>
        <p class="m-timeline-title">${h.title}</p>
        <p class="m-timeline-desc">${h.desc}</p>
      `;
      timelineContainer.appendChild(item);
    });
  }

  /* =========================================
     2. GSAP ANIMATIONS
     ========================================= */

  // Hero Product Floating
  const mProduct = document.getElementById('m-product');
  if (mProduct) {
    gsap.to(mProduct, {
      y: "-=20",
      rotationZ: "random(-2, 2)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  // Hero Entrance
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl.from('.m-hero-product', { y: 30, opacity: 0, scale: 0.95, duration: 0.6 })
        .from('.m-hero-title', { y: 15, opacity: 0, duration: 0.4 }, "-=0.4")
        .from('.m-hero-sub', { y: 15, opacity: 0, duration: 0.4 }, "-=0.3")
        .from('.m-hero-cta', { y: 15, opacity: 0, duration: 0.4 }, "-=0.3");

  // Scroll Animations for Collections
  const collCards = document.querySelectorAll('.m-coll-card');
  collCards.forEach(card => {
    gsap.fromTo(card, 
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        }
      }
    );
  });

  // Scroll Animations for Heritage
  const timelineItems = document.querySelectorAll('.m-timeline-item');
  timelineItems.forEach((item, index) => {
    gsap.fromTo(item, 
      { x: -30, opacity: 0 },
      {
        x: 0, 
        opacity: 1, 
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.m-timeline',
          start: 'top 80%'
        }
      }
    );
  });

  /* =========================================
     3. TAB BAR NAVIGATION
     ========================================= */
  const tabs = document.querySelectorAll('.m-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Scroll to section
      const targetSel = tab.getAttribute('data-target');
      if (targetSel) {
        const targetEl = document.querySelector(targetSel);
        if (targetEl) {
          window.scrollTo({
            top: targetEl.offsetTop - 60, // offset for nav
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
