import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ServiceWorkerCleanup } from "@/components/ServiceWorkerCleanup";
import "./globals.css";
import { profile } from "@/data/profile";

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

export const metadata: Metadata = {
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
    "Desenvolvedor",
    "Henrique Cesar",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: serviceWorkerCleanupScript }} />
      </head>
      <body className="min-h-screen bg-[#0a0f1a] font-sans text-slate-200 antialiased">
        <ServiceWorkerCleanup />
        {children}
      </body>
    </html>
  );
}
