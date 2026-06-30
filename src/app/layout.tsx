import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ServiceWorkerCleanup } from "@/components/ServiceWorkerCleanup";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getContent } from "@/i18n/get-content";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getRequestLocale } from "@/i18n/locale";
import "./globals.css";

const serviceWorkerCleanupScript = `
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      registrations.forEach(function (registration) {
        registration.unregister();
      });
    });
  }
`;

const themeInitScript = `
  (function () {
    try {
      var raw = localStorage.getItem("portfolio-theme");
      var theme = "dark";
      if (raw) {
        var parsed = JSON.parse(raw);
        theme = parsed.state && parsed.state.theme === "light" ? "light" : "dark";
      }
      document.documentElement.setAttribute("data-theme", theme);
    } catch (error) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  })();
`;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { profile } = getContent(locale);

  return {
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    keywords: [
      "Front-end",
      "Mobile",
      "React Native",
      "Expo",
      "React",
      "TypeScript",
      "Next.js",
      "Developer",
      "Henrique Cesar",
    ],
    authors: [{ name: profile.name, url: profile.linkedin }],
    openGraph: {
      title: `${profile.name} | ${profile.title}`,
      description: profile.summary,
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();
  const content = getContent(locale);

  return (
    <html
      lang={content.htmlLang}
      className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: serviceWorkerCleanupScript }} />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ServiceWorkerCleanup />
        <ThemeProvider>
          <I18nProvider content={content}>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
