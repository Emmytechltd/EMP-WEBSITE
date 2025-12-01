// ============================================
// EMP 2015 ALUMNI WEBSITE - JAVASCRIPT
// ============================================

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// Active navigation link highlighting
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Set active nav on page load
document.addEventListener('DOMContentLoaded', setActiveNav);

// ============================================
// GALLERY FUNCTIONALITY
// ============================================

// Sample gallery data with categories
const galleryData = [
  { id: 1, title: 'Matriculation 1', category: 'matriculation', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%231a3d5c" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="24" text-anchor="middle" fill="white" dy=".3em"%3EMatriculation Day%3C/text%3E%3C/svg%3E' },
  { id: 2, title: 'Matriculation 2', category: 'matriculation', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%232c5aa0" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="24" text-anchor="middle" fill="white" dy=".3em"%3EMatriculation Ceremony%3C/text%3E%3C/svg%3E' },
  { id: 3, title: 'Class Activity 1', category: 'classes', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23d4af37" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="24" text-anchor="middle" fill="%231a3d5c" dy=".3em"%3EClass Lecture%3C/text%3E%3C/svg%3E' },
  { id: 4, title: 'Class Activity 2', category: 'classes', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f4e4c1" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="24" text-anchor="middle" fill="%231a3d5c" dy=".3em"%3EGroupWork Session%3C/text%3E%3C/svg%3E' },
  { id: 5, title: 'Final Year 1', category: 'finalyear', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%232c5aa0" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="24" text-anchor="middle" fill="white" dy=".3em"%3EFinal Year Project%3C/text%3E%3C/svg%3E' },
  { id: 6, title: 'Final Year 2', category: 'finalyear', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%231a3d5c" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="24" text-anchor="middle" fill="white" dy=".3em"%3EFinal Year Seminar%3C/text%3E%3C/svg%3E' },
  { id: 7, title: 'Graduation 1', category: 'graduation', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23d4af37" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="24" text-anchor="middle" fill="%231a3d5c" dy=".3em"%3EGraduation Ceremony%3C/text%3E%3C/svg%3E' },
  { id: 8, title: 'Graduation 2', category: 'graduation', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f4e4c1" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="24" text-anchor="middle" fill="%231a3d5c" dy=".3em"%3ECelebration Day%3C/text%3E%3C/svg%3E' },
];

// Initialize gallery if it exists on the page
function initGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const lightbox = document.getElementById('lightbox');

  if (!galleryGrid) return;

  // Render gallery items
  function renderGallery(filter = 'all') {
    galleryGrid.innerHTML = '';
    const filteredItems = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);

    filteredItems.forEach((item, index) => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="gallery-overlay">
          <div class="gallery-overlay-icon">🔍</div>
        </div>
      `;

      galleryItem.addEventListener('click', () => openLightbox(index, filteredItems));
      galleryGrid.appendChild(galleryItem);
    });
  }

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderGallery(filter);
    });
  });

  // Lightbox functionality
  function openLightbox(index, items) {
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = items[index].image;
    lightbox.classList.add('active');
    lightbox.currentIndex = index;
    lightbox.currentItems = items;
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
  }

  function showPrevImage() {
    let index = lightbox.currentIndex - 1;
    if (index < 0) index = lightbox.currentItems.length - 1;
    openLightbox(index, lightbox.currentItems);
  }

  function showNextImage() {
    let index = lightbox.currentIndex + 1;
    if (index >= lightbox.currentItems.length) index = 0;
    openLightbox(index, lightbox.currentItems);
  }

  // Lightbox event listeners
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', showPrevImage);
  if (nextBtn) nextBtn.addEventListener('click', showNextImage);

  // Close lightbox on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'Escape') closeLightbox();
  });

  // Initial render
  renderGallery('all');
  filterBtns[0].classList.add('active');
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);

// ============================================
// CONTACT FORM VALIDATION
// ============================================

function initContactForm() {
  const contactForm = document.getElementById('contact-form');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
      showAlert('Please fill in all fields', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert('Please enter a valid email address', 'error');
      return;
    }

    // If validation passes
    showAlert('Thank you for your message! We will get back to you soon.', 'success');
    contactForm.reset();
  });
}

// Show alert message
function showAlert(message, type) {
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  alert.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 2rem;
    background-color: ${type === 'success' ? '#4caf50' : '#f44336'};
    color: white;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    animation: slideInRight 0.3s ease-out;
  `;

  document.body.appendChild(alert);

  setTimeout(() => {
    alert.style.animation = 'slideInRight 0.3s ease-in reverse';
    setTimeout(() => alert.remove(), 300);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', initContactForm);

// ============================================
// SMOOTH SCROLL & ANIMATIONS
// ============================================

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.stat-card, .member-card, .gallery-item').forEach(el => {
    observer.observe(el);
  });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function initScrollToTop() {
  const scrollBtn = document.getElementById('scroll-top-btn');

  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = 'flex';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', initScrollToTop);

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================

function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');

  counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    let current = 0;
    const increment = target / 30;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '');
      }
    }, 50);
  });
}

// Trigger counter animation when stats section comes into view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }
});