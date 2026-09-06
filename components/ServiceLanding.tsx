import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/ServiceCards";
import Contact from "@/sections/Contact";
import { siteConfig } from "@/lib/site";
import type { Service } from "@/lib/services";

type ServiceLandingProps = {
  service: Service;
};

export default function ServiceLanding({ service }: ServiceLandingProps) {
  const pageUrl = `${siteConfig.url}/uslugi/${service.slug}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.name,
        description: service.metaDescription,
        url: pageUrl,
        areaServed: { "@type": "City", name: "Барнаул" },
        provider: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Услуги",
            item: `${siteConfig.url}/uslugi/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.shortName,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />

      <section className="service-hero" id="top">
        <div className="page-shell service-hero-inner">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <Link href="/" prefetch={false}>Главная</Link>
            <span aria-hidden="true">/</span>
            <Link href="/uslugi/" prefetch={false}>Услуги</Link>
          </nav>
          <p className="service-eyebrow">Абизяна · Барнаул</p>
          <h1>{service.name}</h1>
          <p className="service-hero-lead">{service.lead}</p>
          <div className="service-hero-actions">
            <a className="cta-link" href="#contact">
              Обсудить задачу
            </a>
            <Link href="/#projects" prefetch={false}>Посмотреть проекты</Link>
          </div>
          <span className="service-stamp" aria-hidden="true">
            {service.stamp}
          </span>
          <Image
            className="service-hero-monkey"
            src="/figma/raw-16.png"
            alt=""
            width={375}
            height={375}
            sizes="(max-width: 767px) 92px, 150px"
            priority
          />
        </div>
      </section>

      <section className="content-section service-intro">
        <div className="page-shell service-narrow">
          <p className="service-kicker">Задача</p>
          <h2>Не просто сделать. Сделать полезно и заметно.</h2>
          <p>{service.summary}</p>
        </div>
        <div className="page-shell service-highlight-grid">
          {service.highlights.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section service-scope">
        <div className="page-shell service-split">
          <div>
            <p className="service-kicker">Результат</p>
            <h2>Что входит в работу</h2>
          </div>
          <ul>
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section service-process">
        <div className="page-shell">
          <p className="service-kicker">Процесс</p>
          <h2>От разговора до запуска</h2>
          <div className="service-step-grid">
            {service.steps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section service-price">
        <div className="page-shell service-narrow">
          <p className="service-kicker">Стоимость</p>
          <h2>Сначала понятный объём — потом цена</h2>
          <p>{service.pricing}</p>
          <a className="cta-link" href="#contact">
            Получить оценку
          </a>
        </div>
      </section>

      <section className="content-section service-related">
        <div className="page-shell">
          <p className="service-kicker">Ещё можем</p>
          <h2>Другие услуги Абизяны</h2>
          <ServiceCards excludeSlug={service.slug} limit={3} />
          <Link className="service-all-link" href="/uslugi/" prefetch={false}>
            Все услуги →
          </Link>
        </div>
      </section>

      <section className="content-section service-faq">
        <div className="page-shell faq-shell">
          <h2 className="section-title section-title-small">Вопросы</h2>
          <div className="faq-list">
            {service.faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
