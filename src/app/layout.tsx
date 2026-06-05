import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ServiceWorkerCleanup } from "@/components/ServiceWorkerCleanup";
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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang={content.htmlLang} className={`${inter.variable} scroll-smooth`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: serviceWorkerCleanupScript }} />
      </head>
      <body className="min-h-screen bg-[#0a0f1a] font-sans text-slate-200 antialiased">
        <ServiceWorkerCleanup />
        <I18nProvider content={content}>{children}</I18nProvider>
      </body>
    </html>
  );
}
