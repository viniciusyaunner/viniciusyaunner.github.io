/* main.js – Win98 Portfolio interactions */
(function () {
  'use strict';

  /* ── Panel open / close ─────────────────────────────────────── */
  function openPanel(name) {
    // Close all panels first
    document.querySelectorAll('.content-window').forEach(function (el) {
      el.setAttribute('hidden', '');
      el.style.display = '';
    });

    // Update all nav button states
    document.querySelectorAll('.hero-nav-btn').forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'false');
    });

    var panel = document.getElementById('panel-' + name);
    var btn   = document.querySelector('.hero-nav-btn[data-panel="' + name + '"]');

    if (!panel) return;

    panel.removeAttribute('hidden');
    panel.style.display = 'flex';
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (btn) btn.setAttribute('aria-expanded', 'true');

    // Update URL hash without scroll jump
    history.replaceState(null, '', '#' + name);
  }

  function closePanel(name) {
    var panel = document.getElementById('panel-' + name);
    var btn   = document.querySelector('.hero-nav-btn[data-panel="' + name + '"]');

    if (panel) {
      panel.setAttribute('hidden', '');
      panel.style.display = '';
    }
    if (btn) btn.setAttribute('aria-expanded', 'false');

    history.replaceState(null, '', window.location.pathname);
  }

  /* ── Wire up nav buttons ─────────────────────────────────────── */
  document.querySelectorAll('.hero-nav-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var name    = btn.dataset.panel;
      var panel   = document.getElementById('panel-' + name);
      var isOpen  = panel && !panel.hasAttribute('hidden');

      if (isOpen) {
        closePanel(name);
      } else {
        openPanel(name);
      }
    });
  });

  /* ── Wire up panel close (X) buttons ────────────────────────── */
  document.querySelectorAll('.panel-close-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      closePanel(btn.dataset.panel);
    });
  });

  /* ── Open panel if hash in URL on load ──────────────────────── */
  var hash = window.location.hash.replace('#', '');
  if (hash) {
    openPanel(hash);
  }

  /* ── Keyboard: Escape closes any open panel ─────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.content-window:not([hidden])').forEach(function (el) {
        var name = el.id.replace('panel-', '');
        closePanel(name);
      });
    }
  });

})();
