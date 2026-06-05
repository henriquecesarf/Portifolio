"use client";

import { GraduationCap, Languages, Award } from "lucide-react";
import { usePortfolioContent } from "@/i18n/I18nProvider";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  const { education, certifications, languages, ui } = usePortfolioContent();

  return (
    <section id="formacao" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={ui.education.eyebrow}
          title={ui.education.title}
          description={ui.education.description}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3 text-sky-400">
              <GraduationCap size={20} />
              <h3 className="font-semibold text-white">{ui.education.graduation}</h3>
            </div>
            <p className="font-medium text-white">{education.degree}</p>
            <p className="mt-2 text-sm text-slate-400">
              {education.institution} · {education.location}
            </p>
            <p className="mt-1 text-sm text-sky-400">
              {ui.education.expectedCompletion} {education.expectedCompletion}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3 text-sky-400">
              <Award size={20} />
              <h3 className="font-semibold text-white">{ui.education.certifications}</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm leading-relaxed text-slate-300">
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3 text-sky-400">
              <Languages size={20} />
              <h3 className="font-semibold text-white">{ui.education.languages}</h3>
            </div>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li key={lang.name} className="flex justify-between text-sm">
                  <span className="font-medium text-white">{lang.name}</span>
                  <span className="text-slate-400">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
