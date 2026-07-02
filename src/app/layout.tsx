import type { Metadata } from "next";
import "./globals.css";
import { personal } from "@/data/profile";

const siteUrl = `https://${personal.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shadia Noor Mou | Full-Stack Web Developer & AI/ML Enthusiast",
  description:
    "Professional portfolio of Shadia Noor Mou, a CSE graduate, full-stack developer, AI/ML enthusiast, and competitive programmer from Rajshahi, Bangladesh.",
  keywords: [
    "Shadia Noor Mou",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Machine Learning",
    "Competitive Programmer",
    "Rajshahi",
    "Bangladesh",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: personal.name, url: siteUrl }],
  creator: personal.name,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shadia Noor Mou | Full-Stack Web Developer & AI/ML Enthusiast",
    description:
      "Professional portfolio of Shadia Noor Mou, a CSE graduate, full-stack developer, AI/ML enthusiast, and competitive programmer from Rajshahi, Bangladesh.",
    url: siteUrl,
    siteName: "Shadia Noor Mou",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 782,
        height: 1280,
        alt: personal.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadia Noor Mou | Full-Stack Web Developer & AI/ML Enthusiast",
    description:
      "Professional portfolio of Shadia Noor Mou, a CSE graduate, full-stack developer, AI/ML enthusiast, and competitive programmer from Rajshahi, Bangladesh.",
    images: ["/assets/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
