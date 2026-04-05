import { renderServiceCard } from './sections'

export const renderHero = ({ eyebrow, brand, description, services, actions }) => `
  <section class="hero section-shell" id="hero">
    <div class="hero__headline">
      <p class="hero__eyebrow">${eyebrow}</p>
      <h1 class="hero__brand">
        <span class="hero__brand-main">${brand.name}</span>
        <img class="brand-pro-logo brand-pro-logo--hero" src="/pro-logo.svg" alt="${brand.accent}" />
      </h1>
      <p class="hero__description">${description}</p>
    </div>

    <div class="hero__panel-wrap">
      <div class="hero__panel-accent" aria-hidden="true"></div>
      <div class="hero__panel">
        ${services.map(renderServiceCard).join('')}
      </div>
    </div>

    <div class="hero__actions" aria-label="Быстрые способы связи">
      ${actions
        .map(
          ({ id, label, href, icon, meta }) => `
            <a class="hero-action hero-action--${id}" href="${href}" ${href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>
              <span class="hero-action__icon">${icon}</span>
              <span class="hero-action__copy">
                <span class="hero-action__label">${label}</span>
                ${meta ? `<span class="hero-action__meta">${meta}</span>` : ''}
              </span>
            </a>
          `
        )
        .join('')}
    </div>
  </section>
`
