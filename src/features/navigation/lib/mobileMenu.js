export const createMobileMenuController = ({ topbar, menuToggle }) => {
  const closeMobileMenu = () => {
    if (!topbar || !menuToggle) {
      return
    }

    topbar.classList.remove('is-menu-open')
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Открыть меню')
  }

  const toggleMobileMenu = () => {
    if (!topbar || !menuToggle) {
      return
    }

    const nextOpen = !topbar.classList.contains('is-menu-open')
    topbar.classList.toggle('is-menu-open', nextOpen)
    menuToggle.setAttribute('aria-expanded', nextOpen ? 'true' : 'false')
    menuToggle.setAttribute('aria-label', nextOpen ? 'Закрыть меню' : 'Открыть меню')
  }

  return {
    closeMobileMenu,
    toggleMobileMenu
  }
}
