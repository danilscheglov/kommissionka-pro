import { renderSectionHeading } from '../../../shared/ui/sectionHeading'

export const renderServiceCard = ({ title, description, icon }) => `
  <article class="service-card">
    <div class="service-card__icon">${icon}</div>
    <div class="service-card__body">
      <h3 class="service-card__title">${title}</h3>
      <p class="service-card__text">${description}</p>
    </div>
  </article>
`

export const renderFeatureCard = (item) => `
  <article class="feature-card">
    <div class="feature-card__mark" aria-hidden="true">
      <span class="feature-card__mark-circle"></span>
      <span class="feature-card__mark-check"></span>
    </div>
    <div class="feature-card__body">
      <h3 class="feature-card__title">${typeof item === 'string' ? item : item.title}</h3>
      ${typeof item === 'string' ? '' : `<p class="feature-card__text">${item.description}</p>`}
    </div>
  </article>
`

export const renderFeatureSection = ({ id, title, description, items, highlight, note }) => `
  <section class="feature-section section-shell feature-section--${id} ${highlight ? 'feature-section--highlighted' : ''}" id="${id}">
    ${renderSectionHeading(title, description)}

    ${
      highlight
        ? `
      <div class="feature-highlight feature-highlight--${id}">
        <div class="feature-highlight__head">
          <p class="feature-highlight__title">${highlight}</p>
        </div>
        ${note ? `<p class="feature-highlight__text">${note}</p>` : ''}
      </div>
    `
        : ''
    }

    <div class="stack-panel">
      <div class="stack-panel__accent stack-panel__accent--${id}" aria-hidden="true"></div>
      <div class="stack-panel__surface stack-panel__surface--features stack-panel__surface--${id}">
        ${items.map(renderFeatureCard).join('')}
      </div>
    </div>
  </section>
`

export const renderDeliveryLogo = ({ name, src, className = '' }) => `
  <div class="logo-chip ${className}">
    <img src="${src}" alt="${name}" loading="lazy" />
  </div>
`
