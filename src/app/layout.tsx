import { domAnimation, LazyMotion } from "framer-motion";
import { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";

import { Drawer } from "./components/Drawer";

import "./globals.css";

const headingFont = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const textFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-text",
});

export const metadata: Metadata = {
  title: "Hyein Lee",
  description: "Hyein Lee - artist and lawyer",
  generator: "Next.js",
  applicationName: "Hyein Lee",
  referrer: "origin-when-cross-origin",
  keywords: ["Hyein Lee", "Artist", "Lawyer"],
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
          className={`${headingFont.variable} ${textFont.variable} font-text bg-background antialiased`}
        >
          <Drawer />

          <main className="mx-auto min-h-svh max-w-7xl px-4">{children}</main>
        </body>
      </LazyMotion>
    </html>
  );
}
