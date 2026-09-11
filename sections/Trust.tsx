const telegramChannel = "https://t.me/abizi22";

const proofPoints = [
  {
    title: "Реальные проекты",
    text: "Показываем работы, которые можно рассмотреть, а не обещания без примеров.",
  },
  {
    title: "Команда на связи",
    text: "Обсуждаем задачу напрямую, показываем этапы и остаёмся рядом после запуска.",
  },
  {
    title: "Работаем открыто",
    text: "Делимся процессом, новостями студии и свежими запусками в Telegram.",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="content-section trust-section" aria-labelledby="trust-title">
      <div className="page-shell trust-layout">
        <div className="trust-copy">
          <h2 id="trust-title">Доверие начинается с открытости</h2>
          <p>
            Не придумываем отзывы и громкие цифры. Показываем команду, реальные
            проекты и то, как идёт работа.
          </p>
          <a
            className="trust-channel"
            href={telegramChannel}
            target="_blank"
            rel="noreferrer"
          >
            <span>Наш Telegram-канал</span>
            <strong>@abizi22</strong>
            <small>Проекты, процесс и новости студии</small>
            <b>Открыть канал</b>
          </a>
        </div>

        <ul className="trust-points">
          {proofPoints.map((point) => (
            <li key={point.title}>
              <strong>{point.title}</strong>
              <span>{point.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
