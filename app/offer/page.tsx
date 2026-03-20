'use client';

import LegalLayout from '../components/LegalLayout';
import { useLocale } from '../i18n/LocaleContext';

export default function OfferPage() {
  const { locale } = useLocale();

  if (locale === 'en') {
    return (
      <LegalLayout title="Public Offer Agreement">
        <h2>1. General Provisions</h2>
        <p>
          This document constitutes a public offer (hereinafter — the &quot;Offer&quot;) of Individual Entrepreneur
          Khaziev Anas Fatikhovich (TIN: 501905834304, PSRNIE: 325774600419939), hereinafter — the &quot;Contractor&quot;,
          addressed to any individual or legal entity (hereinafter — the &quot;Client&quot;) to enter into a service
          agreement on the terms set forth below.
        </p>
        <p>
          In accordance with Article 437 of the Civil Code of the Russian Federation, this document is a public offer.
          Acceptance of the Offer is the submission of a service request through the Website form or payment for services.
        </p>

        <h2>2. Subject Matter</h2>
        <p>
          The Contractor provides AI consulting and automation services, including but not limited to:
        </p>
        <ul>
          <li>AI audit and strategy development</li>
          <li>Business process automation using AI</li>
          <li>Development of AI agents and assistants</li>
          <li>Team training in AI tools and methodologies</li>
        </ul>
        <p>
          The specific scope, terms, and cost of services are determined individually for each project and fixed
          in a separate agreement or specification.
        </p>

        <h2>3. Order Procedure</h2>
        <ol>
          <li>The Client submits a request through the Website form or contacts the Contractor via the specified channels</li>
          <li>The Contractor conducts a free initial consultation (up to 30 minutes)</li>
          <li>Based on the consultation, the Contractor prepares and sends a commercial proposal with scope and pricing</li>
          <li>The Client confirms the proposal (acceptance), after which a service agreement is executed</li>
          <li>The Contractor begins work after receiving an advance payment (if applicable)</li>
        </ol>

        <h2>4. Pricing and Payment</h2>
        <p>
          Service prices are indicated in the commercial proposal and/or service agreement. All prices are stated
          in Russian rubles and include all applicable taxes (the Contractor applies a simplified taxation system).
        </p>
        <p>Payment terms:</p>
        <ul>
          <li>Payment is made by bank transfer to the Contractor&apos;s details</li>
          <li>The advance payment amount is specified in the service agreement (typically 50%)</li>
          <li>The remaining amount is due upon completion and delivery of the work</li>
        </ul>

        <h2>5. Rights and Obligations</h2>
        <h3>Contractor&apos;s obligations:</h3>
        <ul>
          <li>Perform services in a professional manner within the agreed timeframe</li>
          <li>Provide the Client with progress reports as agreed</li>
          <li>Maintain confidentiality of the Client&apos;s business information</li>
          <li>Deliver the completed work and provide training to the Client&apos;s team</li>
        </ul>
        <h3>Client&apos;s obligations:</h3>
        <ul>
          <li>Provide all necessary information and access for project execution</li>
          <li>Make payments on time in accordance with the agreement</li>
          <li>Review and accept or provide feedback on deliverables within 5 business days</li>
        </ul>

        <h2>6. Delivery and Acceptance</h2>
        <p>
          Upon completion, the Contractor provides deliverables and an acceptance certificate. The Client has
          5 business days to review and sign the certificate or submit written objections. If no objections
          are received within this period, the work is deemed accepted.
        </p>

        <h2>7. Liability</h2>
        <p>
          The parties bear liability for non-performance or improper performance of obligations in accordance
          with the legislation of the Russian Federation. The Contractor&apos;s total liability shall not exceed
          the amount paid by the Client for the specific services in question.
        </p>

        <h2>8. Confidentiality</h2>
        <p>
          Both parties undertake to maintain the confidentiality of all information received during the
          performance of services, including business processes, technical solutions, and financial data.
        </p>

        <h2>9. Force Majeure</h2>
        <p>
          Neither party shall be liable for non-performance of obligations caused by force majeure circumstances
          (natural disasters, government actions, technical failures beyond the party&apos;s control).
        </p>

        <h2>10. Dispute Resolution</h2>
        <p>
          All disputes are resolved through negotiations. If no agreement is reached, disputes shall be resolved
          in accordance with the legislation of the Russian Federation at the location of the Contractor.
        </p>

        <h2>11. Changes and Termination</h2>
        <p>
          The Contractor reserves the right to modify this Offer. Changes take effect upon publication on the
          Website. Agreements entered into before the changes remain governed by the previous version.
        </p>

        <h2>12. Contractor Details</h2>
        <p>
          Individual Entrepreneur Khaziev Anas Fatikhovich<br />
          TIN: 501905834304<br />
          PSRNIE: 325774600419939
        </p>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Публичная оферта">
      <h2>1. Общие положения</h2>
      <p>
        Настоящий документ является публичной офертой (далее — «Оферта») Индивидуального предпринимателя
        Хазиева Анаса Фатиховича (ИНН: 501905834304, ОГРНИП: 325774600419939), далее — «Исполнитель»,
        адресованной любому физическому или юридическому лицу (далее — «Заказчик») заключить договор
        оказания услуг на условиях, изложенных ниже.
      </p>
      <p>
        В соответствии со статьёй 437 Гражданского кодекса Российской Федерации настоящий документ
        является публичной офертой. Акцептом Оферты является подача заявки на оказание услуг через форму
        на Сайте или оплата услуг.
      </p>

      <h2>2. Предмет Оферты</h2>
      <p>
        Исполнитель оказывает услуги в области AI-консалтинга и автоматизации, включая, но не ограничиваясь:
      </p>
      <ul>
        <li>AI-аудит и разработка стратегии</li>
        <li>Автоматизация бизнес-процессов с использованием AI</li>
        <li>Разработка AI-агентов и ассистентов</li>
        <li>Обучение команды работе с AI-инструментами и методологиями</li>
      </ul>
      <p>
        Конкретный объём, сроки и стоимость услуг определяются индивидуально для каждого проекта
        и фиксируются в отдельном договоре или техническом задании.
      </p>

      <h2>3. Порядок заказа услуг</h2>
      <ol>
        <li>Заказчик подаёт заявку через форму на Сайте или связывается с Исполнителем через указанные каналы связи</li>
        <li>Исполнитель проводит бесплатную первичную консультацию (до 30 минут)</li>
        <li>По итогам консультации Исполнитель готовит и направляет коммерческое предложение с объёмом работ и стоимостью</li>
        <li>Заказчик подтверждает предложение (акцепт), после чего заключается договор оказания услуг</li>
        <li>Исполнитель приступает к работе после получения предоплаты (если применимо)</li>
      </ol>

      <h2>4. Стоимость и порядок оплаты</h2>
      <p>
        Стоимость услуг указывается в коммерческом предложении и/или договоре оказания услуг.
        Все цены указаны в российских рублях и включают все применимые налоги
        (Исполнитель применяет упрощённую систему налогообложения).
      </p>
      <p>Порядок оплаты:</p>
      <ul>
        <li>Оплата производится безналичным переводом по реквизитам Исполнителя</li>
        <li>Размер предоплаты указывается в договоре оказания услуг (как правило, 50%)</li>
        <li>Оставшаяся сумма вносится после завершения и сдачи работ</li>
      </ul>

      <h2>5. Права и обязанности сторон</h2>
      <h3>Обязанности Исполнителя:</h3>
      <ul>
        <li>Оказать услуги качественно и в согласованные сроки</li>
        <li>Предоставлять Заказчику отчёты о ходе работ в согласованном формате</li>
        <li>Обеспечить конфиденциальность деловой информации Заказчика</li>
        <li>Передать выполненные работы и провести обучение команды Заказчика</li>
      </ul>
      <h3>Обязанности Заказчика:</h3>
      <ul>
        <li>Предоставить всю необходимую информацию и доступы для выполнения проекта</li>
        <li>Своевременно производить оплату в соответствии с договором</li>
        <li>Рассмотреть и принять результаты работ или направить мотивированные замечания в течение 5 рабочих дней</li>
      </ul>

      <h2>6. Сдача и приёмка работ</h2>
      <p>
        По завершении Исполнитель предоставляет результаты работ и акт приёмки-сдачи. Заказчик в течение
        5 рабочих дней рассматривает и подписывает акт или направляет мотивированные замечания в письменной
        форме. При отсутствии замечаний в указанный срок работы считаются принятыми.
      </p>

      <h2>7. Ответственность</h2>
      <p>
        Стороны несут ответственность за неисполнение или ненадлежащее исполнение обязательств
        в соответствии с законодательством Российской Федерации. Совокупная ответственность
        Исполнителя не может превышать суммы, оплаченной Заказчиком за конкретные услуги.
      </p>

      <h2>8. Конфиденциальность</h2>
      <p>
        Обе стороны обязуются обеспечить конфиденциальность всей информации, полученной в ходе
        оказания услуг, включая бизнес-процессы, технические решения и финансовые данные.
      </p>

      <h2>9. Форс-мажор</h2>
      <p>
        Ни одна из сторон не несёт ответственности за неисполнение обязательств, вызванное
        обстоятельствами непреодолимой силы (стихийные бедствия, действия государственных органов,
        технические сбои, не зависящие от стороны).
      </p>

      <h2>10. Разрешение споров</h2>
      <p>
        Все споры разрешаются путём переговоров. При недостижении согласия споры разрешаются
        в соответствии с законодательством Российской Федерации по месту нахождения Исполнителя.
      </p>

      <h2>11. Изменение и расторжение</h2>
      <p>
        Исполнитель оставляет за собой право вносить изменения в настоящую Оферту. Изменения
        вступают в силу с момента публикации на Сайте. Договоры, заключённые до изменений,
        регулируются предыдущей редакцией.
      </p>

      <h2>12. Реквизиты Исполнителя</h2>
      <p>
        ИП Хазиев Анас Фатихович<br />
        ИНН: 501905834304<br />
        ОГРНИП: 325774600419939
      </p>
    </LegalLayout>
  );
}
