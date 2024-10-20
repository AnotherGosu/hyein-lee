import { Metadata } from "next";

import { About } from "./components/About";
import { Artworks } from "./components/Artworks";
import { Blog } from "./components/Blog";
import { Generatives } from "./components/Generatives";
import { Hero } from "./components/Hero";

export const metadata: Metadata = {
  description: "Hyein Lee - law, art and AI.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Artworks />
      <Generatives />
      <Blog />
    </>
  );
}
