import { renderContactSection, contactSection } from '../footer'
import { renderTopbar, topbarContent } from '../navigation'
import { advantages, deliverySection, heroContent } from './model'
import { renderDeliverySection } from './ui/delivery'
import { renderHero } from './ui/hero'
import { renderFeatureSection } from './ui/sections'

export const renderLanding = () => {
  const featureSections = advantages.map(renderFeatureSection).join('')

  return `
    <main class="landing-page">
      ${renderTopbar(topbarContent)}
      ${renderHero(heroContent)}
      ${featureSections}
      ${renderDeliverySection(deliverySection)}
      ${renderContactSection(contactSection)}
    </main>
  `
}
