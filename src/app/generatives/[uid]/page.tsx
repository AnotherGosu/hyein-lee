import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section, Title } from "@/components/common/Typography";

import { Carousel } from "./components/Carousel";
import { PromptSection } from "./components/PromptSection";
import { TagsSection } from "./components/TagsSection";
import { ToolsSection } from "./components/ToolSection";

import { createClient } from "@/prismicio";

interface PageProps {
  params: Promise<{ uid: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { uid } = await props.params;

  const client = createClient();

  const page = await client.getByUID("generative", uid).catch(() => notFound());

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

  const pages = await client.getAllByType("generative");

  return pages.map(({ uid }) => ({ uid }));
}

export default async function Page(props: PageProps) {
  const { uid } = await props.params;

  const client = createClient();

  const page = await client.getByUID("generative", uid).catch(() => notFound());

  return (
    <>
      <Section>
        <Title>{page.data.title}</Title>

        <Carousel images={page.data.images} />

        <ToolsSection tool={page.data.tool} />

        <TagsSection tags={page.tags} />

        <PromptSection prompt={page.data.prompt} />
      </Section>
    </>
  );
}
