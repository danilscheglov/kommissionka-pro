import { brand } from '../../../shared/config/brand'

export const navigationLinks = [
  { href: '#hero', label: 'Главная' },
  { href: '#purchase', label: 'Скупка' },
  { href: '#sale', label: 'Продажа' },
  { href: '#commission', label: 'Комиссия' },
  { href: '#delivery', label: 'Доставка' },
  { href: '#contacts', label: 'Контакты' }
]

export const topbarContent = {
  brand,
  links: navigationLinks
}
