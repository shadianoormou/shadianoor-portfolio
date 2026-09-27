import type { Metadata } from "next";
import "./globals.css";
import { personal } from "@/data/profile";

const siteUrl = `https://${personal.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shadia Noor Mou | Software Engineer, AI/ML & Full-Stack Developer",
  description:
    "Portfolio of Shadia Noor Mou — a software engineer, AI/ML and full-stack developer, research enthusiast, competitive programmer, IOY Ambassador, and community volunteer from Rajshahi, Bangladesh.",
  keywords: [
    "Shadia Noor Mou",
    "Software Engineer",
    "Full-Stack Developer",
    "AI/ML Engineer",
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
    title: "Shadia Noor Mou | Software Engineer, AI/ML & Full-Stack Developer",
    description:
      "Portfolio of Shadia Noor Mou — software engineer, AI/ML and full-stack developer, research enthusiast, competitive programmer, IOY Ambassador, and community volunteer.",
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
    title: "Shadia Noor Mou | Software Engineer, AI/ML & Full-Stack Developer",
    description:
      "Portfolio of Shadia Noor Mou — software engineer, AI/ML and full-stack developer, research enthusiast, competitive programmer, IOY Ambassador, and community volunteer.",
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
