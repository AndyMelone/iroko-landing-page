import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "irokolaw",
  description: "Assitant juridique intéligent pour les professionels du droit.",
  icons: {
    icon: ["/logo.png"],
  },
  keywords: [
    "IROKO LAW",
    "iroko",
    "droit",
    "Afrique francophone ",
    "IA juridique",
    "assistant juridique",
    "assistant juridique intélligent",
    "premier assistant juridique",
    "droit et intélligence artificielle",
    "platforme juridique",
  ],
  openGraph: {
    images: [
      {
        url: "https://iroko-law-solutions.tech/logo.png",
        width: 1200,
        height: 630,
        alt: "Aperçu de IROKO LAW",
      },
    ],
    title: "alia",
    description:
      "Assitant juridique intéligent pour les professionels du droit.",
    url: "https://iroko-law-solutions.tech/",
  },
  twitter: {
    card: "summary_large_image",
    title: "alia",
    description: "Data Technologie FOR Impact",
    images: "https://iroko-law-solutions.tech/images/logo-alia.png",
    creator: "@alia",
    site: "@alia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://iroko-law-solutions.tech/",
    media: {
      "only screen and (max-width: 600px)": "https://iroko-law-solutions.tech/",
    },
    types: {
      "application/rss+xml": "https://iroko-law-solutions.tech/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-6xl mx-auto ">{children}</div>
      </body>
    </html>
  );
}
