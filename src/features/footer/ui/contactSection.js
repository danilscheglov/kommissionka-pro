const formatPhoneNumber = (phone) => {
  const digits = phone.replace(/\D/g, '')

  if (digits.length !== 11) {
    return phone
  }

  const normalized = digits.startsWith('8') ? `7${digits.slice(1)}` : digits

  return `+${normalized[0]} (${normalized.slice(1, 4)}) ${normalized.slice(4, 7)}-${normalized.slice(7, 9)}-${normalized.slice(9, 11)}`
}

const formatPhoneHref = (phone) => {
  const digits = phone.replace(/\D/g, '')

  if (digits.length !== 11) {
    return `tel:${phone.replace(/[^+\d]/g, '')}`
  }

  const normalized = digits.startsWith('8') ? `7${digits.slice(1)}` : digits

  return `tel:+${normalized}`
}

const renderAddressLines = (address) => {
  const [cityPart, ...restParts] = address.split(', ')
  const cityLabel = cityPart.replace(/^г\.\s*/i, '')

  if (!restParts.length) {
    return `<span>${address}</span>`
  }

  return `
    <span class="contact-location__address-lines">
      <span class="contact-location__city">${cityLabel}</span>
      <span class="contact-location__street">${restParts.join(', ')}</span>
    </span>
  `
}

const renderRequisiteItem = (item) => {
  const match = item.match(/^(.*?:)\s*([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})$/i)

  if (!match) {
    return `<p>${item}</p>`
  }

  const [, label, email] = match

  return `<p>${label} <a class="contact-card__requisite-link" href="mailto:${email}">${email}</a></p>`
}

export const renderContactSection = ({
  id,
  eyebrow,
  brand,
  description,
  locations,
  requisites,
  socials,
  copyright
}) => `
  <footer class="site-footer" id="${id}">
    <div class="contact-card section-shell">
      <div class="contact-card__inner">
        <div class="contact-card__intro">
          <div class="contact-card__topline">
            <p class="contact-card__eyebrow">${eyebrow}</p>
            <h2 class="contact-card__brand">
              <span class="hero__brand-main">${brand.name}</span>
              <img class="brand-pro-logo brand-pro-logo--footer" src="/pro-logo.svg" alt="${brand.accent}" />
            </h2>
          </div>
          <p class="contact-card__description">${description}</p>
        </div>

        <div class="contact-card__grid">
          <div class="contact-card__column contact-card__column--accent">
            <p class="contact-card__label">Контактная информация</p>
            <div class="contact-card__locations">
              ${locations
                .map(
                  ({ address, phone }) => `
                    <article class="contact-location">
                      <a
                        class="contact-location__address"
                        href="https://yandex.ru/maps/?text=${encodeURIComponent(address)}"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span class="contact-location__icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" fill="none" stroke="currentColor" stroke-width="2"/>
                            <circle cx="12" cy="10" r="2.5" fill="currentColor"/>
                          </svg>
                        </span>
                        ${renderAddressLines(address)}
                      </a>
                      <a class="contact-location__phone" href="${formatPhoneHref(phone)}">
                        <span class="contact-location__icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path d="M6.6 4h2.8l1.4 3.6-1.8 2a15 15 0 0 0 5 5l2-1.8L20 14.2V17a2 2 0 0 1-2.2 2A17.8 17.8 0 0 1 5 6.2 2 2 0 0 1 6.6 4Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/>
                          </svg>
                        </span>
                        <span data-phone-text>${formatPhoneNumber(phone)}</span>
                      </a>
                    </article>
                  `
                )
                .join('')}
            </div>
            <button
              class="contact-card__toggle"
              type="button"
              aria-expanded="false"
              aria-controls="footer-requisites"
            >
              Реквизиты
            </button>
            <div class="contact-card__requisites" id="footer-requisites" hidden>
              <div class="contact-card__info contact-card__info--secondary">
                ${requisites.map(renderRequisiteItem).join('')}
              </div>
            </div>
          </div>

          <div class="contact-card__column">
            <p class="contact-card__label">Мы в соцсетях</p>
            <div class="social-links">
              ${socials
                .map(
                  ({ id: socialId, label, href, icon }) => `
                    <a class="social-link social-link--${socialId}" href="${href}" target="_blank" rel="noreferrer">
                      <span class="social-link__icon">${icon}</span>
                      <span class="social-link__text">${label}</span>
                    </a>
                  `
                )
                .join('')}
            </div>
          </div>
        </div>

        <div class="footer-meta">
          <p class="footer-meta__copy">${copyright}</p>
          <a class="footer-meta__link" href="#hero">Наверх</a>
        </div>
      </div>
    </div>
  </footer>
`
