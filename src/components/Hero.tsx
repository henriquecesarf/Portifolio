"use client";

import { ArrowDown, Mail, MapPin } from "lucide-react";
import { usePortfolioContent } from "@/i18n/I18nProvider";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";

function HeroVisual({ tagline }: { tagline: string }) {
  const technologies = tagline.split("•").map((item) => item.trim());

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-sky-500/20 via-transparent to-indigo-500/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-card/80 p-6 shadow-xl backdrop-blur-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-xs text-muted">stack.ts</span>
        </div>

        <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-muted-foreground">
          <code>
            <span className="text-violet-400">const</span>{" "}
            <span className="text-sky-400">developer</span> = {"{"}
            {"\n"}
            {"  "}
            <span className="text-sky-400">focus</span>:{" "}
            <span className="text-emerald-400">&quot;front-end &amp; mobile&quot;</span>,{"\n"}
            {"  "}
            <span className="text-sky-400">stack</span>: [
            {"\n"}
            {technologies.map((tech, index) => (
              <span key={tech}>
                {"    "}
                <span className="text-amber-300">&quot;{tech}&quot;</span>
                {index < technologies.length - 1 ? "," : ""}
                {"\n"}
              </span>
            ))}
            ],{"\n"}
            {"  "}
            <span className="text-sky-400">delivery</span>:{" "}
            <span className="text-emerald-400">&quot;production-ready&quot;</span>
            {"\n"}
            {"}"};
          </code>
        </pre>
      </div>
    </div>
  );
}

export function Hero() {
  const { profile, ui } = usePortfolioContent();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.15),_transparent_50%)]" />
      <div className="pointer-events-none absolute -right-32 top-32 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-32 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sky-500">
            {profile.tagline}
          </p>
          <h1 className="font-display mb-6 text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl md:text-6xl">
            {ui.hero.greeting}{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              {profile.name.split(" ")[0]} {profile.name.split(" ")[1]}
            </span>
          </h1>
          <p className="mb-4 max-w-2xl text-xl text-muted-foreground lg:mx-0 mx-auto">
            {profile.title}
          </p>
          <p className="mb-10 flex max-w-md items-center justify-center gap-2 text-sm text-muted lg:justify-start lg:mx-0 mx-auto">
            <MapPin size={16} className="text-sky-500" />
            {profile.location}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail size={16} />
              {ui.hero.contact}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-muted-foreground transition hover:border-sky-400/50 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-muted-foreground transition hover:border-sky-400/50 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
          </div>

          <a
            href="#sobre"
            className="mt-16 inline-flex flex-col items-center gap-2 text-muted transition hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 lg:items-start"
            aria-label={ui.hero.scrollAria}
          >
            <span className="text-xs uppercase tracking-widest">{ui.hero.explore}</span>
            <ArrowDown size={20} className="animate-pulse" />
          </a>
        </div>

        <div className="hidden lg:block">
          <HeroVisual tagline={profile.tagline} />
        </div>
      </div>
    </section>
  );
}
