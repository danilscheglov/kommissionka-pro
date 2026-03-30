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
    title: 'Залог',
    description:
      'Оформляем займ под залог техники в короткие сроки, с понятными условиями и прозрачной комиссией.',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true" class="h-8 w-8" fill="none">
        <path d="M12 3.75 18 6.25V11.25C18 15.12 15.54 18.49 12 19.75C8.46 18.49 6 15.12 6 11.25V6.25L12 3.75Z" stroke="currentColor" stroke-linejoin="round" stroke-width="2.1"/>
        <path d="M9.75 11.75 11.25 13.25 14.5 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1"/>
      </svg>
    `
  }
]

export const heroContent = {
  eyebrow: 'Комиссионный магазин',
  brand,
  description:
    'Покупка, скупка и залог техники в одном месте. Быстро, удобно и по понятным условиям.',
  services
}
