import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div className="footer-contact">
          <span>Связаться с нами</span>
          <a href="tel:+79609613435">8 960 961-34-35</a>
        </div>
        <a className="footer-logo" href="#top" aria-label="Абизяна — наверх">
          <Image
            src="/logo.png"
            alt="Абизяна"
            width={397}
            height={89}
            sizes="180px"
          />
        </a>
        <div className="footer-socials" aria-label="Мессенджеры">
          <a href="https://t.me/baga1806" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOIbpCHujiRR9Zjd9OVs7aFJE9dFowp1GwktXyCZTEVNcgmXWWQ"
            target="_blank"
            rel="noreferrer"
          >
            MAX
          </a>
        </div>
      </div>
    </footer>
  );
}
