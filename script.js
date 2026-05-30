/* V4 — mobile menu + scroll fade-in (opacity only, no bounce) */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // Mobile navigation toggle
    var btn = document.getElementById('navBtn');
    var hdr = document.querySelector('.masthead');

    if (btn && hdr) {
      btn.addEventListener('click', function () {
        var open = hdr.classList.toggle('open');
        btn.textContent = open ? 'Close' : 'Menu';
      });

      hdr.querySelectorAll('.nav a').forEach(function (a) {
        a.addEventListener('click', function () {
          hdr.classList.remove('open');
          btn.textContent = 'Menu';
        });
      });
    }

    // Scroll fade-in via IntersectionObserver
    var faders = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window && faders.length) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      faders.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show everything if IntersectionObserver is unavailable
      faders.forEach(function (el) {
        el.classList.add('visible');
      });
    }
  });
})();
