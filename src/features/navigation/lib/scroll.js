export const getTopbarOffset = () => {
  const rootStyles = getComputedStyle(document.documentElement)
  const offset = parseInt(rootStyles.getPropertyValue('--topbar-height'), 10)

  return Number.isNaN(offset) ? 0 : offset
}

const easeInOutCubic = (progress) => {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2
}

export const createSmoothScroller = () => {
  let animationFrameId = null

  return (targetY, duration = 900) => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }

    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()

    document.documentElement.classList.add('is-programmatic-scroll')

    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeInOutCubic(progress)

      window.scrollTo(0, startY + distance * easedProgress)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
        return
      }

      animationFrameId = null
      document.documentElement.classList.remove('is-programmatic-scroll')
    }

    animationFrameId = requestAnimationFrame(step)
  }
}
