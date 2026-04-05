import { initFooter } from '../features/footer'
import { initFloatingContact, renderLanding } from '../features/landing'
import { initNavigation } from '../features/navigation'
import { initPhoneLinks } from './initPhoneLinks'

export const bootstrapApp = () => {
  document.querySelector('#app').innerHTML = renderLanding()
  initNavigation()
  initPhoneLinks()
  initFooter()
  initFloatingContact()
}
