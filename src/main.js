import './style.css'

// Initialize Lucide Icons
lucide.createIcons();

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.className = savedTheme;
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light-theme');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark-theme');
    }
  });
}

// Update Copyright Year
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Navigation Active Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('[data-reveal], .card, .roadmap-item, .basics-grid');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  if (!el.classList.contains('revealed')) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    revealObserver.observe(el);
  }
});

// Header Polish on Scroll
const header = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.padding = '8px 0';
    header.style.boxShadow = 'var(--shadow-lg)';
  } else {
    header.style.padding = '16px 0';
    header.style.boxShadow = 'none';
  }
});

// Mobile Dropdown Toggle
const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
dropdownTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      const menu = trigger.nextElementSibling;
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      menu.style.opacity = '1';
      menu.style.visibility = 'visible';
      menu.style.position = 'relative';
      menu.style.transform = 'none';
    }
  });
});

// Pop-up animation on link click
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Optional: Smooth scroll is already handled by CSS, but this ensures highlight timing
        targetElement.classList.remove('highlight-pop');
        void targetElement.offsetWidth;
        targetElement.classList.add('highlight-pop');
        setTimeout(() => {
          targetElement.classList.remove('highlight-pop');
        }, 800);
      }
    }
  });
});

// Check for hash on page load to highlight element
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.classList.remove('highlight-pop');
        void targetElement.offsetWidth;
        targetElement.classList.add('highlight-pop');
        setTimeout(() => {
          targetElement.classList.remove('highlight-pop');
        }, 800);
      }, 500); // Slight delay to ensure scroll finishes or page renders
    }
  }
});
