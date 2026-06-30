"use client";

import { usePortfolioContent } from "@/i18n/I18nProvider";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { profile, ui } = usePortfolioContent();

  return (
    <section id="sobre" className="section-surface-alt px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={ui.about.eyebrow}
          title={ui.about.title}
          description={ui.about.description}
        />
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
          <p className="text-lg leading-relaxed text-muted-foreground">{profile.summary}</p>
        </div>
      </div>
    </section>
  );
}
