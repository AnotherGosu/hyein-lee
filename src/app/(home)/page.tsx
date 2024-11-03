import { Metadata } from "next";

import { Artworks } from "./components/Artworks";
import { Blog } from "./components/Blog";
import { Generatives } from "./components/Generatives";
import { Hero } from "./components/Hero";

export const metadata: Metadata = {
  description: "Hyein Lee - Artist and AI Creator",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Artworks />
      <Generatives />
      <Blog />
    </>
  );
}
