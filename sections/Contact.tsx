const maxUrl =
  "https://max.ru/u/f9LHodD0cOIbpCHujiRR9Zjd9OVs7aFJE9dFowp1GwktXyCZTEVNcgmXWWQ";

export default function Contact() {
  return (
    <section id="contact" className="content-section contact-section">
      <div className="page-shell contact-shell">
        <h2>Расскажите о проекте</h2>
        <p>Выберите удобный способ — ответим и договоримся о созвоне.</p>
        <div className="contact-actions">
          <a href="tel:+79609613435">
            <span>Позвонить</span>
            <strong>8 960 961-34-35</strong>
          </a>
          <a href="https://t.me/baga1806" target="_blank" rel="noreferrer">
            <span>Написать</span>
            <strong>Telegram</strong>
          </a>
          <a href={maxUrl} target="_blank" rel="noreferrer">
            <span>Написать</span>
            <strong>MAX</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
