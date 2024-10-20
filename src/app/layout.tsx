import { PrismicPreview } from "@prismicio/next";
import { domAnimation, LazyMotion } from "framer-motion";
import { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

import "./globals.css";
import { repositoryName } from "@/prismicio";

const headlineFont = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-headline",
});

const paragraphFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-paragraph",
});

export const metadata: Metadata = {
  title: { default: "Hyein Lee", template: "%s | Hyein Lee" },
  description: "Hyein Lee - law, art and AI.",
  generator: "Next.js",
  applicationName: "Hyein Lee",
  referrer: "origin-when-cross-origin",
  keywords: ["Hyein Lee", "Law", "Art", "AI"],
  authors: [
    { name: "Hyein Lee" },
    { name: "Maksim Dubinin", url: "https://anothergosu.com" },
  ],
  creator: "Hyein Lee",
  publisher: "Hyein Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LazyMotion features={domAnimation}>
        <body
          className={`${headlineFont.variable} ${paragraphFont.variable} bg-background font-paragraph text-paragraph antialiased`}
        >
          <div className="flex min-h-svh flex-col">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </div>

          <ScrollToTopButton />

          <PrismicPreview repositoryName={repositoryName} />
        </body>
      </LazyMotion>
    </html>
  );
}
