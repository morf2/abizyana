import Image from "next/image";

const reasons = [
  {
    title: "Яркие идеи",
    text: "Не делаем «как у всех» — создаём проекты с характером, которые запоминаются с первого взгляда.",
    image: "/figma/raw-08.png",
  },
  {
    title: "Современная разработка",
    text: "Сайты, боты и mini apps с продуманным UX, быстрой работой и выразительной подачей.",
    image: "/figma/raw-03.png",
  },
  {
    title: "Результат и поддержка",
    text: "Не просто запускаем проект — помогаем ему расти, обновляться и приносить результат.",
    image: "/figma/raw-16.png",
  },
];

export default function WhyUs() {
  return (
    <section className="content-section why-section" aria-labelledby="why-title">
      <div className="page-shell">
        <h2 className="section-title" id="why-title">
          Почему мы?
        </h2>
        <p className="section-lead why-lead">
          Объединяем дизайн, технологии и креатив, чтобы создавать современные
          проекты с характером.
        </p>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article key={reason.title}>
              <Image
                src={reason.image}
                alt=""
                width={1500}
                height={1500}
                sizes="(max-width: 767px) 150px, 220px"
              />
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
