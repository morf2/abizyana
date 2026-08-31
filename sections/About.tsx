import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="content-section about-section">
      <div className="page-shell">
        <h2 className="section-title">О нас</h2>
        <p className="section-lead about-lead">
          <em>Мы</em> — команда креативных и заряженных ребят, которые хотят
          развиваться и помогать в этом другим.
        </p>

        <div className="about-lockup" aria-label="Делаем грооомко">
          <span>Делаем</span>
          <Image
            src="/figma/raw-06.png"
            alt=""
            width={1500}
            height={1500}
            sizes="(max-width: 767px) 260px, 520px"
          />
          <strong>Грооомко!</strong>
        </div>

        <p className="section-lead about-definition">
          <em>Абизяна</em> — это Агентство Больших Идей и Запуска Ярких Новых
          Автоматизаций.
        </p>
      </div>
    </section>
  );
}
