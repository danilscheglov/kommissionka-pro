const ANIMATION_DURATION = 280
const ANIMATION_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'

const finishOpening = (panel) => {
  panel.style.height = 'auto'
  panel.style.overflow = ''
  panel.style.transition = ''
  panel.dataset.animating = 'false'
}

const finishClosing = (panel) => {
  panel.hidden = true
  panel.style.height = '0px'
  panel.style.opacity = '0'
  panel.style.overflow = ''
  panel.style.transition = ''
  panel.dataset.animating = 'false'
}

const animateRequisites = (toggleButton, panel, expanded) => {
  if (panel.dataset.animating === 'true') {
    return
  }

  panel.dataset.animating = 'true'
  panel.style.overflow = 'hidden'
  panel.style.transition = 'none'

  if (expanded) {
    panel.hidden = false
  }

  const currentHeight = `${panel.offsetHeight}px`
  panel.style.height = currentHeight
  panel.getBoundingClientRect()

  toggleButton.setAttribute('aria-expanded', expanded ? 'true' : 'false')

  if (expanded) {
    panel.style.opacity = '1'

    const targetHeight = `${panel.scrollHeight}px`

    requestAnimationFrame(() => {
      panel.style.transition = `height ${ANIMATION_DURATION}ms ${ANIMATION_EASING}, opacity 220ms ease`
      panel.style.height = targetHeight
    })

    window.setTimeout(() => finishOpening(panel), ANIMATION_DURATION)
    return
  }

  requestAnimationFrame(() => {
    panel.style.transition = `height ${ANIMATION_DURATION}ms ${ANIMATION_EASING}, opacity 180ms ease`
    panel.style.height = '0px'
    panel.style.opacity = '0'
  })

  window.setTimeout(() => finishClosing(panel), ANIMATION_DURATION)
}

export const initFooter = () => {
  const toggleButton = document.querySelector('.contact-card__toggle')
  const requisites = document.querySelector('#footer-requisites')

  if (!toggleButton || !requisites) {
    return
  }

  const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true'

  requisites.dataset.animating = 'false'
  requisites.style.height = isExpanded ? 'auto' : '0px'
  requisites.style.opacity = isExpanded ? '1' : '0'
  requisites.hidden = !isExpanded

  toggleButton.addEventListener('click', () => {
    animateRequisites(toggleButton, requisites, toggleButton.getAttribute('aria-expanded') !== 'true')
  })
}
