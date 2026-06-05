"use client";

import { usePortfolioContent } from "@/i18n/I18nProvider";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}

export function Footer() {
  const { profile, ui } = usePortfolioContent();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © {year} {profile.name}. {ui.footer.rights}
        </p>
        <p>{ui.footer.builtWith}</p>
      </div>
    </footer>
  );
}
