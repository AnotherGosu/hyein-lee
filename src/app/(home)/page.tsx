import { Artworks } from "./components/Artworks";
import { Hero } from "./components/Hero";
import { Prompts } from "./components/Prompts";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="my-20 flex flex-col gap-20">
        <Artworks />
        <Prompts />
      </div>
    </>
  );
}
