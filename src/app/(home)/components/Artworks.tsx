import { Suspense } from "react";

import { getFeatures } from "@/api/getFeatures";

import { cn } from "@/utils/cn";

import { ButtonLink } from "@/components/common/ButtonLink";
import { ImageLink } from "@/components/common/ImageLink";
import { Heading, Paragpraph, Section } from "@/components/common/Typography";

export const Artworks = () => {
  return (
    <Section>
      <Heading>Artworks</Heading>

      <Paragpraph>
        Drawing has been my creative outlet for years, and these pieces
        represent my passion for fine details, textures, and the beauty of
        imperfection that comes with handmade art. From intricate sketches to
        more refined illustrations, these works capture my artistic vision in
        its purest form.
      </Paragpraph>

      <div
        className={cn(
          "grid grid-cols-1 grid-rows-4 gap-8 transition-all duration-1000 md:grid-cols-[1fr_1fr] md:grid-rows-[1fr_1fr]",
          "md:has-[a:nth-child(1):hover]:grid-cols-[4fr_3fr]",
          "md:has-[a:nth-child(2):hover]:grid-cols-[3fr_4fr] md:has-[a:nth-child(2):hover]:grid-rows-[4fr_3fr]",
          "md:has-[a:nth-child(3):hover]:grid-cols-[3fr_4fr] md:has-[a:nth-child(3):hover]:grid-rows-[3fr_4fr]",
        )}
      >
        <Suspense
          fallback={
            <>
              <div className="fallback row-span-2 h-[40rem]" />
              <div className="fallback" />
              <div className="fallback" />
            </>
          }
        >
          <FeaturedItems />
        </Suspense>
      </div>

      <ButtonLink href="/artworks">All artworks</ButtonLink>
    </Section>
  );
};

const FeaturedItems = async () => {
  const { featuredArtworks } = await getFeatures();

  return (
    <>
      {featuredArtworks.map(({ uid, data }, idx) => (
        <ImageLink
          key={uid}
          href={`/artworks/${uid}`}
          image={data.image}
          title={data.title}
          subtitle={data.subtitle}
          className={cn({ "row-span-2 h-[40rem]": idx === 0 })}
        />
      ))}
    </>
  );
};
