"use client";

import { createContext, useContext } from "react";
import type { PortfolioContent } from "./types";

const I18nContext = createContext<PortfolioContent | null>(null);

export function I18nProvider({
  content,
  children,
}: {
  content: PortfolioContent;
  children: React.ReactNode;
}) {
  return <I18nContext.Provider value={content}>{children}</I18nContext.Provider>;
}

export function usePortfolioContent(): PortfolioContent {
  const content = useContext(I18nContext);

  if (!content) {
    throw new Error("usePortfolioContent must be used within I18nProvider");
  }

  return content;
}
