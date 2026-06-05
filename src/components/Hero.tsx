"use client";

import { ArrowDown, Mail, MapPin } from "lucide-react";
import { usePortfolioContent } from "@/i18n/I18nProvider";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";

export function Hero() {
  const { profile, ui } = usePortfolioContent();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.15),_transparent_50%)]" />
      <div className="pointer-events-none absolute -right-32 top-32 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-32 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sky-500">
          {profile.tagline}
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl md:text-6xl">
          {ui.hero.greeting}{" "}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            {profile.name.split(" ")[0]} {profile.name.split(" ")[1]}
          </span>
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-xl text-muted-foreground">{profile.title}</p>
        <p className="mx-auto mb-10 flex max-w-md items-center justify-center gap-2 text-sm text-muted">
          <MapPin size={16} className="text-sky-500" />
          {profile.location}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            <Mail size={16} />
            {ui.hero.contact}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-muted-foreground transition hover:border-sky-400/50 hover:text-sky-500"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-muted-foreground transition hover:border-sky-400/50 hover:text-sky-500"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
        </div>

        <a
          href="#sobre"
          className="mt-16 inline-flex animate-bounce flex-col items-center gap-2 text-muted transition hover:text-sky-500"
          aria-label={ui.hero.scrollAria}
        >
          <span className="text-xs uppercase tracking-widest">{ui.hero.explore}</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
