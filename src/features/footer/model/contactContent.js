import { brand } from '../../../shared/config/brand'

export const locations = [
  {
    address: 'г. Липецк, ул. Космонавтов, д. 41/1',
    phone: '8-999-788-99-19'
  },
  {
    address: 'г. Липецк, пр-т Победы, д. 74',
    phone: '8-999-788-99-18'
  },
  {
    address: 'г. Липецк, пр-т Мира, д. 1',
    phone: '8-999-788-99-17'
  }
]

export const requisites = [
  'Наименование: ИП Рогожников Сергей Витальевич',
  'ИНН: 480200746285',
  'ОГРНИП: 325508100228383',
  'Юридический адрес: 141014, Московская область, г. Мытищи, ул. 1-ая Крестьянская, д. 2, корп. 1, кв. 50',
  'Почта: cnet@bk.ru'
]

export const socials = [
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/komissionka_pro',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.7 4.2 3.9 10.7c-1.1.4-1.1 1 0 1.3l4.3 1.4 1.7 5.1c.2.6.4.8.8.8.3 0 .5-.1.8-.4l2.4-2.3 4.9 3.6c.9.5 1.5.3 1.8-.9L22.9 5c.3-1.3-.5-1.9-2.2-.8Z" fill="currentColor"/>
      </svg>
    `
  },
  {
    id: 'avito',
    label: 'Avito',
    href: 'https://www.avito.ru/brands/komissionkapro',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="7" cy="8" r="3.2" fill="#58AFFF"/>
        <circle cx="15.8" cy="7.2" r="2.3" fill="#FF6B8B"/>
        <circle cx="16.6" cy="15.8" r="4.1" fill="#9DDA42"/>
        <circle cx="8.2" cy="16.4" r="2.1" fill="#9F6BFF"/>
      </svg>
    `
  },
  {
    id: 'vk',
    label: 'ВКонтакте',
    href: 'https://vk.com/komissionkapro',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.8 7.6c.1 5.2 2.7 8.3 7.2 8.3h.3v-3.1c1.7.2 2.9 1.3 3.4 3.1h2.4c-.6-2.1-2-3.3-3.1-3.8 1.1-.7 2.2-2 2.6-4.5h-2.2c-.5 2-1.5 3.1-2.7 3.2V7.6h-2.2v5.6c-1.2-.3-2.7-1.5-2.8-5.6H4.8Z" fill="currentColor"/>
      </svg>
    `
  },
  {
    id: 'max',
    label: 'MAX',
    href: 'https://max.ru/join/i59PEyNKJmmSL0b8F5FdDzcl1beU5gql3rFp7jzdIjk',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.4 3.6c-4 0-6.9 2.63-6.9 6.91v3.04c0 .59.11 1.15.31 1.67l1.09 2.85c.16.43.58.71 1.04.71.88 0 1.6-.72 1.6-1.6v-.27c.83.76 1.9 1.19 3.16 1.19 3.77 0 6.8-2.55 6.8-7.1 0-4.48-3.13-7.4-7.1-7.4Zm.14 3.18c2.22 0 3.83 1.58 3.83 4.05 0 2.52-1.54 4.11-3.75 4.11-2.22 0-3.83-1.57-3.83-4.05 0-2.52 1.53-4.11 3.75-4.11Z" fill="currentColor"/>
      </svg>
    `
  }
]

export const contactSection = {
  id: 'contacts',
  eyebrow: 'Комиссионный магазин',
  brand,
  description: 'Свяжитесь с нами или приезжайте в магазин для консультации и оценки техники.',
  locations,
  requisites,
  socials,
  copyright: '© 2026 Комиссионка PRO. Все права защищены.'
}
