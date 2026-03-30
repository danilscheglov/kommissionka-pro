export const createActiveLinkController = (menuLinks) => {
  return (targetId) => {
    menuLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${targetId}`
      link.classList.toggle('is-active', isActive)
      link.setAttribute('aria-current', isActive ? 'page' : 'false')
    })
  }
}
