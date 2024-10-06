import * as motion from "framer-motion/m";

import { cn } from "@/utils/cn";

import { ButtonLink } from "@/components/common/ButtonLink";
import { ImageCard } from "@/components/common/ImageCard";
import { ArrowRight } from "@/components/icons/ArrowRight";

export const Artworks = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.45 }}
      className="flex flex-col gap-10"
    >
      <h2 className="font-heading text-center text-3xl font-bold uppercase lg:text-4xl">
        Artworks
      </h2>

      <p className="mx-auto max-w-4xl text-center leading-relaxed lg:text-lg">
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
          src="https://images.unsplash.com/photo-1581062972297-d75ef635df5b"
          alt="White orange beacon in the middle of the sea"
          title="Beacon"
          description="White orange beacon in the middle of the sea"
          className="row-span-2 h-[400px] sm:h-[700px]"
        />

        <ImageCard
          src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65"
          alt="Beatiful snow view of mount Fuji"
          title="Mount Fuji"
          description="Beatiful snow view of mount Fuji"
        />

        <ImageCard
          src="https://images.unsplash.com/photo-1511857543145-0c6865f84a50"
          alt="Pretty golden fish swimming in the pool"
          title="Golden fish"
          description="Pretty golden fish swimming in the pool"
        />
      </div>

      <ButtonLink
        href="/artworks"
        className="group relative ml-auto pr-10"
      >
        All artworks
        <ArrowRight className="absolute right-3 transition-all ease-in group-hover:right-2" />
      </ButtonLink>
    </motion.section>
  );
};
