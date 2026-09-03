import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const montserrat = localFont({
  src: [
    { path: "./fonts/Montserrat-Regular.ttf", weight: "400" },
    { path: "./fonts/Montserrat-Medium.ttf", weight: "500" },
    { path: "./fonts/Montserrat-SemiBold.ttf", weight: "600" },
    { path: "./fonts/Montserrat-Bold.ttf", weight: "700" },
    { path: "./fonts/Montserrat-ExtraBold.ttf", weight: "800" },
    { path: "./fonts/Montserrat-Black.ttf", weight: "900" },
  ],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Веб-разработка и дизайн",
  keywords: [
    "создание сайтов Барнаул",
    "разработка сайтов Барнаул",
    "дизайн сайтов Барнаул",
    "веб-дизайн Барнаул",
    "Telegram-боты Барнаул",
    "автоматизация бизнеса Барнаул",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/logo.png",
        width: 397,
        height: 89,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      inLanguage: "ru-RU",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      telephone: "+79609613435",
      areaServed: {
        "@type": "City",
        name: "Барнаул",
      },
      knowsAbout: [
        "Разработка сайтов",
        "Веб-дизайн",
        "Telegram-боты",
        "Автоматизация бизнеса",
      ],
      sameAs: [
        "https://t.me/baga1806",
        "https://max.ru/u/f9LHodD0cOIbpCHujiRR9Zjd9OVs7aFJE9dFowp1GwktXyCZTEVNcgmXWWQ",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Как начать работу?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Позвоните по номеру 8 960 961-34-35 или напишите в Telegram или MAX. Обсудим задачу и договоримся о следующем шаге.",
          },
        },
        {
          "@type": "Question",
          name: "Какие проекты вы делаете?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Создаём сайты, ботов, оформление, digital-дизайн и автоматизацию для бизнеса и других проектов.",
          },
        },
        {
          "@type": "Question",
          name: "Можно заказать сайт в Барнауле?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Разрабатываем в Барнауле лендинги и сайты для бизнеса: продумываем структуру, создаём дизайн, собираем и запускаем проект.",
          },
        },
      ],
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f7f4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
