/* ===== giscus-pjax.js ===== */
function loadGiscus() {
  const box = document.getElementById('comment');
  if (!box) return;
  box.innerHTML = '';                       // 防止重复
  const sc = document.createElement('script');
  sc.src = 'https://giscus.app/client.js';
  sc.setAttribute('data-repo', 'meimolihan/meimolihan.github.io');
  sc.setAttribute('data-repo-id', 'R_kgDONpRkKg');
  sc.setAttribute('data-category', 'Announcements');
  sc.setAttribute('data-category-id', 'DIC_kwDONpRkKs4CmwSa');
  sc.setAttribute('data-mapping', 'pathname');
  sc.setAttribute('data-strict', '0');
  sc.setAttribute('data-reactions-enabled', '1');
  sc.setAttribute('data-emit-metadata', '0');
  sc.setAttribute('data-input-position', 'top');
  sc.setAttribute('data-theme', document.documentElement.dataset.scheme === 'dark' ? 'dark_dimmed' : 'light');
  sc.setAttribute('data-lang', 'zh-CN');
  sc.setAttribute('crossorigin', 'anonymous');
  sc.async = true;
  box.appendChild(sc);
}

function syncGiscusTheme() {
  const iframe = document.querySelector('iframe.giscus-frame');
  if (!iframe) return;
  const theme = document.documentElement.dataset.scheme === 'dark' ? 'dark_dimmed' : 'light';
  iframe.contentWindow.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
}

/* 首次进入 */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('comment')) loadGiscus();
});

/* PJAX 完成后重新加载 */
document.addEventListener('pjax:complete', () => {
  topbar.hide();
  window.Stack.init();
  initTocHide();
  initScrollTop();
  initCodeMoreBox();
  showWelcomeMessage();
  renderKaTeX();
  initFlipClock();
  clstr_globe();
  /* 关键：重载评论 */
  if (document.getElementById('comment')) loadGiscus();
});

/* 明暗切换 */
window.addEventListener('onColorSchemeChange', syncGiscusTheme);