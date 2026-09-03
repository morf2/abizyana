import Image from "next/image";
import CtaLink from "@/components/CtaLink";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="page-shell hero-inner">
        <h1 className="hero-title">
          <span>Делаем</span>
          <strong>Грооомко!</strong>
        </h1>

        <p className="hero-copy">
          Создаём сайты и веб-дизайн в Барнауле, разрабатываем ботов и{" "}
          <em>автоматизируем</em> бизнес-процессы
        </p>

        <CtaLink>Подать заявку</CtaLink>

        <Image
          className="hero-monkey hero-monkey-left"
          src="/figma/raw-04.png"
          alt=""
          width={375}
          height={375}
          sizes="(max-width: 767px) 82px, 150px"
          priority
        />
        <Image
          className="hero-monkey hero-monkey-right"
          src="/figma/raw-16.png"
          alt=""
          width={375}
          height={375}
          sizes="(max-width: 767px) 72px, 130px"
          priority
        />
      </div>
    </section>
  );
}
