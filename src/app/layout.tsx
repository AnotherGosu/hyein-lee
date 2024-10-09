import { domAnimation, LazyMotion } from "framer-motion";
import { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";

import { Drawer } from "./components/Drawer";

import "./globals.css";

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
  title: "Hyein Lee",
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
          className={`${headlineFont.variable} ${paragraphFont.variable} text-paragraph font-paragraph bg-background antialiased`}
        >
          <Drawer />

          {children}
        </body>
      </LazyMotion>
    </html>
  );
}
