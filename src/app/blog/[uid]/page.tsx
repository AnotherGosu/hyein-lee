import { PrismicNextImage } from "@prismicio/next";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { RichText } from "@/components/common/RichText";
import { Section, Title } from "@/components/common/Typography";

import { createClient } from "@/prismicio";

interface PageProps {
  params: { uid: string };
}

export async function generateMetadata({
  params: { uid },
}: PageProps): Promise<Metadata> {
  const client = createClient();

  const page = await client.getByUID("post", uid).catch(() => notFound());

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

  const pages = await client.getAllByType("post");

  return pages.map(({ uid }) => ({ uid }));
}

export default async function Page({ params: { uid } }: PageProps) {
  const client = createClient();

  const page = await client.getByUID("post", uid).catch(() => notFound());

  return (
    <>
      <Section>
        <Title>{page.data.title}</Title>

        <PrismicNextImage
          field={page.data.image}
          alt=""
          className="max-h-[30rem] rounded-md object-cover"
        />

        <RichText field={page.data.content} />
      </Section>
    </>
  );
}
