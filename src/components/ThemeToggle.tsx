"use client";

import { Moon, Sun } from "lucide-react";
import { usePortfolioContent } from "@/i18n/I18nProvider";
import { useThemeStore } from "@/store/themeStore";

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const { ui } = usePortfolioContent();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-sky-400/50 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
      aria-label={theme === "dark" ? ui.header.lightMode : ui.header.darkMode}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
