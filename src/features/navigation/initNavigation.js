import { createActiveLinkController } from './lib/activeLink'
import { createMobileMenuController } from './lib/mobileMenu'
import { createSmoothScroller, getTopbarOffset } from './lib/scroll'

export const initNavigation = () => {
  const topbar = document.querySelector('.topbar')
  const brandLink = document.querySelector('.topbar__brand')
  const menuToggle = document.querySelector('.topbar__toggle')
  const menuOverlay = document.querySelector('.topbar__overlay')
  const menuLinks = [...document.querySelectorAll('.topbar__links a')]
  const extraLinks = [...document.querySelectorAll('.footer-meta__link')]
  const navLinks = [
    ...new Set(brandLink ? [brandLink, ...menuLinks, ...extraLinks] : [...menuLinks, ...extraLinks])
  ]
  const sections = [
    ...document.querySelectorAll('#hero, #purchase, #sale, #pawn, #delivery, #contacts')
  ]
  let isCondensed = false
  const setActiveLink = createActiveLinkController(menuLinks)
  const smoothScrollTo = createSmoothScroller()
  const { closeMobileMenu, toggleMobileMenu } = createMobileMenuController({
    topbar,
    menuToggle
  })

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href')

      if (!href || !href.startsWith('#')) {
        return
      }

      const target = document.querySelector(href)

      if (!target) {
        return
      }

      event.preventDefault()

      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - getTopbarOffset() + 1

      smoothScrollTo(Math.max(targetPosition, 0))

      setActiveLink(target.id)
      closeMobileMenu()
      window.history.replaceState(null, '', href)
    })
  })

  menuToggle?.addEventListener('click', toggleMobileMenu)
  menuOverlay?.addEventListener('click', closeMobileMenu)

  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
      closeMobileMenu()
    }
  })

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (!visibleEntries.length) {
        return
      }

      setActiveLink(visibleEntries[0].target.id)
    },
    {
      root: null,
      rootMargin: `-${getTopbarOffset()}px 0px -35% 0px`,
      threshold: [0.35, 0.6, 0.8]
    }
  )

  sections.forEach((section) => observer.observe(section))

  const syncTopbarState = () => {
    if (!topbar) {
      return
    }

    const nextCondensed = window.scrollY > 24

    if (nextCondensed === isCondensed) {
      return
    }

    isCondensed = nextCondensed
    topbar.classList.toggle('is-condensed', isCondensed)
  }

  syncTopbarState()
  window.addEventListener('scroll', syncTopbarState, { passive: true })

  const hash = window.location.hash?.replace('#', '')
  const initialSection = sections.find((section) => section.id === hash) || sections[0]

  if (initialSection) {
    setActiveLink(initialSection.id)
  }
}
