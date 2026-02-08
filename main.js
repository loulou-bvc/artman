document.addEventListener('DOMContentLoaded', () => {

  // --- FOOTER YEAR ---
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- MOBILE MENU ---
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
      const isExpanded = mobileMenu.classList.contains('show');
      menuBtn.setAttribute('aria-expanded', isExpanded);
    });
    // Fermer le menu si un lien est cliqué
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        menuBtn.setAttribute('aria-expanded', false);
      });
    });
  }
  // --- 3. SMART NAVBAR (Hide on Scroll Down / Show on Scroll Up) ---
  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      // Condition 1 : On est tout en haut de la page (moins de 50px)
      // -> On affiche toujours la navbar
      if (currentScrollY < 50) {
          navbar.classList.remove('hidden');
      } 
      // Condition 2 : On scroll vers le BAS
      // -> On cache la navbar
      else if (currentScrollY > lastScrollY) {
          navbar.classList.add('hidden');
      } 
      // Condition 3 : On scroll vers le HAUT
      // -> On affiche la navbar
      else {
          navbar.classList.remove('hidden');
      }

      // On met à jour la position précédente
      lastScrollY = currentScrollY;
  });

  // --- FADE-IN ANIMATION OBSERVER ---
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a delay based on the element's index
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, index * 150); // Stagger the animation
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  // --- APPLY FADE-IN TO SERVICES ---
  const serviceItems = document.querySelectorAll('.service-item');
  serviceItems.forEach(item => {
    fadeInObserver.observe(item);
  });

  // --- APPLY FADE-IN TO TESTIMONIALS ---
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  testimonialCards.forEach(card => {
    fadeInObserver.observe(card);
  });

  // --- CAROUSEL ---
  const track = document.querySelector('.carousel-track');
  if (track) {
    const items = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    let itemWidth = 0; // Will be calculated after image load

    const calculateItemWidth = () => {
      if (items.length > 0) {
        // Use offsetWidth to get the rendered width including padding/border, then add gap
        itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(track).gap);
      }
    };

    const updateButtons = () => {
        if (!track.parentElement || itemWidth === 0) return;
        const currentTransform = new DOMMatrix(getComputedStyle(track).transform).e;
        prevButton.disabled = currentTransform >= -5; // Allow for slight floating point inaccuracies
        const maxScroll = (items.length * itemWidth) - track.parentElement.offsetWidth;
        nextButton.disabled = Math.abs(currentTransform) >= maxScroll - (itemWidth / 2); // Check near end
    };

    const moveCarousel = (direction) => {
        if (!track.parentElement || itemWidth === 0) return;
        const currentTransform = new DOMMatrix(getComputedStyle(track).transform).e;
        const maxScroll = (items.length * itemWidth) - track.parentElement.offsetWidth;
        let newTransform = currentTransform + (direction * itemWidth);

        if (newTransform > 0) newTransform = 0;
        if (Math.abs(newTransform) > maxScroll) newTransform = -maxScroll;

        track.style.transform = `translateX(${newTransform}px)`;
        updateButtons();
    };

    nextButton.addEventListener('click', () => moveCarousel(-1));
    prevButton.addEventListener('click', () => moveCarousel(1));
    
    // Recalculate width on resize and initial load
    window.addEventListener('resize', () => {
        calculateItemWidth();
        track.style.transform = `translateX(0px)`; // Reset position on resize
        updateButtons();
    });

    // Initial calculation and button update after images have loaded to ensure correct itemWidth
    window.addEventListener('load', () => {
      calculateItemWidth();
      updateButtons();
    });
  }
});