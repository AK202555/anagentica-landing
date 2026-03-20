export type Locale = 'ru' | 'en';

export const translations = {
  // ========== NAVBAR ==========
  nav: {
    services: { ru: 'Услуги', en: 'Services' },
    approach: { ru: 'Как работаем', en: 'How we work' },
    cases: { ru: 'Кейсы', en: 'Cases' },
    about: { ru: 'О нас', en: 'About' },
    cta: { ru: 'Получить разбор', en: 'Get a free audit' },
    themeToggle: { ru: 'Переключить тему', en: 'Toggle theme' },
    menu: { ru: 'Меню', en: 'Menu' },
  },

  // ========== HERO ==========
  hero: {
    title1: { ru: 'Меньше рутины.', en: 'Less routine.' },
    title2: { ru: 'Больше бизнеса.', en: 'More business.' },
    subtitle: {
      ru: 'AI-агентство для тех, кто хочет больше зарабатывать и меньше тратить время на операционку. Автоматизируем процессы, строим AI-агентов и внедряем искусственный интеллект в реальную работу вашей команды.',
      en: 'AI agency for those who want to earn more and spend less time on operations. We automate processes, build AI agents, and integrate artificial intelligence into your team\'s real workflow.',
    },
    ctaPrimary: { ru: 'Получить бесплатный разбор', en: 'Get a free audit' },
    ctaSecondary: { ru: 'Смотреть примеры решений', en: 'See case studies' },
    stats: [
      { value: { ru: '27 лет', en: '27 years' }, label: { ru: 'опыт в ИТ', en: 'IT experience' } },
      { value: { ru: '−60%', en: '−60%' }, label: { ru: 'рутинных операций', en: 'routine operations' } },
      { value: { ru: '2 нед', en: '2 weeks' }, label: { ru: 'до первого результата', en: 'to first results' } },
    ],
  },

  // ========== PAIN POINTS ==========
  pains: {
    title: { ru: 'Звучит знакомо?', en: 'Sound familiar?' },
    subtitle: { ru: 'Узнаёте себя?', en: 'Recognize yourself?' },
    items: [
      {
        title: { ru: 'Менеджеры тратят полдня на рутину вместо продаж', en: 'Managers spend half the day on routine instead of sales' },
        desc: { ru: 'Ввод данных, копирование, ответы на типовые вопросы', en: 'Data entry, copying, answering typical questions' },
      },
      {
        title: { ru: 'Заявки теряются или обрабатываются слишком медленно', en: 'Leads get lost or are processed too slowly' },
        desc: { ru: 'Клиент ждёт — и уходит к конкуренту', en: 'The client waits — and goes to a competitor' },
      },
      {
        title: { ru: 'Хочется внедрить AI, но непонятно с чего начать', en: 'Want to implement AI but don\'t know where to start' },
        desc: { ru: 'Инструментов много — что реально работает?', en: 'Many tools — which ones actually work?' },
      },
      {
        title: { ru: 'Нет времени заниматься стратегией — всё время в операционке', en: 'No time for strategy — always stuck in operations' },
        desc: { ru: 'Бизнес работает на вас, а не вы — на бизнес', en: 'The business runs you, not the other way around' },
      },
      {
        title: { ru: 'Команда маленькая, а задач как у корпорации', en: 'Small team, but tasks like a corporation' },
        desc: { ru: 'Стартапы, частные практики, небольшие команды', en: 'Startups, private practices, small teams' },
      },
    ],
    footer: {
      ru: 'Мы решаем именно это — без лишних затрат и без программиста в штате.',
      en: 'We solve exactly this — without extra costs and without an in-house developer.',
    },
  },

  // ========== APPROACH ==========
  approach: {
    title: { ru: 'AI, который реально работает в\u00a0вашем деле', en: 'AI that actually works for\u00a0your business' },
    subtitle: {
      ru: 'Мы не продаём технологию ради технологии. Берём конкретную задачу вашего бизнеса и решаем её с помощью AI — измеримо, понятно, без лишнего.',
      en: 'We don\'t sell technology for technology\'s sake. We take a specific business problem and solve it with AI — measurably, clearly, without fluff.',
    },
    steps: [
      {
        num: '01',
        title: { ru: 'Разбираемся в вашем бизнесе', en: 'We learn your business' },
        desc: { ru: 'Не навязываем готовые решения. Сначала разбираемся, где реально теряются деньги и время.', en: 'We don\'t push ready-made solutions. First, we figure out where money and time are really being lost.' },
      },
      {
        num: '02',
        title: { ru: 'Строим под вас, а не по шаблону', en: 'We build for you, not from a template' },
        desc: { ru: 'Каждое решение — под вашу команду, ваши инструменты и ваши процессы.', en: 'Every solution is tailored to your team, your tools, and your processes.' },
      },
      {
        num: '03',
        title: { ru: 'Сдаём работающую систему', en: 'We deliver a working system' },
        desc: { ru: 'После внедрения ваша команда управляет всем сама. Без зависимости от нас и без программиста.', en: 'After implementation, your team manages everything on their own. No vendor lock-in, no developer needed.' },
      },
    ],
  },

  // ========== SERVICES ==========
  services: {
    title: { ru: 'Что мы делаем', en: 'What we do' },
    items: [
      {
        title: { ru: 'AI-аудит и стратегия', en: 'AI audit & strategy' },
        subtitle: { ru: 'Найдём, где AI сэкономит вам деньги прямо сейчас', en: 'Find where AI will save you money right now' },
        items: {
          ru: ['Анализ процессов', 'Топ-3 точки автоматизации', 'Дорожная карта', 'Расчёт экономии'],
          en: ['Process analysis', 'Top 3 automation points', 'Roadmap', 'Savings calculation'],
        },
        price: { ru: 'от 50 000 ₽ · 2 недели', en: 'from $600 · 2 weeks' },
      },
      {
        title: { ru: 'AI-автоматизация процессов', en: 'AI process automation' },
        subtitle: { ru: 'Берём рутинный процесс и делаем его автоматическим', en: 'We take a routine process and make it automatic' },
        items: {
          ru: ['Проектирование', 'Разработка', 'Интеграция с CRM/1С', 'Обучение команды'],
          en: ['Design', 'Development', 'CRM/ERP integration', 'Team training'],
        },
        price: { ru: 'от 150 000 ₽ · 3–6 недель', en: 'from $1,800 · 3–6 weeks' },
      },
      {
        title: { ru: 'Разработка AI-агентов', en: 'AI agent development' },
        subtitle: { ru: 'AI-сотрудник, который работает 24/7 без выходных', en: 'AI employee that works 24/7, no days off' },
        items: {
          ru: ['Ассистент в Telegram/сайте', 'Квалификация лидов', 'База знаний компании'],
          en: ['Telegram/website assistant', 'Lead qualification', 'Company knowledge base'],
        },
        price: { ru: 'от 200 000 ₽ · 4–8 недель', en: 'from $2,400 · 4–8 weeks' },
      },
      {
        title: { ru: 'AI-обучение команды', en: 'AI team training' },
        subtitle: { ru: 'Команда начинает экономить 2–5 часов в день уже с первого занятия', en: 'Your team starts saving 2–5 hours a day from the very first session' },
        items: {
          ru: ['Воркшоп под ваши задачи', 'Промпты, инструменты', 'Стандарты работы'],
          en: ['Workshop tailored to your tasks', 'Prompts, tools', 'Work standards'],
        },
        price: { ru: 'от 80 000 ₽ · 1–2 дня', en: 'from $950 · 1–2 days' },
      },
    ],
  },

  // ========== METHODOLOGY ==========
  methodology: {
    title: { ru: 'От заявки до результата — прозрачно', en: 'From request to result — transparent' },
    steps: [
      { num: 1, title: { ru: 'Бесплатный разбор', en: 'Free audit' }, time: { ru: '30 минут', en: '30 minutes' } },
      { num: 2, title: { ru: 'Аудит и план', en: 'Audit & plan' }, time: { ru: '1–2 недели', en: '1–2 weeks' } },
      { num: 3, title: { ru: 'Разработка и интеграция', en: 'Development & integration' }, time: { ru: '3–8 недель', en: '3–8 weeks' } },
      { num: 4, title: { ru: 'Запуск и обучение', en: 'Launch & training' }, time: { ru: '', en: '' } },
      { num: 5, title: { ru: 'Поддержка и развитие', en: 'Support & growth' }, time: { ru: '', en: '' } },
    ],
  },

  // ========== CASES ==========
  cases: {
    title: { ru: 'Что уже умеет делать AI для бизнеса', en: 'What AI can already do for business' },
    subtitle: { ru: 'Примеры решений', en: 'Case studies' },
    items: [
      {
        badge: { ru: 'Демо · E-commerce', en: 'Demo · E-commerce' },
        title: { ru: 'AI-обработка входящих лидов', en: 'AI-powered lead processing' },
        desc: {
          ru: 'Автоматическая квалификация и распределение заявок с сайта, маркетплейсов и мессенджеров. AI анализирует запрос, определяет приоритет и направляет нужному менеджеру.',
          en: 'Automatic qualification and routing of inquiries from websites, marketplaces, and messengers. AI analyzes the request, determines priority, and routes to the right manager.',
        },
        metrics: [
          { value: '−68%', label: { ru: 'время обработки', en: 'processing time' } },
          { value: '+40%', label: { ru: 'конверсия', en: 'conversion' } },
        ],
      },
      {
        badge: { ru: 'Демо · Услуги', en: 'Demo · Services' },
        title: { ru: 'AI-ассистент для продаж и поддержки', en: 'AI sales & support assistant' },
        desc: {
          ru: 'Telegram-бот с базой знаний компании, который отвечает клиентам 24/7, квалифицирует заявки и передаёт горячие лиды менеджерам.',
          en: 'Telegram bot with company knowledge base that answers clients 24/7, qualifies leads, and passes hot prospects to managers.',
        },
        metrics: [
          { value: '−55%', label: { ru: 'нагрузка на команду', en: 'team workload' } },
          { value: '24/7', label: { ru: 'без менеджера', en: 'without a manager' } },
        ],
      },
      {
        badge: { ru: 'Демо · Производство', en: 'Demo · Manufacturing' },
        title: { ru: 'Автоматизация документооборота', en: 'Document workflow automation' },
        desc: {
          ru: 'AI-система обработки входящих документов: распознавание, классификация, извлечение данных и автоматическое внесение в учётную систему.',
          en: 'AI-powered document processing: recognition, classification, data extraction, and automatic entry into accounting systems.',
        },
        metrics: [
          { value: '−70%', label: { ru: 'ручной работы', en: 'manual work' } },
          { value: '×2', label: { ru: 'скорость', en: 'speed' } },
        ],
      },
    ],
  },

  // ========== USP ==========
  usp: {
    title: { ru: 'Чем мы отличаемся', en: 'Why choose us' },
    items: [
      {
        title: { ru: 'Результат, а не технология', en: 'Results, not technology' },
        desc: { ru: 'Каждый проект считается в деньгах и часах: сколько сэкономили, насколько выросла выручка.', en: 'Every project is measured in money and hours: how much was saved, how much revenue grew.' },
      },
      {
        title: { ru: 'Работает без программиста', en: 'Works without a developer' },
        desc: { ru: 'После сдачи проекта ваша команда управляет системой сама. Никакой зависимости от подрядчика.', en: 'After project delivery, your team manages the system on their own. No vendor dependency.' },
      },
      {
        title: { ru: 'Под ваш масштаб и бюджет', en: 'Fits your scale and budget' },
        desc: { ru: 'Без enterprise-контрактов и раздутых смет.', en: 'No enterprise contracts or inflated estimates.' },
      },
      {
        title: { ru: 'Полный цикл', en: 'Full cycle' },
        desc: { ru: 'От стратегии до запуска и обучения — одна точка входа.', en: 'From strategy to launch and training — one point of entry.' },
      },
    ],
  },

  // ========== TARGET AUDIENCE ==========
  audience: {
    title: { ru: 'Работаем с разными типами бизнеса', en: 'We work with all types of businesses' },
    items: [
      {
        title: { ru: 'Малый и средний бизнес', en: 'Small & medium business' },
        desc: { ru: 'Автоматизация продаж, обработки заявок и внутренних процессов — без раздутых бюджетов.', en: 'Sales automation, lead processing, and internal workflows — without inflated budgets.' },
      },
      {
        title: { ru: 'Частные практики', en: 'Private practices' },
        desc: { ru: 'Врачи, юристы, риелторы — AI-ассистенты для записи, консультаций и работы с клиентами.', en: 'Doctors, lawyers, realtors — AI assistants for scheduling, consultations, and client management.' },
      },
      {
        title: { ru: 'Стартапы', en: 'Startups' },
        desc: { ru: 'Масштабирование без найма: AI берёт на себя рутину, пока команда фокусируется на продукте.', en: 'Scale without hiring: AI handles the routine while your team focuses on the product.' },
      },
    ],
    footer: {
      ru: 'Если не уверены, подходите ли вы — просто напишите. Разберём за 15 минут.',
      en: 'Not sure if we\'re a fit? Just reach out. We\'ll figure it out in 15 minutes.',
    },
  },

  // ========== ABOUT FOUNDER ==========
  about: {
    title: { ru: 'Привет, я Анас — основатель Anagentica', en: 'Hi, I\'m Anas — founder of Anagentica' },
    subtitle: {
      ru: '15+ лет в ИТ. Последние годы — на стыке бизнеса и технологий в крупнейших международных компаниях.',
      en: '15+ years in IT. Recent years — at the intersection of business and technology in major international companies.',
    },
    stats: [
      { value: { ru: '27 лет', en: '27 years' }, label: { ru: 'опыт', en: 'experience' } },
      { value: { ru: '100+ млн ₽', en: '$1M+' }, label: { ru: 'подтверждённая экономия', en: 'verified savings' } },
      { value: '+46%', label: { ru: 'рост успешности проектов', en: 'project success growth' } },
      { value: 'NPS 90%+', label: { ru: 'после внедрения AI', en: 'after AI implementation' } },
    ],
    bio: {
      ru: [
        'Я прошёл путь от инженера до руководителя цифровой трансформации в международных корпорациях. Видел изнутри, как компании теряют миллионы на неэффективных процессах — и как AI может это изменить за недели, а не годы.',
        'Сегодня я помогаю малому и среднему бизнесу получить доступ к тем же AI-решениям, которые используют корпорации — но без корпоративных бюджетов и сроков.',
      ],
      en: [
        'I went from engineer to digital transformation leader at international corporations. I\'ve seen firsthand how companies lose millions on inefficient processes — and how AI can change that in weeks, not years.',
        'Today I help small and medium businesses access the same AI solutions that corporations use — but without corporate budgets and timelines.',
      ],
    },
    experienceLabel: { ru: 'Опыт работы', en: 'Experience' },
    achievementsLabel: { ru: 'Достижения', en: 'Achievements' },
    achievements: {
      ru: [
        'Построил систему AI-автоматизации, сэкономившую 100+ млн ₽ в операционных расходах',
        'Повысил успешность проектов на 46% через внедрение AI-аналитики',
        'Запустил цифровую трансформацию в компаниях с 5 000+ сотрудников',
        'Обучил 500+ специалистов работе с AI-инструментами',
        'Внедрил AI-ассистентов, заменивших ручную обработку 10 000+ документов в месяц',
      ],
      en: [
        'Built an AI automation system that saved $1M+ in operational costs',
        'Increased project success rate by 46% through AI analytics implementation',
        'Launched digital transformation at companies with 5,000+ employees',
        'Trained 500+ specialists in AI tools',
        'Deployed AI assistants that replaced manual processing of 10,000+ documents per month',
      ],
    },
    skillsLabel: { ru: 'Навыки', en: 'Skills' },
    skills: {
      ru: ['AI/LLM', 'Автоматизация процессов', 'CRM/ERP', 'Low-code (N8N, Mendix)', 'Digital transformation'],
      en: ['AI/LLM', 'Process automation', 'CRM/ERP', 'Low-code (N8N, Mendix)', 'Digital transformation'],
    },
  },

  // ========== CTA ==========
  cta: {
    title: { ru: 'Разберём вашу задачу бесплатно', en: 'We\'ll analyze your challenge for free' },
    subtitle: {
      ru: '30 минут — и вы уйдёте с конкретным пониманием, что и как можно автоматизировать. Без давления и без обязательств.',
      en: '30 minutes — and you\'ll leave with a clear understanding of what and how can be automated. No pressure, no obligations.',
    },
    thankYou: { ru: 'Спасибо! Мы свяжемся с вами в ближайшее время.', en: 'Thank you! We\'ll get back to you shortly.' },
    nameLabel: { ru: 'Имя', en: 'Name' },
    namePlaceholder: { ru: 'Как вас зовут?', en: 'What\'s your name?' },
    contactLabel: { ru: 'Телефон или Telegram', en: 'Phone or Telegram' },
    contactPlaceholder: { ru: '+7 999 123-45-67 или @username', en: '+1 555 123-4567 or @username' },
    taskLabel: { ru: 'Опишите задачу', en: 'Describe your task' },
    taskPlaceholder: { ru: 'Что хотите автоматизировать или улучшить?', en: 'What do you want to automate or improve?' },
    submit: { ru: 'Записаться на разбор', en: 'Book a free audit' },
    telegram: { ru: 'Или напишите напрямую в', en: 'Or message us directly on' },
    consent: {
      ru: 'Я даю согласие на обработку моих персональных данных в соответствии с',
      en: 'I consent to the processing of my personal data in accordance with the',
    },
    consentLink: {
      ru: 'Политикой конфиденциальности',
      en: 'Privacy Policy',
    },
    consentRequired: {
      ru: 'Необходимо дать согласие на обработку персональных данных',
      en: 'You must consent to personal data processing',
    },
  },

  // ========== COOKIE CONSENT ==========
  cookie: {
    text: {
      ru: 'Мы используем файлы cookie для улучшения работы сайта. Продолжая использование сайта, вы соглашаетесь с',
      en: 'We use cookies to improve our website. By continuing to use the site, you agree to our',
    },
    policyLink: {
      ru: 'Политикой конфиденциальности',
      en: 'Privacy Policy',
    },
    accept: { ru: 'Принять', en: 'Accept' },
    decline: { ru: 'Отклонить', en: 'Decline' },
  },

  // ========== FOOTER ==========
  footer: {
    tagline: { ru: 'Меньше рутины. Больше бизнеса.', en: 'Less routine. More business.' },
    links: {
      services: { ru: 'Услуги', en: 'Services' },
      approach: { ru: 'Как работаем', en: 'How we work' },
      cases: { ru: 'Кейсы', en: 'Cases' },
      about: { ru: 'О нас', en: 'About' },
      contact: { ru: 'Контакты', en: 'Contact' },
    },
    legal: {
      privacy: { ru: 'Политика конфиденциальности', en: 'Privacy Policy' },
      terms: { ru: 'Пользовательское соглашение', en: 'Terms of Use' },
      offer: { ru: 'Публичная оферта', en: 'Public Offer' },
    },
    companyInfo: {
      label: { ru: 'Реквизиты', en: 'Company details' },
      name: 'ИП Хазиев Анас Фатихович',
      inn: { ru: 'ИНН: 501905834304', en: 'TIN: 501905834304' },
      ogrnip: { ru: 'ОГРНИП: 325774600419939', en: 'PSRNIE: 325774600419939' },
      email: 'tornad2020@yandex.ru',
      telegram: '@velocity2025',
    },
  },

  // ========== LEGAL PAGES ==========
  legal: {
    backToHome: { ru: '\u2190 На главную', en: '\u2190 Back to home' },
    lastUpdated: { ru: 'Последнее обновление', en: 'Last updated' },
  },
} as const;

export type Translations = typeof translations;
