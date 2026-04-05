import { brand } from '../../../shared/config/brand'

const services = [
  {
    title: 'Скупка',
    description:
      'Принимаем технику быстро, оцениваем честно и выплачиваем деньги без затянутых согласований.',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true" class="h-8 w-8" fill="none">
        <path d="M12 5.6V16.4" stroke="currentColor" stroke-linecap="round" stroke-width="2.1"/>
        <path d="M15.5 7.2C15.5 5.95 13.93 4.95 12 4.95C10.07 4.95 8.5 5.95 8.5 7.2C8.5 8.45 9.82 9.27 12 9.85C14.18 10.43 15.5 11.25 15.5 12.5C15.5 13.75 13.93 14.75 12 14.75C10.07 14.75 8.5 13.75 8.5 12.5" stroke="currentColor" stroke-linecap="round" stroke-width="2.1"/>
      </svg>
    `
  },
  {
    title: 'Продажа',
    description:
      'Подбираем проверенные товары с гарантией работоспособности, скидками и удобной покупкой.',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true" class="h-8 w-8" fill="none">
        <path d="M6 8.5H18L16.8 16.25A2 2 0 0 1 14.82 18H9.18A2 2 0 0 1 7.2 16.25L6 8.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="2.1"/>
        <path d="M8.5 8.5V7.75A3.5 3.5 0 0 1 12 4.25V4.25A3.5 3.5 0 0 1 15.5 7.75V8.5" stroke="currentColor" stroke-linecap="round" stroke-width="2.1"/>
        <path d="M10 11.75H14" stroke="currentColor" stroke-linecap="round" stroke-width="2.1"/>
      </svg>
    `
  },
  {
    title: 'Комиссия',
    description: 'Принимаем технику на комиссию в разумные сроки, на прозрачных условиях.',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true" class="h-8 w-8" fill="none">
        <path d="M12 3.75 18 6.25V11.25C18 15.12 15.54 18.49 12 19.75C8.46 18.49 6 15.12 6 11.25V6.25L12 3.75Z" stroke="currentColor" stroke-linejoin="round" stroke-width="2.1"/>
        <path d="M9.75 11.75 11.25 13.25 14.5 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1"/>
      </svg>
    `
  }
]

const actions = [
  {
    id: 'max',
    label: 'НАПИСАТЬ НАМ В MAX',
    href: 'https://max.ru/u/f9LHodD0cOJvxVTzsrpfP-5st7us0sIF7TUihoI59gWGsE2c-ho-qBb1-i0',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.4 3.6c-4 0-6.9 2.63-6.9 6.91v3.04c0 .59.11 1.15.31 1.67l1.09 2.85c.16.43.58.71 1.04.71.88 0 1.6-.72 1.6-1.6v-.27c.83.76 1.9 1.19 3.16 1.19 3.77 0 6.8-2.55 6.8-7.1 0-4.48-3.13-7.4-7.1-7.4Zm.14 3.18c2.22 0 3.83 1.58 3.83 4.05 0 2.52-1.54 4.11-3.75 4.11-2.22 0-3.83-1.57-3.83-4.05 0-2.52 1.53-4.11 3.75-4.11Z" fill="currentColor"/>
      </svg>
    `
  },
  {
    id: 'telegram',
    label: 'НАПИСАТЬ НАМ В TELEGRAM',
    href: 'https://t.me/KomissionkaPRO3',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.7 4.2 3.9 10.7c-1.1.4-1.1 1 0 1.3l4.3 1.4 1.7 5.1c.2.6.4.8.8.8.3 0 .5-.1.8-.4l2.4-2.3 4.9 3.6c.9.5 1.5.3 1.8-.9L22.9 5c.3-1.3-.5-1.9-2.2-.8Z" fill="currentColor"/>
      </svg>
    `
  },
  {
    id: 'phone',
    label: 'ПОЗВОНИТЬ',
    href: 'tel:+79997889919',
    meta: '+7 (999) 788-99-19',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path d="M6.8 4.75h2.04c.39 0 .73.27.82.64l.64 2.74a.84.84 0 0 1-.24.82l-1.3 1.27a13.58 13.58 0 0 0 5.04 5.04l1.27-1.3a.84.84 0 0 1 .82-.24l2.74.64c.37.09.64.43.64.82v2.04a1 1 0 0 1-1 1A15.95 15.95 0 0 1 5.8 5.75a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9"/>
      </svg>
    `
  }
]

export const heroContent = {
  eyebrow: 'Комиссионный магазин',
  brand,
  description:
    'Скупка / Продажа цифровой и бытовой техники. Принимаем технику на комиссию в разумные сроки, на прозрачных условиях.',
  services,
  actions
}
