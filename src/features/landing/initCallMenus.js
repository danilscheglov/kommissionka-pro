const ANIMATION_DURATION = 320
const ANIMATION_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'

const finishOpening = (panel) => {
  panel.style.height = 'auto'
  panel.style.overflow = ''
  panel.style.transition = ''
  panel.dataset.animating = 'false'
}

const finishClosing = (details, panel) => {
  details.removeAttribute('open')
  panel.style.height = '0px'
  panel.style.opacity = '0'
  panel.style.overflow = ''
  panel.style.transition = ''
  panel.dataset.animating = 'false'
}

const animateMenu = (details, expanded) => {
  const summary = details.querySelector('.call-menu__summary')
  const panel = details.querySelector('.call-menu__panel')

  if (!summary || !panel || panel.dataset.animating === 'true') {
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
    details.setAttribute('open', '')
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

  window.setTimeout(() => finishClosing(details, panel), ANIMATION_DURATION)
}

export const initCallMenus = () => {
  const callMenus = document.querySelectorAll('.call-menu')

  callMenus.forEach((details) => {
    const summary = details.querySelector('.call-menu__summary')
    const panel = details.querySelector('.call-menu__panel')

    if (!summary || !panel) {
      return
    }

    summary.setAttribute('aria-expanded', details.hasAttribute('open') ? 'true' : 'false')
    panel.dataset.animating = 'false'
    panel.style.height = details.hasAttribute('open') ? 'auto' : '0px'
    panel.style.opacity = details.hasAttribute('open') ? '1' : '0'

    summary.addEventListener('click', (event) => {
      event.preventDefault()
      animateMenu(details, !details.hasAttribute('open'))
    })
  })
}
