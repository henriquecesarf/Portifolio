"use client";

import { useEffect, useState } from "react";

function getHeaderOffset() {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-height")
    .trim();

  if (value.endsWith("rem")) {
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return parseFloat(value) * rootFontSize;
  }

  if (value.endsWith("px")) {
    return parseFloat(value);
  }

  return 72;
}

function getSectionTop(section: HTMLElement) {
  return section.getBoundingClientRect().top + window.scrollY;
}

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => {
        const element = document.getElementById(id);
        return element ? { id, element } : null;
      })
      .filter((section): section is { id: string; element: HTMLElement } => section !== null);

    if (sections.length === 0) return;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + getHeaderOffset() + 48;
      let current = sections[0].id;

      for (const { id, element } of sections) {
        if (getSectionTop(element) <= scrollPosition) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
