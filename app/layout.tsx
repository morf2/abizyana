import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
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
  title: "Абизяна — digital-проекты с характером",
  description:
    "Сайты, боты, дизайн и автоматизация для бизнеса и ярких проектов.",
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
      <body>{children}</body>
    </html>
  );
}
