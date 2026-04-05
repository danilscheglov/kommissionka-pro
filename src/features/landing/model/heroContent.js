import { brand } from '../../../shared/config/brand'
import { renderLucideIcon } from '../../../shared/ui/lucideIcon'
import {
  BadgeRussianRuble,
  MessagesSquare,
  Phone,
  Send,
  ShieldCheck,
  ShoppingBag
} from 'lucide'

const services = [
  {
    title: 'Скупка',
    description:
      'Принимаем технику быстро, оцениваем честно и выплачиваем деньги без затянутых согласований.',
    icon: renderLucideIcon(BadgeRussianRuble, { className: 'service-card__icon-svg' })
  },
  {
    title: 'Продажа',
    description:
      'Подбираем проверенные товары с гарантией работоспособности, скидками и удобной покупкой.',
    icon: renderLucideIcon(ShoppingBag, { className: 'service-card__icon-svg' })
  },
  {
    title: 'Комиссия',
    description: 'Принимаем технику на комиссию в разумные сроки, на прозрачных условиях.',
    icon: renderLucideIcon(ShieldCheck, { className: 'service-card__icon-svg' })
  }
]

const actions = [
  {
    id: 'max',
    label: 'НАПИСАТЬ НАМ В MAX',
    href: 'https://max.ru/u/f9LHodD0cOJvxVTzsrpfP-5st7us0sIF7TUihoI59gWGsE2c-ho-qBb1-i0',
    icon: renderLucideIcon(MessagesSquare, { className: 'hero-action__icon-svg' })
  },
  {
    id: 'telegram',
    label: 'НАПИСАТЬ НАМ В TELEGRAM',
    href: 'https://t.me/KomissionkaPRO3',
    icon: renderLucideIcon(Send, { className: 'hero-action__icon-svg' })
  },
  {
    id: 'phone',
    label: 'ПОЗВОНИТЬ',
    href: 'tel:+79997889919',
    meta: '+7 (999) 788-99-19',
    icon: renderLucideIcon(Phone, { className: 'hero-action__icon-svg' })
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
