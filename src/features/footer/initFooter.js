export const initFooter = () => {
  const toggleButton = document.querySelector('.contact-card__toggle')
  const requisites = document.querySelector('#footer-requisites')

  if (!toggleButton || !requisites) {
    return
  }

  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true'

    toggleButton.setAttribute('aria-expanded', String(!isExpanded))
    requisites.hidden = isExpanded
  })
}
