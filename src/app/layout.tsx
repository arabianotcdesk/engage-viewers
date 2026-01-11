import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Engage Viewers — New York Digital Growth & Reputation",
    template: "%s | Engage Viewers",
  },
  description:
    "Engage Viewers helps businesses grow online visibility and trust through strategic review growth, social credibility, and brand management.",
  metadataBase: new URL("https://engage-viewers.example"),
  openGraph: {
    title: "Engage Viewers — Digital Reputation & Social Growth",
    description:
      "Strategy-led review growth, social credibility, and reputation-safe brand management for modern platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engage Viewers",
    description:
      "New York-based digital agency focused on online reputation and social growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased bg-white text-zinc-900">
        <ClientBody>
          <SiteHeader />
          <main className="min-h-[calc(100dvh-64px)]">{children}</main>
          <SiteFooter />
        </ClientBody>
      </body>
    </html>
  );
}
