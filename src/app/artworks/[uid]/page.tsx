import { PrismicNextImage } from "@prismicio/next";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { RichText } from "@/components/common/RichText";
import { Heading, Section } from "@/components/common/Typography";

import { createClient } from "@/prismicio";

interface PageProps {
  params: { uid: string };
}

export async function generateMetadata({
  params: { uid },
}: PageProps): Promise<Metadata> {
  const client = createClient();

  const page = await client.getByUID("artwork", uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [
        {
          url: page.data.meta_image.url || "",
          width: page.data.meta_image.dimensions?.width,
          height: page.data.meta_image.dimensions?.height,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("artwork");

  return pages.map(({ uid }) => ({ uid }));
}

export default async function Page({ params: { uid } }: PageProps) {
  const client = createClient();

  const page = await client.getByUID("artwork", uid).catch(() => notFound());

  return (
    <>
      <Section className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:grid-rows-[min-content_1fr]">
        <PrismicNextImage
          field={page.data.image}
          className="pointer-events-none row-span-2 mx-auto max-h-[40rem] w-auto rounded-md xl:max-h-none"
          priority
        />

        <Heading className="row-start-1 xl:col-start-2 xl:text-left">
          {page.data.title}
        </Heading>

        <div className="flex flex-col gap-8">
          <RichText field={page.data.description} />
        </div>
      </Section>
    </>
  );
}
