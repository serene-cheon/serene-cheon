/* The fixed topbar sits out of flow, so give the body matching headroom
   (home has no scroll; publication sets its own offset in CSS). */
(function () {
  function offsetFixedNav() {
    const b = document.body.classList;
    if (b.contains('home') || b.contains('pub')) return;
    const bar = document.querySelector('.topbar');
    if (bar) document.body.style.paddingTop = bar.offsetHeight + 'px';
  }
  window.addEventListener('resize', offsetFixedNav);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', offsetFixedNav);
  else offsetFixedNav();
})();
