const steps = [
  {
    title: "Оставляете заявку",
    text: "Мы связываемся с вами, уточняем детали и понимаем, какой результат вы хотите получить.",
  },
  {
    title: "Встреча — созвон",
    text: "Обсуждаем проект, проводим брифинг, ищем референсы и формируем общее видение.",
  },
  {
    title: "Подготовка проекта",
    text: "Продумываем структуру, сценарии взаимодействия и собираем основу будущего продукта.",
  },
  {
    title: "Брейншторминг",
    text: "Генерируем идеи, ищем нестандартные решения и создаём заметную концепцию.",
  },
  {
    title: "Разработка и оптимизация",
    text: "Создаём дизайн и функционал, тестируем проект и доводим каждую деталь.",
  },
  {
    title: "Запуск",
    text: "Публикуем проект, настраиваем системы и остаёмся на связи для поддержки и развития.",
  },
];

export default function Process() {
  return (
    <section id="process" className="content-section process-section">
      <div className="page-shell">
        <h2 className="section-title section-title-small">Принцип работы</h2>
        <div className="process-grid">
          {steps.map((step, index) => (
            <article className={`process-step process-step-${index + 1}`} key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
