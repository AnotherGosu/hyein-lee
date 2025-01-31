import { FeaturedGenerative } from "@/types/feautres";

import { cn } from "@/utils/cn";

import { ImageLink } from "@/components/common/ImageLink";
import { Heading, Paragpraph, Section } from "@/components/common/Typography";

import { ArrowButtonLink } from "./ArrowButtonLink";

interface GeenrativeSectionProps {
  featuredGeneratives: FeaturedGenerative[];
}

export const GenerativeSection = ({
  featuredGeneratives,
}: GeenrativeSectionProps) => {
  return (
    <Section>
      <Heading>Generatives</Heading>

      <Paragpraph>
        Transforming architectural and interior design concepts into AI
        generated-art is my passion. With tools like MidJourney, I’m
        experimenting with parameters to produce unique, high-quality imagery
        that sparks imagination.
      </Paragpraph>

      <div
        className={cn(
          "grid grid-cols-1 grid-rows-[23rem_23rem_23rem] gap-4 transition-all duration-1000 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[29rem]",
          "md:has-[a:nth-child(1):focus]:grid-cols-[4fr_3fr_3fr] md:has-[a:nth-child(1):hover]:grid-cols-[4fr_3fr_3fr]",
          "md:has-[a:nth-child(2):focus]:grid-cols-[3fr_4fr_3fr] md:has-[a:nth-child(2):hover]:grid-cols-[3fr_4fr_3fr]",
          "md:has-[a:nth-child(3):focus]:grid-cols-[3fr_3fr_4fr] md:has-[a:nth-child(3):hover]:grid-cols-[3fr_3fr_4fr]",
        )}
      >
        {featuredGeneratives.map(({ uid, data }) => (
          <ImageLink
            key={uid}
            href={`/generatives/${uid}`}
            image={data.images[0]?.image}
            title={data.title}
            subtitle={data.subtitle}
          />
        ))}
      </div>

      <ArrowButtonLink href="/generatives">All Generatives</ArrowButtonLink>
    </Section>
  );
};
