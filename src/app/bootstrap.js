import { initFooter } from '../features/footer'
import { renderLanding } from '../features/landing'
import { initNavigation } from '../features/navigation'

export const bootstrapApp = () => {
  document.querySelector('#app').innerHTML = renderLanding()
  initNavigation()
  initFooter()
}
