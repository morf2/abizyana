import Image from "next/image";
import CtaLink from "@/components/CtaLink";

const members = [
  {
    name: "Захар",
    role: "Креативный директор",
    description:
      "Если нужен фирменный стиль, сильный дизайн или маркетинговая стратегия — я разберусь.",
    image: "/team1.png",
  },
  {
    name: "Богдан",
    role: "Технический директор",
    description:
      "Отвечаю за разработку и техническую часть проектов — от архитектуры до запуска.",
    image: "/team2.png",
  },
  {
    name: "Катя",
    role: "SMM и комьюнити-менеджер",
    description:
      "Помогаю проектам говорить с аудиторией живо, понятно и в характере бренда.",
    image: "/team3.png",
  },
];

export default function Team() {
  return (
    <section className="content-section team-section" aria-labelledby="team-title">
      <div className="page-shell">
        <h2 className="section-title section-title-small" id="team-title">
          Наша команда
        </h2>

        <div className="team-grid">
          {members.map((member, index) => (
            <article className={`team-member team-member-${index + 1}`} key={member.name}>
              <div className="team-copy">
                <h3>
                  Я — <em>{member.role}</em>
                </h3>
                <p>{member.description}</p>
              </div>
              <div
                className="team-photo"
                data-photo-reveal={index % 2 === 0 ? "left" : "right"}
              >
                <div className="team-photo-tilt" data-tilt>
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    width={500}
                    height={500}
                    sizes="(max-width: 767px) 88vw, 430px"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="join-team">
          <Image
            src="/figma/raw-03.png"
            alt=""
            width={1500}
            height={1500}
            sizes="120px"
          />
          <p>
            Здесь могло быть <em>твоё фото</em>. Хочешь попасть в команду —
            напиши или позвони, мы открыты новым людям и идеям.
          </p>
          <CtaLink>Хочу в команду</CtaLink>
        </div>
      </div>
    </section>
  );
}
