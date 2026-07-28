import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayoub | Lead Full Stack Developer | Spécialiste SaaS, ERP & CRM",
  description: "Développeur Full Stack Senior avec 5+ ans d'expérience. Conception d'applications web modernes, SaaS, ERP, CRM et e-commerce sur-mesure. Solutions rapides, sécurisées et optimisées SEO.",
  keywords: [
    "développeur full stack",
    "freelance full stack",
    "développeur next.js",
    "développeur laravel",
    "création de SaaS",
    "développement ERP",
    "développement CRM",
    "expert react typescript",
    "développeur senior web",
  ],
  authors: [{ name: "Ayoub", url: "https://ayoube.dev" }],
  creator: "Ayoub",
  publisher: "Ayoub",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ayoube.dev",
    title: "Ayoub | Lead Full Stack Developer | Spécialiste SaaS, ERP & CRM",
    description: "Développeur Full Stack Senior avec 5+ ans d'expérience. Conception d'applications web modernes, SaaS, ERP, CRM et e-commerce sur-mesure.",
    siteName: "Ayoub Portfolio",
    images: [
      {
        url: "https://ayoube.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayoub - Lead Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayoub | Lead Full Stack Developer",
    description: "Développeur Full Stack Senior avec 5+ ans d'expérience. Spécialiste SaaS, ERP & CRM.",
    images: ["https://ayoube.dev/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ayoube.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      {/* <body className="min-h-full flex flex-col bg-[#030303] text-[#f5f5f7] antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body> */}
      <body className="min-h-full flex flex-col bg-[#030303] text-[#f5f5f7] antialiased selection:bg-indigo-500/30 selection:text-white">
  {children}
  <Analytics />
</body>
    </html>
  );
}
