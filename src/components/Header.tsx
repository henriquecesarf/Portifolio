"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { usePortfolioContent } from "@/i18n/I18nProvider";

function getSectionId(href: string) {
  return href.startsWith("#") ? href.slice(1) : href;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { profile, navLinks, ui } = usePortfolioContent();
  const sectionIds = navLinks.map((link) => getSectionId(link.href));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(href: string) {
    return activeSection === getSectionId(href);
  }

  const navLinkClass = (href: string) =>
    `relative text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 ${
      isActive(href)
        ? "font-medium text-sky-500"
        : "text-muted-foreground hover:text-sky-500"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="font-display text-sm font-semibold tracking-wide text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
        >
          {profile.name.split(" ")[0]}
          <span className="text-sky-400">.</span>
        </a>

        <div className="hidden items-center gap-5 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClass(link.href)}>
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-sky-500" />
                )}
              </a>
            ))}
          </nav>
          <LocaleSwitcher />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LocaleSwitcher compact />
          <ThemeToggle />
          <button
            type="button"
            className="rounded-md text-muted-foreground transition hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? ui.header.closeMenu : ui.header.openMenu}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <>
          <button
            type="button"
            className="mobile-drawer-backdrop fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setOpen(false)}
            aria-label={ui.header.closeMenu}
          />
          <nav
            className="mobile-drawer-panel fixed inset-y-0 right-0 z-50 flex w-72 flex-col border-l border-border bg-background px-6 py-6 shadow-2xl md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-sm font-semibold text-heading">
                {profile.name.split(" ")[0]}
                <span className="text-sky-400">.</span>
              </span>
              <button
                type="button"
                className="rounded-md text-muted-foreground transition hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                onClick={() => setOpen(false)}
                aria-label={ui.header.closeMenu}
              >
                <X size={22} />
              </button>
            </div>

            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block rounded-lg px-3 py-2.5 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 ${
                      isActive(link.href)
                        ? "bg-sky-500/10 font-medium text-sky-500"
                        : "text-muted-foreground hover:bg-card-hover hover:text-heading"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
