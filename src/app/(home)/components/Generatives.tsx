import { Suspense } from "react";

import { getFeatures } from "@/api/getFeatures";

import { cn } from "@/utils/cn";

import { ButtonLink } from "@/components/common/ButtonLink";
import { ListFallback } from "@/components/common/Fallback";
import { ImageLink } from "@/components/common/ImageLink";
import { Heading, Paragpraph, Section } from "@/components/common/Typography";

export const Generatives = () => {
  return (
    <Section>
      <Heading>Generatives</Heading>

      <Paragpraph>
        By blending my artistic direction with AI tools, I&#39;ve created
        visually stunning and unexpected results, pushing the boundaries of what
        can be achieved with technology. These works are a glimpse into the
        future of art, where imagination meets innovation.
      </Paragpraph>

      <div
        className={cn(
          "grid grid-cols-1 grid-rows-[23rem_23rem_23rem] gap-4 transition-all duration-1000 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[29rem]",
          "md:has-[a:nth-child(1):hover]:grid-cols-[4fr_3fr_3fr]",
          "md:has-[a:nth-child(2):hover]:grid-cols-[3fr_4fr_3fr]",
          "md:has-[a:nth-child(3):hover]:grid-cols-[3fr_3fr_4fr]",
        )}
      >
        <Suspense fallback={<ListFallback length={3} />}>
          <FeaturedItems />
        </Suspense>
      </div>

      <ButtonLink href="/generatives">All generatives</ButtonLink>
    </Section>
  );
};

const FeaturedItems = async () => {
  const { featuredGeneratives } = await getFeatures();

  return (
    <>
      {featuredGeneratives.map(({ uid, data }) => (
        <ImageLink
          key={uid}
          href={`/generatives/${uid}`}
          image={data.images[0]?.image}
          title={data.title}
          subtitle={data.subtitle}
        />
      ))}
    </>
  );
};
