import { PrismicNextImage } from "@prismicio/next";
import { Metadata } from "next";

import { cn } from "@/utils/cn";

import { PLACEHOLDER } from "@/constants/common";

import { RichText } from "@/components/common/RichText";
import { Section, Title } from "@/components/common/Typography";

import { createClient } from "@/prismicio";

interface PageProps {
  params: Promise<{ uid: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { uid } = await props.params;

  const { data } = await createClient().getByUID("artwork", uid);

  return {
    title: data.meta_title,
    description: data.meta_description,
    openGraph: {
      images: [
        {
          url: data.meta_image.url || "",
          width: data.meta_image.dimensions?.width,
          height: data.meta_image.dimensions?.height,
        },
      ],
    },
  };
}

export default async function Page(props: PageProps) {
  const { uid } = await props.params;

  const { data } = await createClient().getByUID("artwork", uid);

  const isTallImage = data.tall;

  return (
    <Section>
      <div
        className={cn("contents", {
          "md:grid md:grid-cols-2 md:grid-rows-[max-content_1fr] md:gap-8":
            isTallImage,
        })}
      >
        <Title className={cn({ "md:col-start-2 md:text-left": isTallImage })}>
          {data.title}
        </Title>

        <PrismicNextImage
          field={data.image}
          className={cn(
            "pointer-events-none mx-auto max-h-[30rem] w-fit rounded-md",
            { "row-span-2 row-start-1 w-fit md:max-h-full": isTallImage },
          )}
          priority
          placeholder={PLACEHOLDER}
        />

        <RichText field={data.description} />
      </div>
    </Section>
  );
}
