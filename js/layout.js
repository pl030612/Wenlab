/* ============================================================
   WenLab Website — Shared Layout (navbar + footer injection)
   Keeps every page DRY — single source of truth for nav/footer.
   ============================================================ */

(function () {
  // -------------------- Navbar template --------------------
  const NAV_HTML = `
    <nav class="wen-navbar">
      <div class="container-fluid d-flex align-items-center px-4" style="gap:12px;">
      <div style="display:flex;align-items:center;gap:10px;flex-shrink:0;">
        <a href="index.html" style="display:flex;align-items:center;text-decoration:none;color:inherit;">
          <img src="assets/Wenlab_logo_trimmed.png" alt="WenLab" style="height:44px;">
        </a>
      </div>
      <button class="nav-toggle" aria-label="Menu"><i class="bi bi-list"></i></button>
      <div class="nav-links">
        <a href="index.html" class="nav-link" data-key="home" data-zh="首頁" data-en="Home">首頁</a>
        <a href="about.html" class="nav-link" data-key="about" data-zh="教授" data-en="Professor">教授</a>
          <a href="teaching.html" class="nav-link" data-key="teaching" data-zh="教學" data-en="Teaching">教學</a>
        <a href="research.html" class="nav-link" data-key="research" data-zh="計畫" data-en="Research">計畫</a>
        <a href="publications.html" class="nav-link" data-key="publications" data-zh="發表" data-en="Publications">發表</a>
        <a href="media.html" class="nav-link" data-key="media" data-zh="專訪" data-en="Media">專訪</a>
        <a href="team.html" class="nav-link" data-key="team" data-zh="校友" data-en="Alumni">校友</a>
        <a href="contact.html" class="nav-link" data-key="contact" data-zh="聯絡" data-en="Contact">聯絡</a>
        <div class="lang-toggle">
          <button class="lang-btn active" id="btn-zh" onclick="setLang('zh')">中文</button>
          <button class="lang-btn" id="btn-en" onclick="setLang('en')">EN</button>
        </div>
      </div>
      </div>
    </nav>
  `;

  // -------------------- Footer template --------------------
  const FOOTER_HTML = `
    <footer class="wen-footer">
      <div class="container" style="max-width:1200px;">
        <div class="row gy-5 gx-4">

          <!-- 品牌 -->
          <div class="col-12 col-lg-4 text-center text-lg-start">
            <a href="index.html" style="display:inline-block;margin-bottom:14px;">
              <img src="assets/Wenlab_logo_trimmed.png" alt="WenLab" style="height:54px;">
            </a>
            <div style="font-family:var(--font-h);font-weight:800;font-size:18px;color:#fff;line-height:1.4;margin-bottom:8px;"
                 data-zh="地理計算科學資訊研究室" data-en="Geospatial Computing x Human Environment">地理計算科學資訊研究室</div>
            <p class="mx-auto mx-lg-0" style="font-size:13px;color:rgba(255,255,255,.5);line-height:1.7;margin:0;max-width:260px;"
               data-zh="國立臺灣大學地理環境資源學系" data-en="Dept. of Geography, National Taiwan University">國立臺灣大學地理環境資源學系</p>
          </div>

          <!-- 聯絡資訊 -->
          <div class="col-12 col-sm-6 col-lg-3 text-center text-sm-start">
            <h6 data-zh="聯絡資訊" data-en="Contact">聯絡資訊</h6>
            <a href="contact.html"><i class="bi bi-geo-alt-fill me-2"></i><span data-zh="106319 臺北市大安區羅斯福路四段一號" data-en="No. 1, Sec. 4, Roosevelt Rd., Taipei 106319">106319 臺北市大安區羅斯福路四段一號</span></a>
            <a href="tel:+886233660000"><i class="bi bi-telephone-fill me-2"></i>+886-2-3366-5847</a>
            <a href="mailto:wenthung@ntu.edu.tw"><i class="bi bi-envelope-fill me-2"></i>wenthung@ntu.edu.tw</a>
          </div>

          <!-- 連結（三欄） -->
          <div class="col-12 col-sm-6 col-lg-5">
            <div class="row gx-2">
              <div class="col-4">
                <h6 data-zh="網站導覽" data-en="Explore">網站導覽</h6>
                <a href="index.html" data-zh="首頁" data-en="Home">首頁</a>
                <a href="about.html" data-zh="教授" data-en="Professor">教授</a>
                <a href="team.html" data-zh="團隊" data-en="Team">團隊</a>
                <a href="contact.html" data-zh="聯絡我們" data-en="Contact">聯絡我們</a>
              </div>

              <div class="col-4">
                <h6 data-zh="教學與研究" data-en="Teaching and Research">教學與研究</h6>
                <a href="teaching.html" data-zh="教學課程" data-en="Teaching">教學課程</a>
                <a href="research.html" data-zh="研究計畫" data-en="Research">研究計畫</a>
                <a href="publications.html" data-zh="發表論文" data-en="Publications">發表論文</a>
                <a href="media.html" data-zh="專訪報導" data-en="Media">專訪報導</a>

              </div>

              <div class="col-4">
                <h6 data-zh="學術連結" data-en="Academic">學術連結</h6>
                <a href="https://scholar.google.com/citations?user=cgG8BWEAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a>
                <a href="https://github.com/wenlab501" target="_blank" rel="noopener">GitHub</a>
                <a href="https://homepage.ntu.edu.tw/~wenthung/" target="_blank" rel="noopener" data-zh="個人首頁" data-en="Homepage">個人首頁</a>
              </div>
            </div>
          </div>

        </div>

        <div class="footer-bottom text-center">
          <span style="color:rgba(255,255,255,.5);font-size:13px;"
                data-zh="© 2026 溫在弘教授 · 地理計算科學資訊研究室 | Web Design by 廖思采"
                data-en="© 2026 Prof. Wen-Hung Tung · Geospatial Computing Lab · National Taiwan University | Web Design by Szu-Tsai Liao">© 2026 溫在弘教授 · 空間分析與地理資訊研究室 · 國立臺灣大學 | Web Design by 廖思采</span>
        </div>
      </div>
    </footer>
  `;

  // -------------------- Inject on early DOM ready --------------------
  function inject() {
    const navMount = document.getElementById('site-nav');
    const footMount = document.getElementById('site-footer');
    if (navMount) navMount.outerHTML = NAV_HTML;
    if (footMount) footMount.outerHTML = FOOTER_HTML;

    // mark active nav link based on current file
    const file = (location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';
    const key = file === 'index' ? 'home' : file;
    document.querySelectorAll('.nav-link[data-key]').forEach(l => {
      l.classList.toggle('active', l.dataset.key === key);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
