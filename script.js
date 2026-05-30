/* Minimal site JS — mobile menu and scroll-spy. */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initYear();
    initMobileMenu();
    initActiveNav();
  });

  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  function initMobileMenu() {
    var btn = document.getElementById('navToggle');
    var masthead = document.querySelector('.masthead');
    if (!btn || !masthead) return;

    btn.addEventListener('click', function () {
      var open = masthead.classList.toggle('menu-open');
      btn.textContent = open ? 'Close' : 'Menu';
      btn.setAttribute('aria-expanded', String(open));
    });

    masthead.querySelectorAll('.nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        masthead.classList.remove('menu-open');
        btn.textContent = 'Menu';
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initActiveNav() {
    var sections = document.querySelectorAll('main section[id]');
    var links = document.querySelectorAll('.nav a[href^="#"]');
    if (!sections.length || !links.length) return;
    if (!('IntersectionObserver' in window)) return;

    var map = {};
    links.forEach(function (link) {
      var id = (link.getAttribute('href') || '').replace('#', '');
      if (id) map[id] = link;
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('active'); });
          var link = map[entry.target.id];
          if (link) link.classList.add('active');
        }
      });
    }, {
      rootMargin: '-30% 0px -55% 0px',
      threshold: 0
    });

    sections.forEach(function (s) { observer.observe(s); });
  }
})();
