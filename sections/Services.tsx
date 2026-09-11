import Link from "next/link";
import ServiceCards from "@/components/ServiceCards";

export default function Services() {
  return (
    <section id="services" className="content-section services-section">
      <div className="page-shell">
        <p className="service-kicker">Чем помогаем</p>
        <h2 className="section-title section-title-small">
          Сайты, дизайн, боты и автоматизация
        </h2>
        <p className="section-lead services-lead">
          Создаём цифровые проекты для бизнеса по всей России — от идеи и
          структуры до разработки, запуска и поддержки.
        </p>
        <ServiceCards />
        <Link className="service-all-link" href="/uslugi/" prefetch={false}>
          Открыть раздел услуг →
        </Link>
      </div>
    </section>
  );
}
