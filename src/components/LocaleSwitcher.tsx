"use client";

import { usePortfolioContent } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/types";
import { setLocaleCookie } from "@/lib/locale-cookie";

const locales: Locale[] = ["pt", "en"];

export function LocaleSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, ui } = usePortfolioContent();

  function handleChange(nextLocale: Locale) {
    if (nextLocale === locale) return;
    setLocaleCookie(nextLocale);
    window.location.reload();
  }

  return (
    <div
      className={`inline-flex rounded-full border border-border p-0.5 ${compact ? "" : ""}`}
      role="group"
      aria-label={ui.header.language}
    >
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <button
            key={item}
            type="button"
            onClick={() => handleChange(item)}
            aria-pressed={isActive}
            aria-label={item === "pt" ? ui.header.switchToPortuguese : ui.header.switchToEnglish}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 ${
              isActive
                ? "bg-sky-500 text-white"
                : "text-muted-foreground hover:text-sky-500"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
