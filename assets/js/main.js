// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active');
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.main-nav') && !e.target.closest('.menu-toggle')) {
      if (mainNav) mainNav.classList.remove('is-open');
      if (menuToggle) menuToggle.classList.remove('is-active');
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
