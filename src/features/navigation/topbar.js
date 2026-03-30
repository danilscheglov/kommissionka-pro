export const renderTopbar = ({ brand, links }) => `
  <header class="topbar">
    <nav class="topbar__nav section-shell" aria-label="Основная навигация">
      <a class="topbar__brand" href="#hero">
        <span class="topbar__brand-copy">
          <span class="topbar__brand-caption">Комиссионный магазин</span>
          <span class="topbar__brand-name">${brand.name}</span>
        </span>
        <span class="topbar__brand-mark">
          <img class="brand-pro-logo brand-pro-logo--topbar" src="/pro-logo.svg" alt="${brand.accent}" />
        </span>
      </a>
      <button
        class="topbar__toggle"
        type="button"
        aria-expanded="false"
        aria-controls="topbar-links"
        aria-label="Открыть меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <button class="topbar__overlay" type="button" aria-label="Закрыть меню"></button>
      <div class="topbar__links" id="topbar-links">
        ${links.map(({ href, label }) => `<a href="${href}">${label}</a>`).join('')}
      </div>
    </nav>
  </header>
`
