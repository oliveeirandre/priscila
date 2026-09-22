document.addEventListener('DOMContentLoaded', function () {
  /* ── Mobile nav ── */
  var navToggle = document.querySelector('[data-nav-toggle]');
  var navDrawer = document.querySelector('[data-nav-drawer]');
  var navOverlays = document.querySelectorAll('[data-nav-overlay]');

  function setNavOpen(open) {
    if (!navToggle || !navDrawer) return;

    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navDrawer.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  }

  if (navToggle && navDrawer) {
    navToggle.addEventListener('click', function () {
      setNavOpen(!document.body.classList.contains('nav-open'));
    });

    navOverlays.forEach(function (overlay) {
      overlay.addEventListener('click', function () {
        setNavOpen(false);
      });
    });

    navDrawer.addEventListener('click', function (event) {
      if (event.target === navDrawer) {
        setNavOpen(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && document.body.classList.contains('nav-open')) {
        setNavOpen(false);
      }
    });
  }

  /* ── Header scroll ── */
  var siteHeader = document.querySelector('[data-site-header]');

  if (siteHeader) {
    var scrollThreshold = 24;

    function updateHeaderScroll() {
      siteHeader.classList.toggle('is-scrolled', window.scrollY > scrollThreshold);
    }

    window.addEventListener('scroll', updateHeaderScroll, { passive: true });
    updateHeaderScroll();
  }

  /* ── Sticky CTA offset (keeps content from sitting under the bar) ── */
  var stickyCta = document.querySelector('[data-sticky-cta]');

  if (stickyCta) {
    document.body.classList.add('has-sticky-cta');

    function updateStickyCtaOffset() {
      document.documentElement.style.setProperty(
        '--sticky-cta-height',
        stickyCta.offsetHeight + 'px'
      );
    }

    window.addEventListener('resize', updateStickyCtaOffset, { passive: true });
    updateStickyCtaOffset();
  }

  /* ── Reveal on scroll ── */
  var revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length) {
    if ('IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-inview');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      revealElements.forEach(function (element) {
        revealObserver.observe(element);
      });
    } else {
      revealElements.forEach(function (element) {
        element.classList.add('is-inview');
      });
    }
  }

  /* ── WhatsApp CTA analytics ── */
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[data-cta="whatsapp"]');
    if (!link) return;

    var payload = {
      service: link.dataset.service || '',
      page: location.pathname
    };

    if (typeof window.gtag === 'function') {
      gtag('event', 'cta_whatsapp', payload);
    }

    if (typeof window.fbq === 'function') {
      fbq('trackCustom', 'cta_whatsapp', payload);
    }
  });

  /* ── Maps CTA analytics ── */
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[data-cta="maps"]');
    if (!link) return;
    var payload = { page: location.pathname };
    if (typeof window.gtag === 'function') {
      gtag('event', 'click_maps', payload);
    }
    if (typeof window.fbq === 'function') {
      fbq('trackCustom', 'click_maps', payload);
    }
  });

  /* ── Trabalhos view ── */
  if (/\/trabalhos\/?$/.test(location.pathname)) {
    var viewPayload = { page: location.pathname };
    if (typeof window.gtag === 'function') {
      gtag('event', 'view_trabalhos', viewPayload);
    }
    if (typeof window.fbq === 'function') {
      fbq('trackCustom', 'view_trabalhos', viewPayload);
    }
  }

  /* ── Trabalhos filter ── */
  var filterButtons = document.querySelectorAll('[data-filter]');
  var workItems = document.querySelectorAll('[data-work]');

  if (filterButtons.length && workItems.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var category = button.getAttribute('data-filter');

        filterButtons.forEach(function (filterButton) {
          filterButton.setAttribute(
            'aria-pressed',
            filterButton === button ? 'true' : 'false'
          );
        });

        workItems.forEach(function (item) {
          var itemCategory = item.getAttribute('data-category') || '';
          var show = category === 'all' || itemCategory === category;
          item.hidden = !show;
        });
      });
    });
  }

  /* ── Gallery lightbox ── */
  var galleries = document.querySelectorAll('.gallery');

  if (galleries.length) {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('hidden', '');
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Imagem ampliada');
    lightbox.innerHTML =
      '<button type="button" class="lightbox__close" data-lightbox-close aria-label="Fechar">' +
      '<span aria-hidden="true"></span><span aria-hidden="true"></span>' +
      '</button>' +
      '<button type="button" class="lightbox__nav lightbox__nav--prev" data-lightbox-prev aria-label="Anterior">' +
      '<span aria-hidden="true">←</span>' +
      '</button>' +
      '<figure class="lightbox__figure">' +
      '<img class="lightbox__img" alt="" />' +
      '</figure>' +
      '<button type="button" class="lightbox__nav lightbox__nav--next" data-lightbox-next aria-label="Próxima">' +
      '<span aria-hidden="true">→</span>' +
      '</button>' +
      '<div class="lightbox__backdrop" data-lightbox-close tabindex="-1"></div>';
    document.body.appendChild(lightbox);

    var lightboxImg = lightbox.querySelector('.lightbox__img');
    var btnPrev = lightbox.querySelector('[data-lightbox-prev]');
    var btnNext = lightbox.querySelector('[data-lightbox-next]');
    var activeItems = [];
    var activeIndex = 0;
    var lastFocus = null;
    var touchStartX = 0;

    function galleryItems(gallery) {
      return Array.prototype.slice.call(
        gallery.querySelectorAll('.gallery__item img')
      ).filter(function (img) {
        var item = img.closest('.gallery__item');
        return item && !item.hidden;
      });
    }

    function syncNav() {
      var multi = activeItems.length > 1;
      btnPrev.hidden = !multi;
      btnNext.hidden = !multi;
    }

    function showAt(index) {
      if (!activeItems.length) return;
      activeIndex = (index + activeItems.length) % activeItems.length;
      var img = activeItems[activeIndex];
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt || '';
      syncNav();
    }

    function openLightbox(items, index) {
      activeItems = items;
      lastFocus = document.activeElement;
      showAt(index);
      lightbox.removeAttribute('hidden');
      document.body.classList.add('lightbox-open');
      lightbox.querySelector('[data-lightbox-close]').focus();
    }

    function closeLightbox() {
      lightbox.setAttribute('hidden', '');
      document.body.classList.remove('lightbox-open');
      lightboxImg.removeAttribute('src');
      activeItems = [];
      if (lastFocus && typeof lastFocus.focus === 'function') {
        lastFocus.focus();
      }
    }

    galleries.forEach(function (gallery) {
      gallery.classList.add('gallery--lightbox');
      gallery.addEventListener('click', function (event) {
        var img = event.target.closest('.gallery__item img');
        if (!img || !gallery.contains(img)) return;
        var items = galleryItems(gallery);
        var index = items.indexOf(img);
        if (index < 0) return;
        event.preventDefault();
        openLightbox(items, index);
      });
    });

    lightbox.addEventListener('click', function (event) {
      if (event.target.closest('[data-lightbox-close]')) {
        closeLightbox();
        return;
      }
      if (event.target.closest('[data-lightbox-prev]')) {
        showAt(activeIndex - 1);
        return;
      }
      if (event.target.closest('[data-lightbox-next]')) {
        showAt(activeIndex + 1);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (lightbox.hasAttribute('hidden')) return;
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showAt(activeIndex - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        showAt(activeIndex + 1);
      }
    });

    lightbox.addEventListener(
      'touchstart',
      function (event) {
        if (event.changedTouches && event.changedTouches[0]) {
          touchStartX = event.changedTouches[0].clientX;
        }
      },
      { passive: true }
    );

    lightbox.addEventListener(
      'touchend',
      function (event) {
        if (!event.changedTouches || !event.changedTouches[0]) return;
        var dx = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) < 50) return;
        if (dx > 0) showAt(activeIndex - 1);
        else showAt(activeIndex + 1);
      },
      { passive: true }
    );
  }
});
