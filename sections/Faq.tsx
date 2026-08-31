const questions = [
  {
    question: "Как начать работу?",
    answer:
      "Позвоните по номеру 8 960 961-34-35 или напишите в Telegram или MAX. Обсудим задачу и договоримся о следующем шаге.",
  },
  {
    question: "Какие проекты вы делаете?",
    answer:
      "Создаём сайты, ботов, оформление, digital-дизайн и автоматизацию для бизнеса и других проектов.",
  },
  {
    question: "Что происходит после заявки?",
    answer:
      "Уточняем детали, проводим созвон, формируем концепцию, разрабатываем, тестируем и запускаем проект.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="content-section faq-section">
      <div className="page-shell faq-shell">
        <h2 className="section-title section-title-small">Вопросы</h2>
        <div className="faq-list">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
