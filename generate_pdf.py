from weasyprint import HTML, CSS
import os

html_content = """
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @font-face {
    font-family: 'DM Sans';
    src: url('public/fonts/DMSans-VariableFont_opsz_wght.ttf') format('truetype');
    font-weight: 100 900;
    font-style: normal;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #1a1a1a;
    font-size: 11px;
    line-height: 1.5;
    background: #ffffff;
  }

  .page {
    width: 210mm;
    min-height: 297mm;
    padding: 14mm;
  }

  /* --- HEADER --- */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 14px;
    border-bottom: 1px solid #e5e4e0;
    margin-bottom: 20px;
  }
  .header-left { display: flex; align-items: center; gap: 10px; }
  .logo-text {
    font-size: 17px; font-weight: 700;
  }
  .logo-an {
    color: #0071e3;
    border-bottom: 2px solid #0071e3;
    padding-bottom: 1px;
  }
  .logo-rest { color: #1a1a1a; }
  .header-company { font-size: 17px; font-weight: 700; }
  .header-tagline { font-size: 11px; color: #6b7280; }
  .header-right { text-align: right; }
  .header-right .label { font-size: 11px; color: #6b7280; }
  .header-right .title { font-size: 12px; font-weight: 700; margin: 2px 0; }
  .header-right .url { font-size: 11px; color: #6b7280; }

  /* --- BADGE + TITLE --- */
  .badge {
    display: inline-block;
    background: #E1F5EE; color: #085041;
    font-size: 10px; padding: 2px 8px;
    border-radius: 20px;
  }
  h1 {
    font-size: 20px; font-weight: 700; color: #1a1a1a;
    margin-top: 8px; line-height: 1.35;
  }
  .subtitle {
    font-size: 12px; color: #6b7280;
    line-height: 1.7; margin-top: 6px; margin-bottom: 18px;
  }

  /* --- SECTION LABELS --- */
  .section-label {
    font-size: 10px; text-transform: uppercase;
    letter-spacing: 0.07em; color: #6b7280;
    margin-bottom: 6px; margin-top: 12px;
  }

  /* --- PAIN CARDS --- */
  .cards-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .card {
    background: #f9f8f6;
    border-radius: 8px;
    padding: 12px;
  }
  .card-title { font-size: 11px; font-weight: 600; margin-bottom: 3px; }
  .card-hint { font-size: 10px; color: #6b7280; line-height: 1.45; }

  /* --- SCENARIO --- */
  .scenario-box {
    border: 1px solid #e5e4e0;
    border-radius: 10px;
    padding: 16px;
  }
  .scenario-title { font-size: 13px; font-weight: 700; margin-bottom: 10px; }
  .step { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 6px; position: relative; }
  .step:last-child { margin-bottom: 0; }
  .step-num-wrap { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
  .step-num {
    width: 24px; height: 24px;
    background: #dbeafe; color: #004aad;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 10px; font-weight: 700;
    flex-shrink: 0;
  }
  .step-line { width: 2px; height: 12px; background: #dbeafe; margin-top: 2px; }
  .step:last-child .step-line { display: none; }
  .step-content { padding-top: 2px; }
  .step-label { font-size: 11px; font-weight: 600; }
  .step-desc { font-size: 10px; color: #6b7280; line-height: 1.4; }
  .step-tag {
    display: inline-block;
    background: #dbeafe; color: #004aad;
    font-size: 10px; border-radius: 20px;
    padding: 1px 7px; margin-top: 2px;
  }

  /* --- INCLUDES --- */
  .includes-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px 20px;
  }
  .include-item { display: flex; align-items: baseline; gap: 7px; font-size: 11px; }
  .include-dot {
    width: 6px; height: 6px;
    background: #0071e3;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* --- RESULTS --- */
  .results-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 8px;
  }
  .result-card {
    background: #f9f8f6;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
  }
  .result-value { font-size: 18px; font-weight: 700; color: #1a1a1a; }
  .result-label { font-size: 10px; color: #6b7280; margin-top: 2px; }

  /* --- PRICE --- */
  .price-box {
    border: 1.5px solid #0071e3;
    border-radius: 10px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }
  .price-left-title { font-size: 14px; font-weight: 700; }
  .price-left-desc { font-size: 11px; color: #6b7280; margin-top: 3px; }
  .price-right { text-align: right; }
  .price-value { font-size: 22px; font-weight: 700; }
  .price-terms { font-size: 11px; color: #6b7280; margin-top: 2px; }

  /* --- NEXT STEPS --- */
  .next-box {
    background: #f9f8f6;
    border-radius: 10px;
    padding: 12px 16px;
    margin-top: 12px;
  }
  .next-title { font-size: 13px; font-weight: 700; margin-bottom: 10px; }
  .next-step { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; }
  .next-step:last-child { margin-bottom: 0; }
  .next-num {
    width: 22px; height: 22px;
    background: #dbeafe; color: #004aad;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 10px; font-weight: 700;
    flex-shrink: 0;
  }
  .next-label { font-size: 11px; font-weight: 600; }
  .next-desc { font-size: 10px; color: #6b7280; }

  /* --- FOOTER --- */
  .footer {
    border-top: 1px solid #e5e4e0;
    padding-top: 10px;
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-left { display: flex; align-items: center; gap: 10px; }
  .footer-avatar {
    width: 36px; height: 36px;
    background: #dbeafe; color: #004aad;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 700;
    flex-shrink: 0;
  }
  .footer-name { font-size: 13px; font-weight: 700; }
  .footer-title { font-size: 11px; color: #6b7280; }
  .footer-right { text-align: right; }
  .footer-right .link { font-size: 12px; font-weight: 700; }
  .footer-right .link-desc { font-size: 11px; color: #6b7280; }
</style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <div class="header">
    <div class="header-left">
      <div>
        <div class="logo-text"><span class="logo-an">An</span><span class="logo-rest">agentica</span></div>
        <div class="header-tagline">Меньше рутины. Больше бизнеса.</div>
      </div>
    </div>
    <div class="header-right">
      <div class="label">Коммерческое предложение</div>
      <div class="title">AI-автоматизация для e-commerce</div>
      <div class="url">anagentica.ru</div>
    </div>
  </div>

  <!-- BADGE + TITLE -->
  <div class="badge">E-commerce / интернет-магазин</div>
  <h1>Ваши менеджеры обрабатывают заказы вручную —<br>пока конкуренты уже автоматизировали это</h1>
  <div class="subtitle">
    Автоматизируем обработку заказов, работу с клиентами и операционку магазина под ключ.<br>
    Через 3–6 недель система работает сама — менеджеры занимаются продажами, а не рутиной.
  </div>

  <!-- PAIN CARDS -->
  <div class="section-label">УЗНАЁТЕ СВОЙ МАГАЗИН?</div>
  <div class="cards-grid">
    <div class="card">
      <div class="card-title">Заказы копируются вручную между системами</div>
      <div class="card-hint">Сайт → таблица → CRM → склад — каждый раз руками</div>
    </div>
    <div class="card">
      <div class="card-title">Клиент не знает статус заказа</div>
      <div class="card-hint">Менеджер отвечает на «где мой заказ?» по 50 раз в день</div>
    </div>
    <div class="card">
      <div class="card-title">Брошенные корзины никто не догоняет</div>
      <div class="card-hint">До 70% потенциальных покупок теряется без возврата</div>
    </div>
    <div class="card">
      <div class="card-title">Возвраты и рекламации — хаос</div>
      <div class="card-hint">Каждый случай решается индивидуально, нет единого процесса</div>
    </div>
  </div>

  <!-- SCENARIO -->
  <div class="section-label">СЦЕНАРИЙ АВТОМАТИЗАЦИИ — ОБРАБОТКА ЗАКАЗОВ</div>
  <div class="scenario-box">
    <div class="scenario-title">Как работает система после внедрения</div>
    <div class="step">
      <div class="step-num-wrap"><div class="step-num">01</div><div class="step-line"></div></div>
      <div class="step-content">
        <div class="step-label">Заказ поступает с любого канала</div>
        <div class="step-desc">Сайт, маркетплейс, Telegram, WhatsApp — всё собирается автоматически</div>
        <span class="step-tag">Make / N8N</span>
      </div>
    </div>
    <div class="step">
      <div class="step-num-wrap"><div class="step-num">02</div><div class="step-line"></div></div>
      <div class="step-content">
        <div class="step-label">AI проверяет и обогащает данные</div>
        <div class="step-desc">Проверяет адрес, наличие товара, историю клиента, приоритизирует по сумме</div>
        <span class="step-tag">AI-скоринг</span>
      </div>
    </div>
    <div class="step">
      <div class="step-num-wrap"><div class="step-num">03</div><div class="step-line"></div></div>
      <div class="step-content">
        <div class="step-label">Заказ попадает в CRM с готовым резюме</div>
        <div class="step-desc">Менеджер видит всё без ручного ввода. 3 строки вместо 15 минут работы</div>
        <span class="step-tag">CRM-интеграция</span>
      </div>
    </div>
    <div class="step">
      <div class="step-num-wrap"><div class="step-num">04</div><div class="step-line"></div></div>
      <div class="step-content">
        <div class="step-label">Клиент получает автоматические уведомления</div>
        <div class="step-desc">Подтверждение → в сборке → передан → доставлен. Всё без менеджера</div>
        <span class="step-tag">Уведомления</span>
      </div>
    </div>
    <div class="step">
      <div class="step-num-wrap"><div class="step-num">05</div></div>
      <div class="step-content">
        <div class="step-label">После доставки — автоматический сбор отзыва</div>
        <div class="step-desc">AI отправляет запрос, обрабатывает ответ, передаёт негатив менеджеру</div>
        <span class="step-tag">Retention</span>
      </div>
    </div>
  </div>

  <!-- INCLUDES -->
  <div class="section-label">ЧТО ВХОДИТ В ПРОЕКТ</div>
  <div class="includes-grid">
    <div class="include-item"><div class="include-dot"></div><span>Аудит воронки заказов — где теряется время и деньги</span></div>
    <div class="include-item"><div class="include-dot"></div><span>Сборка всех каналов — сайт, маркетплейсы, мессенджеры</span></div>
    <div class="include-item"><div class="include-dot"></div><span>AI-скоринг и приоритизация — умная сортировка заказов</span></div>
    <div class="include-item"><div class="include-dot"></div><span>Интеграция с CRM и складом — данные попадают сами</span></div>
    <div class="include-item"><div class="include-dot"></div><span>Автоуведомления клиентам — статусы без менеджера</span></div>
    <div class="include-item"><div class="include-dot"></div><span>30 дней поддержки — бесплатно после запуска</span></div>
  </div>

  <!-- RESULTS -->
  <div class="section-label">ТИПИЧНЫЙ РЕЗУЛЬТАТ ДЛЯ ИНТЕРНЕТ-МАГАЗИНА</div>
  <div class="results-grid">
    <div class="result-card">
      <div class="result-value">−68%</div>
      <div class="result-label">время обработки заказа</div>
    </div>
    <div class="result-card">
      <div class="result-value">+40%</div>
      <div class="result-label">конверсия в повторную покупку</div>
    </div>
    <div class="result-card">
      <div class="result-value">×3</div>
      <div class="result-label">заказов на 1 менеджера</div>
    </div>
    <div class="result-card">
      <div class="result-value">−80%</div>
      <div class="result-label">вопросов «где мой заказ?»</div>
    </div>
  </div>

  <!-- PRICE -->
  <div class="price-box">
    <div class="price-left">
      <div class="price-left-title">AI-автоматизация обработки заказов — под ключ</div>
      <div class="price-left-desc">Аудит · Разработка · Интеграция с CRM/складом · Уведомления · Обучение · Поддержка 30 дней</div>
    </div>
    <div class="price-right">
      <div class="price-value">от 150 000 ₽</div>
      <div class="price-terms">3–6 недель · фиксированный бюджет</div>
    </div>
  </div>

  <!-- NEXT STEPS -->
  <div class="next-box">
    <div class="next-title">Как начать</div>
    <div class="next-step">
      <div class="next-num">1</div>
      <div>
        <div class="next-label">Бесплатный разбор — 30 минут.</div>
        <div class="next-desc">Смотрим на ваш процесс заказов, сразу показываем где можно автоматизировать.</div>
      </div>
    </div>
    <div class="next-step">
      <div class="next-num">2</div>
      <div>
        <div class="next-label">Считаем конкретную экономию.</div>
        <div class="next-desc">Сколько часов в неделю освободится и во что это конвертируется в деньгах.</div>
      </div>
    </div>
    <div class="next-step">
      <div class="next-num">3</div>
      <div>
        <div class="next-label">Запускаем.</div>
        <div class="next-desc">Через 3–6 недель система работает — менеджеры занимаются продажами.</div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <div class="footer">
    <div class="footer-left">
      <div class="footer-avatar">АХ</div>
      <div>
        <div class="footer-name">Анас Хазиев</div>
        <div class="footer-title">Основатель Anagentica · 15+ лет в ИТ и AI</div>
      </div>
    </div>
    <div class="footer-right">
      <div class="link">@velocity2025</div>
      <div class="link-desc">Telegram для связи</div>
      <div class="link" style="margin-top: 4px;">anagentica.ru</div>
    </div>
  </div>

</div>
</body>
</html>
"""

HTML(string=html_content).write_pdf(
    'anagentica_kp_ecommerce.pdf',
    stylesheets=[CSS(string='@page { size: A4; margin: 0; }')]
)

file_size = os.path.getsize('anagentica_kp_ecommerce.pdf')
print(f"PDF created: anagentica_kp_ecommerce.pdf")
print(f"File size: {file_size:,} bytes ({file_size/1024:.1f} KB)")
