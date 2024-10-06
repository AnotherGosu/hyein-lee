import { cn } from "@/utils/cn";

import artworkImage1 from "@/images/artwork-1.jpeg";
import artworkImage2 from "@/images/artwork-2.jpeg";
import artworkImage3 from "@/images/artwork-3.jpeg";

import { ButtonLink } from "@/components/common/ButtonLink";
import { ImageCard } from "@/components/common/ImageCard";
import { ArrowRight } from "@/components/icons/ArrowRight";

export const Artworks = () => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="font-heading text-center text-3xl font-bold uppercase md:text-4xl">
        Artworks
      </h2>

      <p className="mx-auto max-w-4xl text-center text-sm leading-relaxed md:text-lg">
        Drawing has been my creative outlet for years, and these pieces
        represent my passion for fine details, textures, and the beauty of
        imperfection that comes with handmade art. From intricate sketches to
        more refined illustrations, these works capture my artistic vision in
        its purest form.
      </p>

      <div
        className={cn(
          "grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-4 transition-all duration-1000 sm:gap-8",
          "has-[div:nth-child(1):hover]:grid-cols-[4fr_3fr]",
          "has-[div:nth-child(2):hover]:grid-cols-[3fr_4fr] has-[div:nth-child(2):hover]:grid-rows-[4fr_3fr]",
          "has-[div:nth-child(3):hover]:grid-cols-[3fr_4fr] has-[div:nth-child(3):hover]:grid-rows-[3fr_4fr]",
        )}
      >
        <ImageCard
          src={artworkImage1}
          alt="Description of artwork 1"
          title="Woman"
          description="Description of artwork 1"
          className="row-span-2 h-[400px] sm:h-[700px]"
        />

        <ImageCard
          src={artworkImage2}
          alt="Description of artwork 2"
          title="Peaceful afternoon"
          description="Description of artwork 2"
        />

        <ImageCard
          src={artworkImage3}
          alt="Description of artwork 3"
          title="Nature"
          description="Description of artwork 3"
        />
      </div>

      <ButtonLink
        href="/artworks"
        className="ml-auto"
      >
        All artworks
        <div className="relative size-5">
          <ArrowRight className="absolute left-0 transition-all ease-in group-hover:left-1" />
        </div>
      </ButtonLink>
    </section>
  );
};
