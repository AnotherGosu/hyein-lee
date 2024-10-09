import { cn } from "@/utils/cn";

import promptImage1 from "@/images/prompt-1.jpeg";
import promptImage2 from "@/images/prompt-2.jpeg";
import promptImage3 from "@/images/prompt-3.jpeg";

import { ButtonLink } from "@/components/common/ButtonLink";
import { ImageCard } from "@/components/common/ImageCard";
import { Heading, Paragpraph, Section } from "@/components/common/Typography";

export const Images = () => {
  return (
    <Section>
      <Heading>AI Images</Heading>

      <Paragpraph>
        By blending my artistic direction with AI tools, I&#39;ve created
        visually stunning and unexpected results, pushing the boundaries of what
        can be achieved with technology. These works are a glimpse into the
        future of art, where imagination meets innovation.
      </Paragpraph>

      <div
        className={cn(
          "grid grid-cols-1 grid-rows-[1fr_1fr_1fr] gap-8 transition-all duration-1000 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-1",
          "md:has-[a:nth-child(1):hover]:grid-cols-[4fr_3fr_3fr]",
          "md:has-[a:nth-child(2):hover]:grid-cols-[3fr_4fr_3fr]",
          "md:has-[a:nth-child(3):hover]:grid-cols-[3fr_3fr_4fr]",
        )}
      >
        {PROMPTS.map((item) => (
          <ImageCard
            key={item.title}
            href="/images"
            className="h-[300px] md:h-[500px]"
            {...item}
          />
        ))}
      </div>

      <ButtonLink href="/images">All images</ButtonLink>
    </Section>
  );
};

const PROMPTS = [
  {
    src: promptImage1,
    title: "Image 1",
    description: "Description of image 1",
  },
  {
    src: promptImage2,
    title: "Image 2",
    description: "Description of image 2",
  },
  {
    src: promptImage3,
    title: "Image 3",
    description: "Description of image 3",
  },
];
