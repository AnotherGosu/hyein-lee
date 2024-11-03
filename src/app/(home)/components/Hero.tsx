import Image from "next/image";

import heroImage from "@/images/hero.png";

import { Paragpraph, Section } from "@/components/common/Typography";

export const Hero = () => {
  return (
    <Section>
      <h1 className="border-b border-t border-slate-950 py-4 text-center text-5xl uppercase tracking-wider sm:text-7xl md:text-9xl">
        Hyein Lee
      </h1>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <Paragpraph className="order-2 text-center lg:order-1 lg:text-left">
          <b>Hello! I&#39;m Hyein Lee</b>, someone deeply passionate about{" "}
          <i>law, art and AI</i>. I&#39;m always curious about how legal
          principles shape society and eager to explore justice. As an artist, I
          express myself through drawing and love creating works inspired by
          life and imagination. Recently, I&#39;ve been blending my creativity
          with AI tools, pushing the boundaries of traditional art forms by
          generating unique, tech-assisted visuals.
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
