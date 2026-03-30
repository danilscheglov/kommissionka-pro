import { renderSectionHeading } from '../../../shared/ui/sectionHeading'
import { renderDeliveryLogo } from './sections'

export const renderDeliverySection = ({ id, title, description, highlight, note, partners }) => `
  <section class="feature-section section-shell feature-section--${id} feature-section--highlighted" id="${id}">
    ${renderSectionHeading(title, description)}

    <div class="feature-highlight feature-highlight--${id}">
      <div class="feature-highlight__head">
        <p class="feature-highlight__title">${highlight}</p>
      </div>
      ${note ? `<p class="feature-highlight__text">${note}</p>` : ''}
    </div>

    <div class="stack-panel">
      <div class="stack-panel__accent stack-panel__accent--${id}" aria-hidden="true"></div>
      <div class="stack-panel__surface stack-panel__surface--logos stack-panel__surface--${id}">
        ${partners.map(renderDeliveryLogo).join('')}
      </div>
    </div>
  </section>
`
