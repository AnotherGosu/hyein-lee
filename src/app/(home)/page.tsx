import { About } from "./components/About";
import { Artworks } from "./components/Artworks";
import { Blog } from "./components/Blog";
import { Hero } from "./components/Hero";
import { Images } from "./components/Images";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Blog />
      <Artworks />
      <Images />
    </main>
  );
}
