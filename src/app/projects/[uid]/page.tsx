import { PrismicNextImage } from "@prismicio/next";
import { Metadata } from "next";

import { ExternalLink } from "@/components/common/ExternalLink";
import { RichText } from "@/components/common/RichText";
import { Section, Title } from "@/components/common/Typography";

import { createClient } from "@/prismicio";

interface PageProps {
  params: Promise<{ uid: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { uid } = await props.params;

  const { data } = await createClient().getByUID("project", uid);

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

export async function generateStaticParams() {
  const pages = await createClient().getAllByType("project");

  return pages.map(({ uid }) => ({ uid }));
}

export default async function Page(props: PageProps) {
  const { uid } = await props.params;

  const { data } = await createClient().getByUID("project", uid);

  return (
    <>
      <Section>
        <Title>{data.title}</Title>

        <PrismicNextImage
          field={data.image}
          alt=""
          className="max-h-[30rem] rounded-md object-contain"
        />

        <RichText field={data.description} />

        <ExternalLink href={data.link.text}>Purchase</ExternalLink>
      </Section>
    </>
  );
}
