/* ============================================================
   WenLab StoryMap — Scroll-driven map narrative
   Reads window.WENLAB_STORYMAP (js/storymap-data.js)
   Depends on Leaflet (loaded before this script) and main.js
   (for the shared setLang language toggle).
   ============================================================ */

(function () {
  const DATA = window.WENLAB_STORYMAP;
  if (!DATA || !window.L) return;

  const { regions, themes, theses } = DATA;

  // ---------- language ----------
  let lang = 'zh';
  try { lang = localStorage.getItem('wen-lang') || 'zh'; } catch (e) {}
  const t = (zh, en) => (lang === 'en' ? en : zh);

  // ---------- map ----------
  const map = L.map('sm-map', {
    zoomControl: true,
    scrollWheelZoom: false,   // don't hijack page scroll
    attributionControl: true
  }).setView([26, 120], 4);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd', maxZoom: 19
  }).addTo(map);

  // ---------- compute marker positions (spiral-jitter co-located points) ----------
  // Many theses share the generic "Taiwan" centroid; fan them out so the
  // markers are individually visible. Positions for those are illustrative.
  const coordCounter = {};
  function positionFor(region, idx) {
    const r = regions[region];
    if (!r || r.lat == null) return null;
    const key = region;
    const n = (coordCounter[key] = (coordCounter[key] || 0));
    coordCounter[key]++;
    if (n === 0) return [r.lat, r.lng];
    // golden-angle spiral around the centroid
    const golden = 2.399963229728653;
    const step = 0.085;                       // ~9 km per ring step
    const radius = step * Math.sqrt(n);
    const ang = n * golden;
    return [r.lat + radius * Math.cos(ang), r.lng + radius * Math.sin(ang) * 1.1];
  }

  // ---------- build markers ----------
  theses.forEach((d, i) => {
    d._pos = positionFor(d.region, i);
    if (!d._pos) return;
    const color = (themes[d.theme] || {}).color || '#5F9598';
    d._marker = L.circleMarker(d._pos, {
      radius: 6, color: '#fff', weight: 1.5,
      fillColor: color, fillOpacity: 0.85, opacity: 0.9
    }).addTo(map);
    d._marker.on('click', () => {
      const card = document.getElementById('sm-step-' + i);
      if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  function highlight(active) {
    theses.forEach((d) => {
      if (!d._marker) return;
      const on = d === active;
      d._marker.setStyle({
        radius: on ? 11 : 6,
        fillOpacity: on ? 1 : (active ? 0.35 : 0.85),
        weight: on ? 3 : 1.5
      });
      if (on) d._marker.bringToFront();
    });
  }

  // ---------- map "current region" chip ----------
  const chip = document.getElementById('sm-region-chip');
  function setChip(d) {
    if (!chip) return;
    const r = regions[d.region];
    chip.innerHTML = '<i class="bi bi-geo-alt-fill"></i> ' + t(r.zh, r.en);
    chip.style.display = 'inline-flex';
  }

  // ---------- mobile info panel (sits under the pinned map) ----------
  const panel = document.getElementById('sm-active-panel');
  function setPanelIntro() {
    if (!panel) return;
    panel.style.borderLeftColor = 'var(--wen-navy)';
    panel.innerHTML = '<div class="sm-name" data-zh="開始這趟旅程" data-en="Begin the journey">' +
      t('開始這趟旅程', 'Begin the journey') + '</div>' +
      '<div class="sm-title" data-zh="往下捲動，地圖會帶你飛往每位畢業生的研究現場。" ' +
      'data-en="Scroll down — the map flies to each graduate\'s study area.">' +
      t('往下捲動，地圖會帶你飛往每位畢業生的研究現場。', "Scroll down — the map flies to each graduate's study area.") + '</div>';
  }
  function renderPanel(d) {
    if (!panel) return;
    const th = themes[d.theme] || {}, r = regions[d.region] || {};
    const c = th.color || '#5F9598';
    panel.style.borderLeftColor = c;
    const approx = d.approx
      ? ' <span class="sm-approx"><i class="bi bi-question-circle"></i> ' + t('地點為推估', 'location inferred') + '</span>' : '';
    panel.innerHTML =
      '<div class="sm-step-top">' +
        '<span class="sm-year">' + d.year + '</span>' +
        '<span class="sm-theme" style="background:' + c + '1f;color:' + c + '">' + t(th.zh, th.en) + '</span>' +
      '</div>' +
      '<div class="sm-name">' + t(d.name_zh, d.name_en) +
        ' <span class="sm-deg">' + t(d.degree_zh, d.degree_en) + '</span></div>' +
      '<div class="sm-region"><i class="bi bi-geo-alt"></i> ' + t(r.zh, r.en) + approx + '</div>' +
      '<div class="sm-title">' + t(d.title_zh, d.title_en) + '</div>' +
      (d.link ? '<a class="sm-link" href="' + d.link + '" target="_blank" rel="noopener">' +
        t('閱讀論文', 'Read thesis') + ' <i class="bi bi-box-arrow-up-right"></i></a>' : '');
  }

  // ---------- focus a thesis ----------
  function focus(d) {
    setChip(d);
    renderPanel(d);
    if (d._pos) {
      highlight(d);
      const z = (regions[d.region].group === 'TW') ? 8 : 6;
      map.flyTo(d._pos, z, { duration: 0.9 });
    } else if (d.region === 'global') {
      highlight(d);
      map.flyTo([20, 80], 2, { duration: 0.9 });
    } else { // method
      highlight(d);
      map.flyTo([24, 116], 4, { duration: 0.9 });
    }
  }

  // ---------- render steps ----------
  const stepsEl = document.getElementById('sm-steps');
  theses.forEach((d, i) => {
    const th = themes[d.theme] || {};
    const r = regions[d.region] || {};
    const approxBadge = d.approx
      ? '<span class="sm-approx" data-zh="地點為推估" data-en="location inferred" title="未在論文題目中明寫地點，為推估值 / location not stated in title">' +
        '<i class="bi bi-question-circle"></i> ' + t('地點為推估', 'location inferred') + '</span>'
      : '';
    const step = document.createElement('div');
    step.className = 'sm-step';
    step.id = 'sm-step-' + i;
    step.innerHTML =
      '<div class="sm-step-card" style="border-left-color:' + (th.color || '#5F9598') + '">' +
        '<div class="sm-step-top">' +
          '<span class="sm-year">' + d.year + '</span>' +
          '<span class="sm-theme" style="background:' + (th.color || '#5F9598') + '1f;color:' + (th.color || '#5F9598') + '"' +
            ' data-zh="' + th.zh + '" data-en="' + th.en + '">' + t(th.zh, th.en) + '</span>' +
        '</div>' +
        '<div class="sm-name">' +
          '<span data-zh="' + d.name_zh + '" data-en="' + d.name_en + '">' + t(d.name_zh, d.name_en) + '</span>' +
          ' <span class="sm-deg" data-zh="' + d.degree_zh + '" data-en="' + d.degree_en + '">' + t(d.degree_zh, d.degree_en) + '</span>' +
        '</div>' +
        '<div class="sm-region"><i class="bi bi-geo-alt"></i> ' +
          '<span data-zh="' + r.zh + '" data-en="' + r.en + '">' + t(r.zh, r.en) + '</span>' + approxBadge +
        '</div>' +
        '<div class="sm-title" data-zh="' + esc(d.title_zh) + '" data-en="' + esc(d.title_en) + '">' + t(d.title_zh, d.title_en) + '</div>' +
        (d.link ? '<a class="sm-link" href="' + d.link + '" target="_blank" rel="noopener" ' +
          'data-zh="閱讀論文" data-en="Read thesis">' + t('閱讀論文', 'Read thesis') + ' <i class="bi bi-box-arrow-up-right"></i></a>' : '') +
      '</div>';
    stepsEl.appendChild(step);
    d._step = step;
  });

  function esc(s) { return String(s).replace(/"/g, '&quot;'); }

  // ---------- scroll-driven active step ----------
  // The active step is the one whose centre is closest to a "focus line".
  // Wide screens: screen-centre (map sits beside the cards).
  // Narrow screens: a line below the pinned map, where the info panel reads.
  const isNarrow = window.matchMedia('(max-width: 991.98px)').matches;
  let current = null;
  function updateActive() {
    const line = window.innerHeight * (isNarrow ? 0.72 : 0.5);
    let best = null, bestDist = Infinity;
    theses.forEach((d) => {
      const r = d._step.getBoundingClientRect();
      if (r.height === 0) return;
      const dist = Math.abs((r.top + r.height / 2) - line);
      if (dist < bestDist) { bestDist = dist; best = d; }
    });
    // keep the intro showing at the very top until a step nears the line
    if (best && best !== current && bestDist < window.innerHeight * 0.9) {
      theses.forEach((x) => x._step.classList.remove('is-active'));
      best._step.classList.add('is-active');
      current = best;
      focus(best);
    }
  }
  window.updateActiveStep = updateActive;   // exposed for debugging/verification

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(() => { updateActive(); ticking = false; }); }
  }, { passive: true });
  window.addEventListener('resize', updateActive, { passive: true });

  // ---------- legend ----------
  const legendEl = document.getElementById('sm-legend-items');
  if (legendEl) {
    Object.keys(themes).forEach((k) => {
      const th = themes[k];
      const item = document.createElement('span');
      item.className = 'sm-legend-item';
      item.innerHTML = '<i style="background:' + th.color + '"></i>' +
        '<span data-zh="' + th.zh + '" data-en="' + th.en + '">' + t(th.zh, th.en) + '</span>';
      legendEl.appendChild(item);
    });
  }
  // collapsible on small screens
  const legendToggle = document.getElementById('sm-legend-toggle');
  if (legendToggle) {
    legendToggle.addEventListener('click', () => {
      const lg = document.getElementById('sm-legend');
      const open = lg.classList.toggle('open');
      legendToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // ---------- language toggle: re-apply to dynamic nodes ----------
  const origSetLang = window.setLang;
  window.setLang = function (l) {
    lang = l;
    if (typeof origSetLang === 'function') origSetLang(l);  // updates all [data-zh]
    if (current) { setChip(current); renderPanel(current); }
    else setPanelIntro();
  };
  setPanelIntro();
  // apply saved language to the freshly-rendered nodes
  if (typeof origSetLang === 'function') origSetLang(lang);

  // ---------- initial view ----------
  map.flyTo([26, 120], 4, { duration: 0 });
  updateActive();   // sync in case the page loads already scrolled
})();
