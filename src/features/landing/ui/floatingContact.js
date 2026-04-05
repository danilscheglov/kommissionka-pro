const floatingActionLabels = {
  max: 'Написать нам в MAX',
  telegram: 'Написать нам в Telegram',
  phone: 'Позвонить'
}

const renderFloatingAction = ({ id, href, icon }) => `
  <a
    class="floating-contact__link floating-contact__link--${id}"
    href="${href}"
    aria-label="${floatingActionLabels[id]}"
    ${href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}
  >
    <span class="floating-contact__link-icon" aria-hidden="true">${icon}</span>
    <span class="floating-contact__link-label">${floatingActionLabels[id]}</span>
  </a>
`

export const renderFloatingContact = (actions) => `
  <details class="floating-contact" data-floating-contact>
    <summary class="floating-contact__toggle" aria-label="Связаться с нами" aria-expanded="false">
      <span class="floating-contact__toggle-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M7.3 4.8h2.4c.42 0 .79.28.9.68l.77 2.79a1 1 0 0 1-.25.98l-1.26 1.26a13.36 13.36 0 0 0 3.59 3.59l1.26-1.26a1 1 0 0 1 .98-.25l2.79.77c.4.11.68.48.68.9v2.4a1 1 0 0 1-.89 1c-.51.06-1.02.09-1.53.09C10.46 18.75 5.25 13.54 5.25 7.22c0-.51.03-1.02.09-1.53a1 1 0 0 1 .96-.89Z"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.8"
          />
        </svg>
      </span>
      <span class="floating-contact__toggle-text">Связаться с нами</span>
    </summary>

    <div class="floating-contact__panel" aria-label="Способы связи">
      ${actions
        .filter(({ id }) => floatingActionLabels[id])
        .map(renderFloatingAction)
        .join('')}
    </div>
  </details>
`
