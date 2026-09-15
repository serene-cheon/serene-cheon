/* Cross-page nav morph: before leaving a page, remember where each topbar
   item sits; on the next page, slide every item from that old spot into its
   new one (e.g. stacked links → the horizontal row on Publication). */
(function () {
  const KEY = 'navRects';

  function items() {
    const map = {};
    const logo = document.querySelector('.topbar-logo');
    if (logo) map.logo = logo;
    document.querySelectorAll('.topbar-group a, .topbar-group .contact-email').forEach(function (el) {
      const k = el.classList.contains('contact-email') ? 'email' : el.getAttribute('href');
      if (k && !map[k]) map[k] = el;
    });
    return map;
  }

  window.addEventListener('pagehide', function () {
    const data = { t: Date.now(), rects: {} };
    const map = items();
    for (const k in map) {
      const r = map[k].getBoundingClientRect();
      data.rects[k] = { x: r.left, y: r.top };
    }
    try { sessionStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
  });

  function play() {
    let data = null;
    try { data = JSON.parse(sessionStorage.getItem(KEY)); } catch (e) {}
    try { sessionStorage.removeItem(KEY); } catch (e) {}
    if (!data || Date.now() - data.t > 3000) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const map = items();
    const movers = [];
    for (const k in map) {
      const saved = data.rects[k];
      if (!saved) continue;
      const r = map[k].getBoundingClientRect();
      const dx = saved.x - r.left;
      const dy = saved.y - r.top;
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) continue;
      movers.push({ el: map[k], dx: dx, dy: dy });
    }
    if (!movers.length) return;

    movers.forEach(function (m) {
      m.el.style.transition = 'none';
      m.el.style.transform = 'translate(' + m.dx + 'px, ' + m.dy + 'px)';
    });
    document.documentElement.getBoundingClientRect();   /* flush layout so the start position paints */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        movers.forEach(function (m) {
          m.el.style.transition = 'transform 0.55s cubic-bezier(.2,.75,.25,1)';
          m.el.style.transform = '';
        });
        setTimeout(function () {
          movers.forEach(function (m) { m.el.style.transition = ''; });
        }, 650);
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', play);
  else play();
})();
