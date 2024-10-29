import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import { RichText } from "@/components/common/RichText";
import { Title } from "@/components/common/Typography";

export const Layout = ({ data }: Content.ArtworkDocument) => {
  return (
    <>
      <Title>{data.title}</Title>

      <PrismicNextImage
        field={data.image}
        className="pointer-events-none mx-auto max-h-[30rem] w-fit rounded-md"
        priority
      />

      <RichText field={data.description} />
    </>
  );
};
