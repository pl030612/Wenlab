/* ============================================================
   WenLab Website — Shared JS
   ============================================================ */

(function () {
  // ---------- Language toggle (persisted) ----------
  function applyLang(lang) {
    document.querySelectorAll('[data-zh]').forEach(el => {
      const v = el.getAttribute(lang === 'en' ? 'data-en' : 'data-zh');
      if (v != null) el.innerHTML = v;
    });
    const btnZh = document.getElementById('btn-zh');
    const btnEn = document.getElementById('btn-en');
    if (btnZh && btnEn) {
      btnZh.classList.toggle('active', lang !== 'en');
      btnEn.classList.toggle('active', lang === 'en');
    }
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-TW');
    try { localStorage.setItem('wen-lang', lang); } catch (e) {}
  }
  window.setLang = function (lang) { applyLang(lang); };

  // ---------- Mobile nav toggle ----------
  function bindNavToggle() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // ---------- Init on load ----------
  document.addEventListener('DOMContentLoaded', () => {
    let savedLang = 'zh';
    try { savedLang = localStorage.getItem('wen-lang') || 'zh'; } catch (e) {}
    applyLang(savedLang);
    bindNavToggle();
  });
})();
