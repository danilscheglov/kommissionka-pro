export const advantages = [
  {
    id: 'purchase',
    title: 'Скупка',
    description: 'Быстро оцениваем технику, согласовываем цену и сразу оформляем выкуп.',
    highlight: 'Оценим технику и предложим цену за несколько минут',
    note: 'Принимаем смартфоны, ноутбуки, электронику и другую технику с быстрой проверкой и понятной выплатой.',
    badge: `
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke="currentColor" stroke-width="2.1" />
        <path d="M10 5.5H14" stroke="currentColor" stroke-linecap="round" stroke-width="2.1" />
        <circle cx="12" cy="18" r="1.1" fill="currentColor" />
      </svg>
    `,
    items: [
      {
        title: 'Высокая оценка',
        description:
          'Сразу называем понятную цену, ориентируясь на состояние, модель и актуальный рынок.'
      },
      {
        title: 'Быстрая консультация',
        description:
          'Подскажем по оценке, условиям и технике без долгого ожидания и лишних сложностей.'
      },
      {
        title: 'Онлайн-оценка за 5 минут',
        description:
          'Достаточно прислать фото и описание, чтобы быстро узнать ориентировочную сумму.'
      }
    ]
  },
  {
    id: 'sale',
    title: 'Продажа',
    description: 'Проверенная техника, понятные условия покупки и выгодные предложения.',
    highlight: 'Подберём технику под ваши задачи и бюджет',
    note: 'В наличии проверенные устройства с понятными условиями покупки, рассрочкой и выгодными предложениями.',
    badge: `
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path d="M4.5 8.75H19.5V15.5C19.5 17.43 17.93 19 16 19H8C6.07 19 4.5 17.43 4.5 15.5V8.75Z" stroke="currentColor" stroke-width="2.1" />
        <path d="M8 5.75H16" stroke="currentColor" stroke-linecap="round" stroke-width="2.1" />
        <path d="M7.5 19V20.25M16.5 19V20.25" stroke="currentColor" stroke-linecap="round" stroke-width="2.1" />
      </svg>
    `,
    items: [
      {
        title: 'Рассрочка',
        description: 'Оформляем покупку на удобных условиях, чтобы не откладывать нужную технику.'
      },
      {
        title: 'Трейд-ин',
        description: 'Принимаем вашу технику в зачёт, чтобы обновление было проще и выгоднее.'
      },
      {
        title: 'Скидки',
        description: 'Подбираем лучшие предложения и помогаем купить технику по выгодной цене.'
      }
    ]
  },
  {
    id: 'pawn',
    title: 'Залог',
    description: 'Выдаём деньги под залог техники быстро, прозрачно и без лишних сложностей.',
    highlight: 'Деньги под залог техники без долгого ожидания',
    note: 'Быстро оформляем займ, заранее озвучиваем условия и помогаем получить нужную сумму без лишней бюрократии.',
    badge: `
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path d="M8.5 10.5 14 5A3.18 3.18 0 0 1 18.5 9.5L13 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1" />
        <path d="M15.5 13.5 10 19A3.18 3.18 0 0 1 5.5 14.5L11 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1" />
        <path d="M9 12H15" stroke="currentColor" stroke-linecap="round" stroke-width="2.1" />
      </svg>
    `,
    items: [
      {
        title: 'Высокая оценка',
        description:
          'Стараемся предложить максимальную сумму, исходя из состояния и модели техники.'
      },
      {
        title: 'Низкая комиссия',
        description: 'Условия озвучиваем заранее, без скрытых платежей и неожиданных списаний.'
      },
      {
        title: 'Моментальная выплата',
        description: 'После оформления деньги можно получить сразу, без долгого ожидания.'
      }
    ]
  }
]
