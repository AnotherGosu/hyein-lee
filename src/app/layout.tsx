import { PrismicPreview } from "@prismicio/next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Lora } from "next/font/google";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

import "./globals.css";
import { repositoryName } from "@/prismicio";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: { default: "Hyein Lee", template: "%s | Hyein Lee" },
  description: "Hyein Lee - law enthusiast, artist and AI creator.",
  generator: "Next.js",
  applicationName: "Hyein Lee",
  keywords: [
    "Hyein Lee",
    "Art",
    "Artworks",
    "AI",
    "Generative Images",
    "Law",
    "Blog",
  ],
  authors: [
    { name: "Hyein Lee" },
    { name: "Maksim Dubinin", url: "https://anothergosu.com/" },
  ],
  creator: "Hyein Lee",
  publisher: "Hyein Lee",
  openGraph: {
    siteName: "Hyein Lee",
    description: "Hyein Lee - law enthusiast, artist and AI creator.",
    url: "https://www.hyeinnovate.com/",
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
        className={`${lora.variable} bg-background font-lora text-slate-950 antialiased`}
      >
        <div className="flex min-h-svh flex-col">
          <Header />
          <main className="relative grow">{children}</main>
          <Footer />
        </div>

        <ScrollToTopButton />

        <PrismicPreview repositoryName={repositoryName} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
