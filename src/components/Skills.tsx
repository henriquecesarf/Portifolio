"use client";

import { usePortfolioContent } from "@/i18n/I18nProvider";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const { skillGroups, ui } = usePortfolioContent();

  return (
    <section id="habilidades" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={ui.skills.eyebrow}
          title={ui.skills.title}
          description={ui.skills.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-500">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-card-hover px-3 py-1 text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
