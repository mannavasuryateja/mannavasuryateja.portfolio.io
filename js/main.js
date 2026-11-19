(function () {
    var root = document.documentElement;
    document.getElementById('theme').onclick = function () { root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark' };
    var bar = document.getElementById('bar');
    addEventListener('scroll', function () { var h = root.scrollHeight - innerHeight; bar.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%' }, { passive: true });
    document.querySelectorAll('.card,.stat,.t').forEach(function (c) { c.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px') }) });
    if (!('IntersectionObserver' in window)) return;
    var els = document.querySelectorAll('.sh,.card,.stat,.t,.code,.contact p');
    root.classList.add('js');
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }) }, { threshold: .06 });
    els.forEach(function (el, i) { el.classList.add('rv'); el.style.transitionDelay = ((i % 4) * 70) + 'ms'; io.observe(el) });
})();