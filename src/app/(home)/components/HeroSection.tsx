import Image from "next/image";

import heroImage from "@/images/hero.png";

import { Paragpraph, Section } from "@/components/common/Typography";

export const HeroSection = () => {
  return (
    <Section>
      <h1 className="border-t border-b border-slate-950 py-4 text-center text-5xl tracking-wider uppercase sm:text-7xl md:text-9xl">
        Hyein Lee
      </h1>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <Paragpraph className="order-2 text-center lg:order-1 lg:text-left">
          Hi, I’m <b>Hyein Lee</b>, a law enthusiast, artist and AI creator.
          Welcome to my blog, where I share insights about law, my artistic
          journey, AI experiments, and various creative projects. Explore my
          website and feel free to reach out for collaboration or work
          opportunities.
        </Paragpraph>

        <Image
          src={heroImage}
          alt="Portrait of Hyein Lee"
          priority
          className="order-1 mx-auto max-h-[30rem] w-auto lg:order-2 lg:max-h-max"
        />
      </div>
    </Section>
  );
};
