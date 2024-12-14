import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section } from "@/components/common/Typography";

import { Layout } from "./components/Layout";
import { TallLayout } from "./components/TallLayout";

import { createClient } from "@/prismicio";

interface PageProps {
  params: Promise<{ uid: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { uid } = await props.params;

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

export default async function Page(props: PageProps) {
  const { uid } = await props.params;

  const client = createClient();

  const document = await client
    .getByUID("artwork", uid)
    .catch(() => notFound());

  return (
    <>
      <Section>
        {document.data.tall ? (
          <TallLayout {...document} />
        ) : (
          <Layout {...document} />
        )}
      </Section>
    </>
  );
}
