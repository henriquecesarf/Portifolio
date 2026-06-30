"use client";

import { usePortfolioContent } from "@/i18n/I18nProvider";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import type { PortfolioContent } from "@/i18n/types";
import type { CSSProperties } from "react";
import { SectionHeading } from "./SectionHeading";

type ExperienceItem = PortfolioContent["experiences"][number];

function ExperienceTimelineItem({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const isEven = index % 2 === 0;

  const meta = (
    <div className={isEven ? "md:text-right" : "md:text-left"}>
      <p className="text-sm font-medium text-sky-500">{item.period}</p>
      <h3 className="mt-1 text-xl font-semibold text-heading">{item.role}</h3>
      <p className="text-muted">
        {item.company} · {item.location}
      </p>
    </div>
  );

  const card = (
    <div className="rounded-2xl border border-border bg-card p-6">
      <ul className="space-y-3">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <article
      className={`experience-item relative grid gap-6 pl-10 md:grid-cols-2 md:items-center md:gap-12 md:pl-0 ${
        isEven ? "experience-item--from-left" : "experience-item--from-right"
      }`}
      style={{ "--item-index": index } as CSSProperties}
    >
      <div className="absolute left-0 top-6 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <div className="timeline-dot h-6 w-6 rounded-full border-2 border-sky-400 bg-background" />
      </div>

      {isEven ? (
        <>
          <div>{meta}</div>
          <div>{card}</div>
        </>
      ) : (
        <>
          <div className="order-1 md:order-2">{meta}</div>
          <div className="order-2 md:order-1">{card}</div>
        </>
      )}
    </article>
  );
}

export function Experience() {
  const { experiences, ui } = usePortfolioContent();
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>({
    threshold: 0,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section id="experiencia" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={ui.experience.eyebrow}
          title={ui.experience.title}
          description={ui.experience.description}
        />

        <div
          ref={ref}
          className={`experience-timeline relative space-y-12 before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-border md:before:left-1/2 md:before:-translate-x-px ${
            visible ? "is-visible" : ""
          }`}
        >
          {experiences.map((item, index) => (
            <ExperienceTimelineItem key={`${item.company}-${item.period}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
