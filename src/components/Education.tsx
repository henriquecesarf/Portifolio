"use client";

import { Award, ExternalLink, GraduationCap, Languages } from "lucide-react";
import { usePortfolioContent } from "@/i18n/I18nProvider";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  const { degrees, certifications, languages, ui } = usePortfolioContent();

  return (
    <section id="formacao" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={ui.education.eyebrow}
          title={ui.education.title}
          description={ui.education.description}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3 text-sky-500">
              <GraduationCap size={20} />
              <h3 className="font-semibold text-heading">{ui.education.graduation}</h3>
            </div>
            <div className="space-y-6">
              {degrees.map((item, index) => (
                <div key={item.institution} className={index > 0 ? "border-t border-border pt-6" : ""}>
                  <p className="text-xs font-medium uppercase tracking-wide text-sky-500">{item.category}</p>
                  <p className="mt-1 font-medium text-heading">{item.degree}</p>
                  <p className="mt-2 text-sm text-muted">
                    {item.institution}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                  <p className="mt-1 text-sm text-sky-500">
                    {item.isExpectedCompletion
                      ? `${ui.education.expectedCompletion} ${item.period}`
                      : item.period}
                  </p>
                  {item.grade && (
                    <p className="mt-1 text-sm text-muted">
                      {ui.education.grade} {item.grade}
                    </p>
                  )}
                  {item.skills && item.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 text-xs font-medium text-sky-500"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3 text-sky-500">
              <Award size={20} />
              <h3 className="font-semibold text-heading">{ui.education.certifications}</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.title} className="text-sm leading-relaxed">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${ui.education.viewCertificate}: ${cert.title}`}
                      className="group inline-flex items-start gap-1.5 text-muted-foreground transition hover:text-sky-500"
                    >
                      <span>{cert.title}</span>
                      <ExternalLink
                        size={14}
                        className="mt-0.5 shrink-0 opacity-60 transition group-hover:opacity-100"
                      />
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{cert.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3 text-sky-500">
              <Languages size={20} />
              <h3 className="font-semibold text-heading">{ui.education.languages}</h3>
            </div>
            <ul className="space-y-4">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-start justify-between gap-4 text-sm">
                  <span className="shrink-0 font-medium text-heading">{lang.name}</span>
                  <span className="min-w-0 flex-1 text-right leading-relaxed text-muted">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
