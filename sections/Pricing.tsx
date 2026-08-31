import CtaLink from "@/components/CtaLink";

export default function Pricing() {
  return (
    <section id="pricing" className="content-section pricing-section">
      <div className="page-shell">
        <h2 className="pricing-title">Тарифы</h2>
        <div className="pricing-grid">
          <article>
            <h3>АбизянБаза</h3>
            <p>
              Отлично подходит для <em>быстрого старта</em> и присутствия в
              digital-среде.
            </p>
          </article>
          <article className="pricing-featured">
            <h3>АбизянПро</h3>
            <p>
              Для бизнеса, которому нужна полноценная digital-экосистема с
              автоматизацией и ростом.
            </p>
          </article>
        </div>

        <h3 className="pricing-statement">
          Создаём digital-проекты, которые <em>невозможно</em> игнорировать
        </h3>
        <p className="section-lead pricing-lead">
          Яркий дизайн, современные технологии и идеи, которые помогают брендам
          выделяться в digital-среде.
        </p>
        <CtaLink>Связаться с нами</CtaLink>
      </div>
    </section>
  );
}
