'use client';

import LegalLayout from '../components/LegalLayout';
import { useLocale } from '../i18n/LocaleContext';

export default function TermsPage() {
  const { locale } = useLocale();

  if (locale === 'en') {
    return (
      <LegalLayout title="Terms of Use">
        <h2>1. General Provisions</h2>
        <p>
          These Terms of Use (hereinafter — the &quot;Agreement&quot;) govern the use of the website anagentica.ru
          (hereinafter — the &quot;Website&quot;) operated by Individual Entrepreneur Khaziev Anas Fatikhovich
          (TIN: 501905834304, PSRNIE: 325774600419939), hereinafter — the &quot;Operator&quot;.
        </p>
        <p>
          By accessing and using the Website, you accept these Terms in full. If you disagree with any provision,
          please do not use the Website.
        </p>

        <h2>2. Website Description</h2>
        <p>
          The Website provides information about the Operator&apos;s AI automation and consulting services,
          including descriptions of services, case studies, and contact information. The Website also provides
          a contact form for submitting consultation requests.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on the Website — including text, graphics, logos, design elements, and software — is the
          intellectual property of the Operator and is protected by applicable laws. Reproduction, distribution,
          or modification of any content without prior written consent is prohibited.
        </p>

        <h2>4. User Obligations</h2>
        <p>When using the Website, you agree to:</p>
        <ul>
          <li>Provide accurate and truthful information in contact forms</li>
          <li>Not use the Website for unlawful purposes</li>
          <li>Not attempt to gain unauthorized access to the Website&apos;s systems</li>
          <li>Not interfere with the Website&apos;s normal operation</li>
        </ul>

        <h2>5. Limitation of Liability</h2>
        <p>
          The Website and its content are provided &quot;as is&quot;. The Operator does not guarantee uninterrupted
          or error-free operation of the Website. The Operator shall not be liable for any direct or indirect
          damages arising from the use of the Website.
        </p>
        <p>
          The information published on the Website is for informational purposes only and does not constitute
          a public offer as defined by Article 437 of the Civil Code of the Russian Federation, unless
          explicitly stated otherwise.
        </p>

        <h2>6. External Links</h2>
        <p>
          The Website may contain links to third-party websites. The Operator is not responsible for the content,
          privacy policies, or practices of external websites.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          The Operator reserves the right to modify these Terms at any time. The current version is always
          available at <a href="/terms">anagentica.ru/terms</a>. Continued use of the Website after changes
          constitutes acceptance of the updated Terms.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the Russian Federation. Any disputes shall be resolved
          in accordance with the legislation of the Russian Federation.
        </p>

        <h2>9. Contact Information</h2>
        <p>
          Individual Entrepreneur Khaziev Anas Fatikhovich<br />
          TIN: 501905834304<br />
          PSRNIE: 325774600419939
        </p>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Пользовательское соглашение">
      <h2>1. Общие положения</h2>
      <p>
        Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует использование
        сайта anagentica.ru (далее — «Сайт»), которым управляет Индивидуальный предприниматель
        Хазиев Анас Фатихович (ИНН: 501905834304, ОГРНИП: 325774600419939), далее — «Оператор».
      </p>
      <p>
        Используя Сайт, вы принимаете настоящее Соглашение в полном объёме. Если вы не согласны
        с каким-либо положением, пожалуйста, не используйте Сайт.
      </p>

      <h2>2. Описание Сайта</h2>
      <p>
        Сайт предоставляет информацию об услугах Оператора в области AI-автоматизации и консалтинга,
        включая описание услуг, примеры решений и контактную информацию. На Сайте также размещена
        контактная форма для подачи заявок на консультацию.
      </p>

      <h2>3. Интеллектуальная собственность</h2>
      <p>
        Все материалы Сайта — включая тексты, графику, логотипы, элементы дизайна и программное
        обеспечение — являются интеллектуальной собственностью Оператора и защищены действующим
        законодательством. Воспроизведение, распространение или изменение любых материалов без
        предварительного письменного согласия запрещено.
      </p>

      <h2>4. Обязанности пользователя</h2>
      <p>Используя Сайт, вы обязуетесь:</p>
      <ul>
        <li>Предоставлять достоверную информацию в формах обратной связи</li>
        <li>Не использовать Сайт в противоправных целях</li>
        <li>Не предпринимать попытки несанкционированного доступа к системам Сайта</li>
        <li>Не нарушать нормальную работу Сайта</li>
      </ul>

      <h2>5. Ограничение ответственности</h2>
      <p>
        Сайт и его содержимое предоставляются «как есть». Оператор не гарантирует бесперебойную
        или безошибочную работу Сайта. Оператор не несёт ответственности за прямые или косвенные
        убытки, связанные с использованием Сайта.
      </p>
      <p>
        Информация, размещённая на Сайте, носит информационный характер и не является публичной
        офертой в понимании статьи 437 Гражданского кодекса Российской Федерации, если иное
        прямо не указано.
      </p>

      <h2>6. Внешние ссылки</h2>
      <p>
        Сайт может содержать ссылки на сторонние ресурсы. Оператор не несёт ответственности за
        содержание, политику конфиденциальности или практики внешних сайтов.
      </p>

      <h2>7. Изменение Соглашения</h2>
      <p>
        Оператор оставляет за собой право изменять настоящее Соглашение в любое время. Актуальная
        версия всегда доступна по адресу <a href="/terms">anagentica.ru/terms</a>. Продолжение
        использования Сайта после внесения изменений означает принятие обновлённого Соглашения.
      </p>

      <h2>8. Применимое право</h2>
      <p>
        Настоящее Соглашение регулируется законодательством Российской Федерации. Все споры
        разрешаются в соответствии с законодательством Российской Федерации.
      </p>

      <h2>9. Контактная информация</h2>
      <p>
        ИП Хазиев Анас Фатихович<br />
        ИНН: 501905834304<br />
        ОГРНИП: 325774600419939
      </p>
    </LegalLayout>
  );
}
