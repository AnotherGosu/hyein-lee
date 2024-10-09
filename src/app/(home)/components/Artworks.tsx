import { cn } from "@/utils/cn";

import artworkImage1 from "@/images/artwork-1.jpeg";
import artworkImage2 from "@/images/artwork-2.jpeg";
import artworkImage3 from "@/images/artwork-3.jpeg";

import { ButtonLink } from "@/components/common/ButtonLink";
import { ImageCard } from "@/components/common/ImageCard";
import { Heading, Paragpraph, Section } from "@/components/common/Typography";

export const Artworks = () => {
  return (
    <Section className="mx-auto mb-20 flex max-w-7xl flex-col gap-8 px-4">
      <Heading> Artworks</Heading>

      <Paragpraph>
        Drawing has been my creative outlet for years, and these pieces
        represent my passion for fine details, textures, and the beauty of
        imperfection that comes with handmade art. From intricate sketches to
        more refined illustrations, these works capture my artistic vision in
        its purest form.
      </Paragpraph>

      <div
        className={cn(
          "grid grid-cols-1 grid-rows-3 gap-8 transition-all duration-1000 md:grid-cols-[1fr_1fr] md:grid-rows-[1fr_1fr]",
          "md:has-[a:nth-child(1):hover]:grid-cols-[4fr_3fr]",
          "md:has-[a:nth-child(2):hover]:grid-cols-[3fr_4fr] md:has-[a:nth-child(2):hover]:grid-rows-[4fr_3fr]",
          "md:has-[a:nth-child(3):hover]:grid-cols-[3fr_4fr] md:has-[a:nth-child(3):hover]:grid-rows-[3fr_4fr]",
        )}
      >
        {ARTWORKS.map((item, idx) => (
          <ImageCard
            key={item.title}
            href="/artworks"
            className={cn({
              "h-[300px] md:row-span-2 md:h-[700px]": idx === 0,
            })}
            {...item}
          />
        ))}
      </div>

      <ButtonLink href="/artworks">All artworks</ButtonLink>
    </Section>
  );
};

const ARTWORKS = [
  {
    src: artworkImage1,
    title: "Woman",
    description: "Description of artwork 1",
  },
  {
    src: artworkImage2,
    title: "Peaceful afternoon",
    description: "Description of artwork 2",
  },
  {
    src: artworkImage3,
    title: "Nature",
    description: "Description of artwork 3",
  },
];
