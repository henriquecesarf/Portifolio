"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { usePortfolioContent } from "@/i18n/I18nProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const { profile, navLinks, ui } = usePortfolioContent();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-sm font-semibold tracking-wide text-heading">
          {profile.name.split(" ")[0]}
          <span className="text-sky-400">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-sky-500"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="text-muted-foreground"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? ui.header.closeMenu : ui.header.openMenu}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-sky-500"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
