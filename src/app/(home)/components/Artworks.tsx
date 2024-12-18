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
        I love to create art about nature, animals and stories of women. In my
        artworks, I combine organic shapes with vibrant colors, expressing
        balance and strength on the canvas.
      </Paragpraph>

      <div
        className={cn(
          "grid auto-rows-[5rem] grid-cols-1 gap-4 transition-all duration-1000 sm:grid-cols-[1fr_1fr] sm:grid-rows-[18rem_18rem]",
          "sm:has-[a:nth-child(1):focus]:grid-cols-[4fr_3fr] sm:has-[a:nth-child(1):hover]:grid-cols-[4fr_3fr]",
          "sm:has-[a:nth-child(2):hover]:grid-cols-[3fr_4fr] sm:has-[a:nth-child(2):hover]:grid-rows-[20rem_16rem]",
          "sm:has-[a:nth-child(2):focus]:grid-cols-[3fr_4fr] sm:has-[a:nth-child(2):focus]:grid-rows-[20rem_16rem]",
          "sm:has-[a:nth-child(3):hover]:grid-cols-[3fr_4fr] sm:has-[a:nth-child(3):hover]:grid-rows-[16rem_20rem]",
          "sm:has-[a:nth-child(3):focus]:grid-cols-[3fr_4fr] sm:has-[a:nth-child(3):focus]:grid-rows-[16rem_20rem]",
        )}
      >
        <Suspense
          fallback={
            <>
              <div className="fallback row-span-4 sm:row-span-2" />
              <div className="fallback row-span-3 sm:row-span-1" />
              <div className="fallback row-span-3 sm:row-span-1" />
            </>
          }
        >
          <FeaturedItems />
        </Suspense>
      </div>

      <ButtonLink href="/artworks">All Artworks</ButtonLink>
    </Section>
  );
};

const FeaturedItems = async () => {
  const { featuredArtworks } = await getFeatures();

  return (
    <>
      {featuredArtworks.map(({ uid, data }, idx) => {
        let subtitle = "";

        if (data.description[0]?.type === "paragraph") {
          subtitle = data.description[0].text;
        }

        return (
          <ImageLink
            key={uid}
            href={`/artworks/${uid}`}
            image={data.image}
            title={data.title}
            subtitle={subtitle}
            className={cn("row-span-3 sm:row-span-1", {
              "row-span-4 sm:row-span-2": idx === 0,
            })}
          />
        );
      })}
    </>
  );
};
