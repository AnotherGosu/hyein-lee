import { PrismicPreview } from "@prismicio/next";
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
  description: "Hyein Lee - Artist & AI Creator",
  generator: "Next.js",
  applicationName: "Hyein Lee",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Hyein Lee",
    "Artist",
    "Artworks",
    "AI",
    "AI Images",
    "Generative Images",
    "Generatives",
    "Blog",
  ],
  authors: [
    { name: "Hyein Lee" },
    { name: "Maksim Dubinin", url: "https://anothergosu.com" },
  ],
  creator: "Hyein Lee",
  publisher: "Hyein Lee",
  openGraph: {
    siteName: "Hyein Lee",
    description: "Hyein Lee - Artist & AI Creator",
    url: "https://hyein-lee.vercel.app/",
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
        className={`${lora.variable} font-lora bg-background text-slate-950 antialiased`}
      >
        <div className="flex min-h-svh flex-col">
          <Header />
          <main className="relative grow">{children}</main>
          <Footer />
        </div>

        <ScrollToTopButton />

        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
