(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('navBtn');
    var hdr = document.querySelector('.masthead');
    if (!btn || !hdr) return;

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
  });
})();
