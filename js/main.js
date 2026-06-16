(function () {
  'use strict';

  // Anno corrente nel footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Menu mobile ----
  var toggle = document.getElementById('menuToggle');
  var body = document.body;

  function closeMenu() {
    body.classList.remove('menu-open');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Apri il menu');
    }
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
    });
  }

  // Chiudi il menu quando si clicca un link di navigazione
  document.querySelectorAll('[data-nav]').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Chiudi il menu cliccando sul backdrop (area fuori dalla sidebar)
  document.addEventListener('click', function (e) {
    if (!body.classList.contains('menu-open')) return;
    var sidebar = document.getElementById('sidebar');
    if (sidebar && !sidebar.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  // ---- Lightbox galleria ----
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbClose = document.getElementById('lbClose');
  var lbPrev = document.getElementById('lbPrev');
  var lbNext = document.getElementById('lbNext');
  var lbCounter = document.getElementById('lbCounter');

  var currentList = [];   // array di {src, alt}
  var currentIndex = 0;

  function buildList(galleryEl) {
    var items = galleryEl.querySelectorAll('.gallery__item');
    var list = [];
    items.forEach(function (btn) {
      var img = btn.querySelector('img');
      list.push({
        src: btn.getAttribute('data-src') || (img ? img.getAttribute('src') : ''),
        alt: img ? img.getAttribute('alt') : ''
      });
    });
    return list;
  }

  function showAt(index) {
    if (!currentList.length) return;
    currentIndex = (index + currentList.length) % currentList.length;
    var item = currentList[currentIndex];
    lbImg.setAttribute('src', item.src);
    lbImg.setAttribute('alt', item.alt);
    lbCounter.textContent = (currentIndex + 1) + ' / ' + currentList.length;
  }

  function openLightbox(galleryEl, startSrc) {
    currentList = buildList(galleryEl);
    var start = 0;
    currentList.forEach(function (it, i) {
      if (it.src === startSrc) start = i;
    });
    showAt(start);
    lightbox.classList.add('open');
    body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    body.style.overflow = '';
    lbImg.setAttribute('src', '');
  }

  // Apertura: delega sui contenitori galleria
  document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
    gallery.addEventListener('click', function (e) {
      var btn = e.target.closest('.gallery__item');
      if (!btn) return;
      openLightbox(gallery, btn.getAttribute('data-src'));
    });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev) lbPrev.addEventListener('click', function () { showAt(currentIndex - 1); });
  if (lbNext) lbNext.addEventListener('click', function () { showAt(currentIndex + 1); });

  // Clic sullo sfondo scuro chiude
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Tastiera: Esc chiude, frecce navigano
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') showAt(currentIndex - 1);
    else if (e.key === 'ArrowRight') showAt(currentIndex + 1);
  });

})();
