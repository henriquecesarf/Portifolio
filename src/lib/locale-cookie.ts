import type { Locale } from "@/i18n/types";

export const LOCALE_COOKIE = "portfolio-locale";

export function isLocale(value: string | undefined): value is Locale {
  return value === "pt" || value === "en";
}

export function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`;
}
