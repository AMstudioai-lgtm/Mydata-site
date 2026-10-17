import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { OG_LOGO_URL } from "@/lib/links";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mydata — Bases de données locales sur Android",
  description:
    "Mydata crée des tableaux personnalisés sur votre téléphone Android. Fonctionne sans internet, vos données restent sur votre appareil.",
  keywords: [
    "Mydata",
    "base de données Android",
    "tableaux personnalisés",
    "application hors-ligne",
    "offline-first",
    "APK Android",
  ],
  authors: [{ name: "Mydata" }],
  openGraph: {
    title: "Mydata — Bases de données locales sur Android",
    description:
      "Des tableaux personnalisés qui fonctionnent sans internet. Vos données restent sur votre appareil.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: OG_LOGO_URL, width: 512, height: 512, alt: "Logo Mydata" }],
  },
  twitter: {
    card: "summary",
    title: "Mydata — Bases de données locales sur Android",
    description:
      "Des tableaux personnalisés qui fonctionnent sans internet. Vos données restent sur votre appareil.",
    images: [OG_LOGO_URL],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://amstudioai-lgtm.github.io/Mydata-site/",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e1e1e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${dmSans.className} ${jetbrainsMono.variable}`}>
      <body className="min-h-full bg-void text-ink antialiased">
        <noscript>
          <style>{".reveal{opacity:1 !important;transform:none !important}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
