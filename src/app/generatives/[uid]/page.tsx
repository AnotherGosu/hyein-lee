import { Metadata } from "next";

import { Carousel } from "@/components/common/Carousel";
import { Section, Title } from "@/components/common/Typography";

import { CategorySection } from "./components/CategorySection";
import { PromptSection } from "./components/PromptSection";
import { TagsSection } from "./components/TagsSection";
import { ToolSection } from "./components/ToolSection";

import { createClient } from "@/prismicio";

interface PageProps {
  params: Promise<{ uid: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { uid } = await props.params;

  const { data } = await createClient().getByUID("generative", uid);

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
  const pages = await createClient().getAllByType("generative");

  return pages.map(({ uid }) => ({ uid }));
}

export default async function Page(props: PageProps) {
  const { uid } = await props.params;

  const { data, tags } = await createClient().getByUID("generative", uid);

  return (
    <>
      <Section>
        <Title>{data.title}</Title>

        <Carousel images={data.images} />

        <CategorySection category={data.category} />

        <ToolSection tool={data.tool} />

        <TagsSection tags={tags} />

        <PromptSection prompt={data.prompt} />
      </Section>
    </>
  );
}
