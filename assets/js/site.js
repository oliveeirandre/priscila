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
});
