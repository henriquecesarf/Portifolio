import { isLocale, LOCALE_COOKIE } from "@/lib/locale-cookie";
import type { Locale } from "./types";

export function detectLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return "pt";

  const preferred = acceptLanguage
    .split(",")
    .map((part) => {
      const [language, qualityPart] = part.trim().split(";");
      const quality = qualityPart?.startsWith("q=") ? Number.parseFloat(qualityPart.slice(2)) : 1;

      return {
        language: language.toLowerCase().split("-")[0],
        quality: Number.isFinite(quality) ? quality : 0,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  const hasPortuguese = preferred.some(({ language }) => language === "pt");

  return hasPortuguese ? "pt" : "en";
}

export async function getRequestLocale(): Promise<Locale> {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  const storedLocale = cookieStore.get(LOCALE_COOKIE)?.value;

  if (isLocale(storedLocale)) {
    return storedLocale;
  }

  const { headers } = await import("next/headers");
  const headerStore = await headers();

  return detectLocale(headerStore.get("accept-language"));
}
