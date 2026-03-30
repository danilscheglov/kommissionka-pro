import { renderServiceCard } from './sections'

export const renderHero = ({ eyebrow, brand, description, services }) => `
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
  </section>
`
