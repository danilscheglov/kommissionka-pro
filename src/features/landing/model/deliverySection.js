export const deliveryPartners = [
  {
    name: 'Avito',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Avito%20logo.svg',
    className: 'logo-chip--wide'
  },
  {
    name: 'СДЭК',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/CDEK%20logo.svg',
    className: 'logo-chip--wide'
  },
  {
    name: '5Post',
    src: '/logos/5post.svg',
    className: 'logo-chip--wide'
  },
  {
    name: 'Яндекс.Доставка',
    src: '/logos/yandex-delivery.svg',
    className: 'logo-chip--wide'
  }
]

export const deliverySection = {
  id: 'delivery',
  title: 'Доставка',
  description: 'Отправляем товары по всей России через надёжные службы доставки.',
  highlight: 'Отправим заказ удобным для вас способом',
  note: 'Работаем с популярными службами доставки, чтобы вы могли быстро и безопасно получить технику в своём городе.',
  badge: `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M4 8H14V15H4V8Z" stroke="currentColor" stroke-width="2.1" />
      <path d="M14 10H17.5L20 12.5V15H14V10Z" stroke="currentColor" stroke-linejoin="round" stroke-width="2.1" />
      <circle cx="7.5" cy="17.5" r="1.8" stroke="currentColor" stroke-width="2.1" />
      <circle cx="16.5" cy="17.5" r="1.8" stroke="currentColor" stroke-width="2.1" />
    </svg>
  `,
  partners: deliveryPartners
}
