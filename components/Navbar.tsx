"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const navigation = [
  { href: "/#about", label: "О нас" },
  { href: "/#services", label: "Услуги" },
  { href: "/#projects", label: "Проекты" },
  { href: "/#trust", label: "Доверие" },
  { href: "/#pricing", label: "Тарифы" },
  { href: "/#faq", label: "Вопросы" },
];

export default function Navbar() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  return (
    <header className="site-header">
      <nav className="site-nav page-shell" aria-label="Основная навигация">
        <div className="desktop-nav desktop-nav-left">
          {navigation.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} prefetch={false}>
              {item.label}
            </Link>
          ))}
        </div>

        <Link className="brand-link" href="/" aria-label="Абизяна — на главную" prefetch={false}>
          <Image
            src="/logo.png"
            alt="Абизяна"
            width={397}
            height={89}
            sizes="(max-width: 767px) 170px, 280px"
            priority
          />
        </Link>

        <div className="desktop-nav desktop-nav-right">
          {navigation.slice(3).map((item) => (
            <Link key={item.href} href={item.href} prefetch={false}>
              {item.label}
            </Link>
          ))}
        </div>

        <details className="mobile-menu" ref={menuRef}>
          <summary aria-label="Открыть меню">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-menu-panel">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu} prefetch={false}>
                {item.label}
              </Link>
            ))}
            <a className="mobile-contact" href="tel:+79609613435" onClick={closeMenu}>
              Позвонить
            </a>
            <a
              className="mobile-contact"
              href="https://t.me/abizi22"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Наш Telegram-канал
            </a>
            <a
              className="mobile-contact"
              href="https://t.me/baga1806"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Telegram
            </a>
            <a
              className="mobile-contact"
              href="https://max.ru/u/f9LHodD0cOIbpCHujiRR9Zjd9OVs7aFJE9dFowp1GwktXyCZTEVNcgmXWWQ"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              MAX
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
