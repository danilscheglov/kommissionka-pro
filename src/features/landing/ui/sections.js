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

export const renderCallMenu = ({ label, caption, phoneDisplay, phoneHref, phoneNote }, id) => `
  <div class="call-menu call-menu--${id}">
    <a class="call-menu__link" href="${phoneHref}" aria-label="${caption}">
      <span class="call-menu__summary-lead">
        <span class="call-menu__phone-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M7.3 4.8h2.4c.42 0 .79.28.9.68l.77 2.79a1 1 0 0 1-.25.98l-1.26 1.26a13.36 13.36 0 0 0 3.59 3.59l1.26-1.26a1 1 0 0 1 .98-.25l2.79.77c.4.11.68.48.68.9v2.4a1 1 0 0 1-.89 1c-.51.06-1.02.09-1.53.09C10.46 18.75 5.25 13.54 5.25 7.22c0-.51.03-1.02.09-1.53a1 1 0 0 1 .96-.89Z"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="1.8"
            />
          </svg>
        </span>
        <span class="call-menu__summary-copy">
          <span class="call-menu__summary-text">${label}</span>
          ${phoneNote ? `<span class="call-menu__note">${phoneNote}</span>` : ''}
        </span>
      </span>
      <span class="call-menu__phone" data-phone-text>${phoneDisplay}</span>
    </a>
  </div>
`

export const renderFeatureSection = ({
  id,
  title,
  description,
  items,
  highlight,
  note,
  callMenu
}) => `
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
        ${callMenu ? renderCallMenu(callMenu, id) : ''}
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
