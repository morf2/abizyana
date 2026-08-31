"use client";

import Image from "next/image";
import { useRef } from "react";

const navigation = [
  { href: "#about", label: "О нас" },
  { href: "#projects", label: "Проекты" },
  { href: "#process", label: "Принцип" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#faq", label: "Вопросы" },
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
          {navigation.slice(0, 2).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="brand-link" href="#top" aria-label="Абизяна — наверх">
          <Image
            src="/logo.png"
            alt="Абизяна"
            width={397}
            height={89}
            sizes="(max-width: 767px) 170px, 280px"
            priority
          />
        </a>

        <div className="desktop-nav desktop-nav-right">
          {navigation.slice(2).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
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
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="mobile-contact" href="tel:+79609613435" onClick={closeMenu}>
              Позвонить
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
