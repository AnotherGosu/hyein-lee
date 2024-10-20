import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Heading, Section } from "@/components/common/Typography";

import { Carousel } from "./components/Carousel";
import { PromptSection } from "./components/PromptSection";
import { TagsSection } from "./components/TagsSection";
import { ToolsSection } from "./components/ToolSection";

import { createClient } from "@/prismicio";

interface PageProps {
  params: { uid: string };
}

export async function generateMetadata({
  params: { uid },
}: PageProps): Promise<Metadata> {
  const client = createClient();

  const page = await client.getByUID("generative", uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("generative");

  return pages.map(({ uid }) => ({ uid }));
}

export default async function Page({ params: { uid } }: PageProps) {
  const client = createClient();

  const page = await client.getByUID("generative", uid).catch(() => notFound());

  return (
    <>
      <Section>
        <Heading>{page.data.title}</Heading>

        <Carousel images={page.data.images} />

        <ToolsSection tool={page.data.tool} />

        <TagsSection tags={page.tags} />

        <PromptSection prompt={page.data.prompt} />
      </Section>
    </>
  );
}
