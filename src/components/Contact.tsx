"use client";

import { Mail, Phone } from "lucide-react";
import { usePortfolioContent } from "@/i18n/I18nProvider";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const { profile, ui } = usePortfolioContent();

  return (
    <section id="contato" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={ui.contact.eyebrow}
          title={ui.contact.title}
          description={ui.contact.description}
          centered
        />

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-sky-400/40"
          >
            <div className="rounded-xl bg-sky-500/10 p-3 text-sky-400">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">{ui.contact.email}</p>
              <p className="text-sm font-medium text-white">{profile.email}</p>
            </div>
          </a>

          <a
            href={`tel:${profile.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-sky-400/40"
          >
            <div className="rounded-xl bg-sky-500/10 p-3 text-sky-400">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">{ui.contact.phone}</p>
              <p className="text-sm font-medium text-white">{profile.phone}</p>
            </div>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-sky-400/40"
          >
            <div className="rounded-xl bg-sky-500/10 p-3 text-sky-400">
              <LinkedInIcon size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">LinkedIn</p>
              <p className="text-sm font-medium text-white">henrique-cesar-06338222b</p>
            </div>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-sky-400/40"
          >
            <div className="rounded-xl bg-sky-500/10 p-3 text-sky-400">
              <GitHubIcon size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">GitHub</p>
              <p className="text-sm font-medium text-white">henriquecesarf</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
