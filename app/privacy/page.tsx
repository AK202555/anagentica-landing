'use client';

import LegalLayout from '../components/LegalLayout';
import { useLocale } from '../i18n/LocaleContext';

export default function PrivacyPage() {
  const { locale } = useLocale();

  if (locale === 'en') {
    return (
      <LegalLayout title="Privacy Policy">
        <h2>1. General Provisions</h2>
        <p>
          This Privacy Policy governs the processing of personal data by Individual Entrepreneur Khaziev Anas Fatikhovich
          (TIN: 501905834304, PSRNIE: 325774600419939), hereinafter referred to as the &quot;Operator&quot;, operating the website
          anagentica.ru (hereinafter — the &quot;Website&quot;).
        </p>
        <p>
          By using the Website and submitting your data through forms, you consent to the processing of your personal data
          in accordance with this Policy and Federal Law No. 152-FZ &quot;On Personal Data&quot;.
        </p>

        <h2>2. Data Collected</h2>
        <p>The Operator may collect and process the following personal data:</p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Telegram username</li>
          <li>Email address</li>
          <li>Information provided in the task description field</li>
          <li>Cookie files and technical data (IP address, browser type, device type, pages visited)</li>
        </ul>

        <h2>3. Purposes of Data Processing</h2>
        <p>Personal data is processed for the following purposes:</p>
        <ul>
          <li>Responding to inquiries and consultation requests</li>
          <li>Providing services and fulfilling contractual obligations</li>
          <li>Improving the Website and its content</li>
          <li>Analytics and statistics (in anonymized form)</li>
          <li>Compliance with legal requirements of the Russian Federation</li>
        </ul>

        <h2>4. Legal Basis</h2>
        <p>
          Data processing is based on the consent of the data subject (Article 6, Clause 1, Item 1 of Federal Law No. 152-FZ)
          and the necessity for contract performance (Article 6, Clause 1, Item 5).
        </p>

        <h2>5. Data Storage and Protection</h2>
        <p>
          Personal data is stored on servers located in the Russian Federation. The Operator takes all necessary
          organizational and technical measures to protect personal data from unauthorized access, modification,
          disclosure, or destruction.
        </p>
        <p>
          Data is stored for the period necessary to fulfill the purposes of processing, but no longer than 3 years
          from the date of collection, unless otherwise required by law.
        </p>

        <h2>6. Cookie Files</h2>
        <p>
          The Website uses cookie files to ensure proper functionality, remember user preferences (language, theme),
          and collect analytics data. You can manage cookie settings in your browser. Disabling cookies may limit
          certain Website functionality.
        </p>
        <p>Types of cookies used:</p>
        <ul>
          <li>Essential cookies — for basic Website functionality (language preference, theme, cookie consent)</li>
          <li>Analytics cookies — for understanding how visitors use the Website (anonymized)</li>
        </ul>

        <h2>7. Data Sharing with Third Parties</h2>
        <p>
          The Operator does not sell, trade, or otherwise transfer personal data to third parties, except:
        </p>
        <ul>
          <li>When required by law or court order</li>
          <li>With trusted service providers who assist in Website operation (hosting, analytics), subject to confidentiality agreements</li>
        </ul>

        <h2>8. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request information about your personal data being processed</li>
          <li>Request correction, blocking, or deletion of your personal data</li>
          <li>Withdraw your consent to data processing at any time</li>
          <li>File a complaint with Roskomnadzor (Federal Service for Supervision of Communications)</li>
        </ul>
        <p>
          To exercise these rights, contact: <a href="mailto:tornad2020@yandex.ru">tornad2020@yandex.ru</a>
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          The Operator reserves the right to update this Policy. The current version is always available at{' '}
          <a href="/privacy">anagentica.ru/privacy</a>. Continued use of the Website after changes constitutes
          acceptance of the updated Policy.
        </p>

        <h2>10. Contact Information</h2>
        <p>
          Individual Entrepreneur Khaziev Anas Fatikhovich<br />
          TIN: 501905834304<br />
          PSRNIE: 325774600419939<br />
          Email: <a href="mailto:tornad2020@yandex.ru">tornad2020@yandex.ru</a><br />
          Telegram: <a href="https://t.me/velocity2025" target="_blank" rel="noopener noreferrer">@velocity2025</a>
        </p>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Политика конфиденциальности">
      <h2>1. Общие положения</h2>
      <p>
        Настоящая Политика конфиденциальности определяет порядок обработки персональных данных
        Индивидуальным предпринимателем Хазиевым Анасом Фатиховичем (ИНН: 501905834304, ОГРНИП: 325774600419939),
        далее — «Оператор», осуществляющим деятельность через сайт anagentica.ru (далее — «Сайт»).
      </p>
      <p>
        Используя Сайт и предоставляя свои данные через формы обратной связи, вы даёте согласие на обработку
        ваших персональных данных в соответствии с настоящей Политикой и Федеральным законом № 152-ФЗ
        «О персональных данных».
      </p>

      <h2>2. Собираемые данные</h2>
      <p>Оператор может собирать и обрабатывать следующие персональные данные:</p>
      <ul>
        <li>Имя</li>
        <li>Номер телефона</li>
        <li>Имя пользователя в Telegram</li>
        <li>Адрес электронной почты</li>
        <li>Информация, указанная в поле описания задачи</li>
        <li>Файлы cookie и технические данные (IP-адрес, тип браузера, тип устройства, посещённые страницы)</li>
      </ul>

      <h2>3. Цели обработки данных</h2>
      <p>Персональные данные обрабатываются в следующих целях:</p>
      <ul>
        <li>Ответ на обращения и заявки на консультацию</li>
        <li>Оказание услуг и исполнение договорных обязательств</li>
        <li>Улучшение работы Сайта и его содержания</li>
        <li>Аналитика и статистика (в обезличенном виде)</li>
        <li>Исполнение требований законодательства Российской Федерации</li>
      </ul>

      <h2>4. Правовые основания</h2>
      <p>
        Обработка данных осуществляется на основании согласия субъекта персональных данных (ст. 6, п. 1, пп. 1 ФЗ № 152-ФЗ)
        и необходимости исполнения договора (ст. 6, п. 1, пп. 5).
      </p>

      <h2>5. Хранение и защита данных</h2>
      <p>
        Персональные данные хранятся на серверах, расположенных на территории Российской Федерации.
        Оператор принимает все необходимые организационные и технические меры для защиты персональных данных
        от несанкционированного доступа, изменения, раскрытия или уничтожения.
      </p>
      <p>
        Данные хранятся в течение срока, необходимого для достижения целей обработки, но не более 3 лет
        с момента сбора, если иное не предусмотрено законодательством.
      </p>

      <h2>6. Файлы cookie</h2>
      <p>
        Сайт использует файлы cookie для обеспечения корректной работы, запоминания пользовательских настроек
        (язык, тема оформления) и сбора аналитических данных. Вы можете управлять настройками cookie в вашем браузере.
        Отключение cookie может ограничить функциональность Сайта.
      </p>
      <p>Типы используемых cookie:</p>
      <ul>
        <li>Необходимые cookie — для базовой работы Сайта (языковые предпочтения, тема, согласие на cookie)</li>
        <li>Аналитические cookie — для понимания того, как посетители используют Сайт (в обезличенном виде)</li>
      </ul>

      <h2>7. Передача данных третьим лицам</h2>
      <p>
        Оператор не продаёт, не обменивает и не передаёт персональные данные третьим лицам, за исключением случаев:
      </p>
      <ul>
        <li>Когда это требуется по закону или решению суда</li>
        <li>Доверенным поставщикам услуг, содействующим в работе Сайта (хостинг, аналитика), при условии заключения соглашений о конфиденциальности</li>
      </ul>

      <h2>8. Ваши права</h2>
      <p>Вы имеете право:</p>
      <ul>
        <li>Запросить информацию о ваших обрабатываемых персональных данных</li>
        <li>Потребовать уточнение, блокирование или уничтожение ваших персональных данных</li>
        <li>Отозвать согласие на обработку данных в любой момент</li>
        <li>Подать жалобу в Роскомнадзор</li>
      </ul>
      <p>
        Для реализации указанных прав обращайтесь: <a href="mailto:tornad2020@yandex.ru">tornad2020@yandex.ru</a>
      </p>

      <h2>9. Изменения в Политике</h2>
      <p>
        Оператор оставляет за собой право обновлять настоящую Политику. Актуальная версия всегда доступна по адресу{' '}
        <a href="/privacy">anagentica.ru/privacy</a>. Продолжение использования Сайта после внесения изменений
        означает принятие обновлённой Политики.
      </p>

      <h2>10. Контактная информация</h2>
      <p>
        ИП Хазиев Анас Фатихович<br />
        ИНН: 501905834304<br />
        ОГРНИП: 325774600419939<br />
        Email: <a href="mailto:tornad2020@yandex.ru">tornad2020@yandex.ru</a><br />
        Telegram: <a href="https://t.me/velocity2025" target="_blank" rel="noopener noreferrer">@velocity2025</a>
      </p>
    </LegalLayout>
  );
}
