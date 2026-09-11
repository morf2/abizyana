import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/ServiceCards";
import Contact from "@/sections/Contact";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Услуги: сайты, дизайн, боты и автоматизация | Абизяна",
  description:
    "Создание сайтов и лендингов, веб-дизайн, Telegram-боты и автоматизация для бизнеса по всей России. Студия «Абизяна», Барнаул.",
  alternates: { canonical: "/uslugi/" },
  openGraph: {
    title: "Услуги digital-студии «Абизяна»",
    description:
      "Создание сайтов, веб-дизайн, Telegram-боты и автоматизация для бизнеса по всей России.",
    url: "/uslugi/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Услуги студии «Абизяна»",
  description:
    "Создание сайтов, веб-дизайн, Telegram-боты и автоматизация для бизнеса по всей России.",
  url: `${siteConfig.url}/uslugi/`,
};

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <section className="service-index-hero" id="top">
        <div className="page-shell">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <Link href="/" prefetch={false}>Главная</Link>
            <span aria-hidden="true">/</span>
            <span>Услуги</span>
          </nav>
          <p className="service-eyebrow">Абизяна · Работаем по России</p>
          <h1>Создаём цифровые проекты <em>с характером</em></h1>
          <p>
            Помогаем бизнесу упаковать идею, запустить сайт, продумать дизайн,
            разработать бота или убрать ручную рутину — полностью онлайн.
          </p>
        </div>
      </section>
      <section className="content-section service-index-list">
        <div className="page-shell">
          <ServiceCards />
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
