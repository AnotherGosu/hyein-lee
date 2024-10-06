import * as motion from "framer-motion/m";

import { cn } from "@/utils/cn";

import { ButtonLink } from "@/components/common/ButtonLink";
import { ImageCard } from "@/components/common/ImageCard";
import { ArrowRight } from "@/components/icons/ArrowRight";

export const Prompts = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.45 }}
      className="flex flex-col gap-10"
    >
      <h2 className="font-heading text-center text-3xl font-bold uppercase lg:text-4xl">
        Prompts
      </h2>

      <p className="mx-auto max-w-4xl text-center leading-relaxed lg:text-lg">
        By blending my artistic direction with AI tools, I&#39;ve created
        visually stunning and unexpected results, pushing the boundaries of what
        can be achieved with technology. These works are a glimpse into the
        future of art, where imagination meets innovation.
      </p>

      <div
        className={cn(
          "grid grid-cols-1 grid-rows-[1fr_1fr_1fr] gap-8 transition-all duration-1000 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-1",
          "md:has-[div:nth-child(1):hover]:grid-cols-[4fr_3fr_3fr]",
          "md:has-[div:nth-child(2):hover]:grid-cols-[3fr_4fr_3fr]",
          "md:has-[div:nth-child(3):hover]:grid-cols-[3fr_3fr_4fr]",
        )}
      >
        <ImageCard
          src="https://images.unsplash.com/photo-1617076678363-99dd6eb5150b"
          alt="White orange beacon in the middle of the sea"
          title="Beacon"
          description="White orange beacon in the middle of the sea"
          className="h-[300px] md:h-[500px]"
        />

        <ImageCard
          src="https://images.unsplash.com/photo-1573865526739-10659fec78a5"
          alt="Beatiful snow view of mount Fuji"
          title="Mount Fuji"
          description="Beatiful snow view of mount Fuji"
          className="h-[300px] md:h-[500px]"
        />

        <ImageCard
          src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f"
          alt="Pretty golden fish swimming in the pool"
          title="Golden fish"
          description="Pretty golden fish swimming in the pool"
          className="h-[300px] md:h-[500px]"
        />
      </div>

      <ButtonLink
        href="/prompts"
        className="group relative ml-auto pr-10"
      >
        All prompts
        <ArrowRight className="absolute right-3 transition-all ease-in group-hover:right-2" />
      </ButtonLink>
    </motion.section>
  );
};
