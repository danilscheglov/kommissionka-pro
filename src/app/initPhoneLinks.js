const PHONE_LINK_SELECTOR = 'a[href^="tel:"]'

const isTouchDevice = () =>
  window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
  'ontouchstart' in window ||
  navigator.maxTouchPoints > 0

const copyToClipboard = async (value) => {
  if (!navigator.clipboard?.writeText) {
    return false
  }

  await navigator.clipboard.writeText(value)
  return true
}

const showCopiedFeedback = (link, originalText) => {
  link.dataset.copied = 'true'

  const textNode = link.querySelector('[data-phone-text]')

  if (textNode) {
    textNode.textContent = 'Номер скопирован'
  }

  window.setTimeout(() => {
    link.dataset.copied = 'false'

    if (textNode) {
      textNode.textContent = originalText
    }
  }, 1800)
}

export const initPhoneLinks = () => {
  const phoneLinks = [...document.querySelectorAll(PHONE_LINK_SELECTOR)]

  phoneLinks.forEach((link) => {
    const href = link.getAttribute('href')

    if (!href) {
      return
    }

    const textNode = link.querySelector('[data-phone-text]')
    const originalText = textNode?.textContent?.trim() || link.textContent.trim()

    link.dataset.copied = 'false'

    link.addEventListener('click', async (event) => {
      if (isTouchDevice()) {
        event.preventDefault()
        window.location.assign(href)
        return
      }

      event.preventDefault()

      const copied = await copyToClipboard(originalText)

      if (copied) {
        showCopiedFeedback(link, originalText)
      }
    })
  })
}
