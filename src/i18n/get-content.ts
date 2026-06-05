import { contentEn } from "./content/en";
import { contentPt } from "./content/pt";
import type { Locale, PortfolioContent } from "./types";

const contentByLocale: Record<Locale, PortfolioContent> = {
  pt: contentPt,
  en: contentEn,
};

export function getContent(locale: Locale): PortfolioContent {
  return contentByLocale[locale];
}
