export const initFloatingContact = () => {
  const floatingContact = document.querySelector('[data-floating-contact]')

  if (!floatingContact) {
    return
  }

  const summary = floatingContact.querySelector('.floating-contact__toggle')

  if (!summary) {
    return
  }

  const panel = floatingContact.querySelector('.floating-contact__panel')

  if (!panel) {
    return
  }

  const ANIMATION_DURATION = 260

  const finishOpening = () => {
    panel.style.height = 'auto'
    panel.style.overflow = ''
    panel.style.transition = ''
    panel.dataset.animating = 'false'
  }

  const finishClosing = () => {
    floatingContact.removeAttribute('open')
    panel.style.height = '0px'
    panel.style.opacity = '0'
    panel.style.transform = 'translateY(10px) scale(0.98)'
    panel.style.overflow = ''
    panel.style.transition = ''
    panel.dataset.animating = 'false'
  }

  const animatePanel = (expanded) => {
    if (panel.dataset.animating === 'true') {
      return
    }

    panel.dataset.animating = 'true'
    panel.style.overflow = 'hidden'
    panel.style.transition = 'none'

    const currentHeight = `${panel.offsetHeight}px`
    panel.style.height = currentHeight
    panel.getBoundingClientRect()

    summary.setAttribute('aria-expanded', expanded ? 'true' : 'false')

    if (expanded) {
      floatingContact.setAttribute('open', '')
      panel.style.opacity = '1'
      panel.style.transform = 'translateY(0) scale(1)'

      const targetHeight = `${panel.scrollHeight}px`

      requestAnimationFrame(() => {
        panel.style.transition = `height ${ANIMATION_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms ease, transform 220ms ease`
        panel.style.height = targetHeight
      })

      window.setTimeout(finishOpening, ANIMATION_DURATION)
      return
    }

    requestAnimationFrame(() => {
      panel.style.transition = `height ${ANIMATION_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease, transform 180ms ease`
      panel.style.height = '0px'
      panel.style.opacity = '0'
      panel.style.transform = 'translateY(10px) scale(0.98)'
    })

    window.setTimeout(finishClosing, ANIMATION_DURATION)
  }

  const syncExpandedState = () => {
    summary.setAttribute('aria-expanded', floatingContact.hasAttribute('open') ? 'true' : 'false')
  }

  syncExpandedState()
  panel.dataset.animating = 'false'
  panel.style.height = floatingContact.hasAttribute('open') ? 'auto' : '0px'
  panel.style.opacity = floatingContact.hasAttribute('open') ? '1' : '0'
  panel.style.transform = floatingContact.hasAttribute('open')
    ? 'translateY(0) scale(1)'
    : 'translateY(10px) scale(0.98)'

  summary.addEventListener('click', (event) => {
    event.preventDefault()
    animatePanel(!floatingContact.hasAttribute('open'))
  })

  document.addEventListener('click', (event) => {
    if (
      !floatingContact.hasAttribute('open') ||
      floatingContact.contains(event.target) ||
      panel.dataset.animating === 'true'
    ) {
      return
    }

    animatePanel(false)
  })

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      floatingContact.hasAttribute('open') &&
      panel.dataset.animating !== 'true'
    ) {
      animatePanel(false)
      summary.focus()
    }
  })
}
