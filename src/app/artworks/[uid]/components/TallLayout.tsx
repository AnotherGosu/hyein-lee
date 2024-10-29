import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import { RichText } from "@/components/common/RichText";
import { Title } from "@/components/common/Typography";

export const TallLayout = ({ data }: Content.ArtworkDocument) => {
  return (
    <div className="contents grid-cols-2 grid-rows-[max-content_1fr] gap-8 md:grid">
      <Title className="md:col-start-2 md:text-left">{data.title}</Title>

      <PrismicNextImage
        field={data.image}
        className="pointer-events-none row-span-2 row-start-1 mx-auto max-h-[30rem] w-fit rounded-md md:max-h-full"
        priority
      />

      <RichText field={data.description} />
    </div>
  );
};
