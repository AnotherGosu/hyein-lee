import { cn } from "@/utils/cn";

import promptImage1 from "@/images/prompt-1.jpeg";
import promptImage2 from "@/images/prompt-2.jpeg";
import promptImage3 from "@/images/prompt-3.jpeg";

import { ButtonLink } from "@/components/common/ButtonLink";
import { ImageCard } from "@/components/common/ImageCard";
import { ArrowRight } from "@/components/icons/ArrowRight";

export const Prompts = () => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="font-heading text-center text-3xl font-bold uppercase md:text-4xl">
        Prompts
      </h2>

      <p className="mx-auto max-w-4xl text-center text-sm leading-relaxed md:text-lg">
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
          src={promptImage1}
          alt="Description of prompt 1"
          title="Prompt 1"
          description="Description of prompt 1"
          className="h-[300px] md:h-[500px]"
        />

        <ImageCard
          src={promptImage2}
          alt="Description of prompt 2"
          title="Prompt 2"
          description="Description of prompt 2"
          className="h-[300px] md:h-[500px]"
        />

        <ImageCard
          src={promptImage3}
          alt="Description of prompt 3"
          title="Prompt 3"
          description="Description of prompt 3"
          className="h-[300px] md:h-[500px]"
        />
      </div>

      <ButtonLink
        href="/prompts"
        className="ml-auto"
      >
        All prompts
        <div className="relative size-5">
          <ArrowRight className="absolute left-0 transition-all ease-in group-hover:left-1" />
        </div>
      </ButtonLink>
    </section>
  );
};
