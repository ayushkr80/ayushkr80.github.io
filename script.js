/* ============================================
   Ayush Kumar — Portfolio
   Vanilla JS · no dependencies
   ============================================ */

(function () {
  'use strict';

  // ----- DOM ready -----
  document.addEventListener('DOMContentLoaded', function () {
    initYear();
    initTypedText();
    initMobileMenu();
    initNavbarScroll();
    initActiveLinkOnScroll();
    initSmoothCloseMenu();
    initReveal();
    initBackToTop();
  });

  // ----- Footer year -----
  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  // ----- Typed text effect -----
  function initTypedText() {
    var target = document.getElementById('typed-text');
    if (!target) return;

    var phrases = [
      'Data Analyst',
      'Business Analyst',
      'IIT Bhilai Undergrad',
      'GovTech Intern',
      'Ex-DRDO Researcher',
      'Problem Solver'
    ];

    var phraseIndex = 0;
    var charIndex = 0;
    var deleting = false;
    var typingSpeed = 80;
    var deletingSpeed = 40;
    var pauseAfterType = 1500;
    var pauseAfterDelete = 400;

    function tick() {
      var current = phrases[phraseIndex];

      if (!deleting) {
        target.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, pauseAfterType);
          return;
        }
        setTimeout(tick, typingSpeed);
      } else {
        target.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(tick, pauseAfterDelete);
          return;
        }
        setTimeout(tick, deletingSpeed);
      }
    }

    tick();
  }

  // ----- Mobile menu toggle -----
  function initMobileMenu() {
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
      document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });
  }

  // ----- Close menu when clicking a link -----
  function initSmoothCloseMenu() {
    var menu = document.getElementById('nav-menu');
    var toggle = document.getElementById('nav-toggle');
    if (!menu) return;

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('active');
        if (toggle) toggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ----- Navbar styling on scroll -----
  function initNavbarScroll() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;

    var update = function () {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  // ----- Active nav link highlighting via IntersectionObserver -----
  function initActiveLinkOnScroll() {
    var sections = document.querySelectorAll('section[id]');
    var links = document.querySelectorAll('.nav-link');
    if (!sections.length || !links.length) return;

    var linkMap = {};
    links.forEach(function (link) {
      var href = link.getAttribute('href') || '';
      var id = href.replace('#', '');
      if (id) linkMap[id] = link;
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.id;
        var link = linkMap[id];
        if (!link) return;

        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // ----- Reveal-on-scroll animations -----
  function initReveal() {
    // Elements that should reveal as you scroll
    var selectors = [
      '.section-header',
      '.about-text',
      '.about-side',
      '.skill-card',
      '.timeline-item',
      '.project-card',
      '.stats-grid img',
      '.edu-card',
      '.por-card',
      '.cert-card',
      '.contact-card',
      '.stat-card'
    ];

    var elements = document.querySelectorAll(selectors.join(','));

    elements.forEach(function (el, i) {
      el.classList.add('reveal');
      // Stagger by element index per parent
      el.style.transitionDelay = (i % 6) * 70 + 'ms';
    });

    if (!('IntersectionObserver' in window)) {
      // Fallback: just show everything
      elements.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(function (el) { observer.observe(el); });
  }

  // ----- Back-to-top button -----
  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    var update = function () {
      if (window.scrollY > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    };
    update();
    window.addEventListener('scroll', update, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();
