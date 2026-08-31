"use client";

import Image from "next/image";
import { useState } from "react";
import CtaLink from "@/components/CtaLink";

const projects = [
  {
    name: "ВоСтрой",
    description: "Сайт строительной компании — понятный, тёплый и уверенный.",
    logo: "/figma/raw-12.png",
    logoClass: "project-logo-vostroy",
  },
  {
    name: "UNO Caffe",
    description: "Цифровой образ итальянского кафе с узнаваемым характером.",
    logo: "/figma/uno-caffe.png",
    logoClass: "project-logo-uno",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  const selectProject = (next: number) => {
    setActive((next + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="content-section projects-section">
      <div className="page-shell">
        <h2 className="section-title section-title-small">Наши проекты</h2>
        <p className="section-lead projects-lead">
          Ниже представлены проекты, которые мы создавали с командой за
          последнее время.
        </p>

        <div className="project-carousel" aria-roledescription="carousel">
          <div className="project-dots" aria-label="Выбрать проект">
            {projects.map((item, index) => (
              <button
                className={index === active ? "is-active" : ""}
                type="button"
                aria-label={`Показать проект ${item.name}`}
                aria-current={index === active ? "true" : undefined}
                onClick={() => selectProject(index)}
                key={item.name}
              />
            ))}
          </div>

          <article className="project-feature" data-tilt aria-live="polite">
            <button
              className="project-arrow project-arrow-left"
              type="button"
              aria-label="Предыдущий проект"
              onClick={() => selectProject(active - 1)}
            >
              <span aria-hidden="true">←</span>
            </button>

            <div className="project-slide" key={project.name}>
              <div className={`project-logo-frame ${project.logoClass}`}>
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={470}
                  height={288}
                  sizes="(max-width: 767px) 240px, 420px"
                />
              </div>
              <p>{project.description}</p>
            </div>

            <button
              className="project-arrow project-arrow-right"
              type="button"
              aria-label="Следующий проект"
              onClick={() => selectProject(active + 1)}
            >
              <span aria-hidden="true">→</span>
            </button>

            <Image
              className="project-monkey"
              src="/figma/raw-08.png"
              alt=""
              width={375}
              height={375}
              sizes="110px"
            />
          </article>

          <p className="project-invite">
            Чтобы обсудить с нами <em>свой проект</em>, расскажите задачу —
            вместе определим формат и следующий шаг.
          </p>
          <CtaLink>Связаться с нами</CtaLink>
        </div>
      </div>
    </section>
  );
}
