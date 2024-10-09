import { Heading, Paragpraph, Section } from "@/components/common/Typography";

export const About = () => {
  return (
    <div className="mb-20 bg-primary-100 py-10">
      <Section className="mb-0">
        <Heading>About me</Heading>

        <Paragpraph>
          <b>Hello! I&#39;m Hyein Lee</b>, someone deeply passionate about{" "}
          <i>law, art and AI</i>. I&#39;m always curious about how legal
          principles shape society and eager to explore justice. As an artist, I
          express myself through drawing and love creating works inspired by
          life and imagination. Recently, I&#39;ve been blending my creativity
          with AI tools, pushing the boundaries of traditional art forms by
          generating unique, tech-assisted visuals.
        </Paragpraph>
      </Section>
    </div>
  );
};
