import { Metadata } from "next";

import { SearchParams } from "@/types/common";

import { Heading, Paragpraph, Section } from "@/components/common/Typography";

import { HighlightList } from "./components/HighlightList";
import { List } from "./components/List";
import { Pagination } from "./components/Pagination";
import { Search } from "./components/Search";

export const metadata: Metadata = {
  title: "Generatives",
  description: "Explore AI generated images by Hyein Lee",
};

interface PageProps {
  searchParams: Promise<SearchParams>;
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;

  const isHighlightList = Object.keys(searchParams).length === 0;

  return (
    <>
      <Section>
        <Heading>Generatives</Heading>

        <Paragpraph>
          Transforming architectural and interior design concepts into AI
          generated-art is my passion. With tools like MidJourney, I’m
          experimenting with parameters to produce unique, high-quality imagery
          that sparks imagination.
        </Paragpraph>

        <Search />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {isHighlightList && <HighlightList />}
          <List searchParams={searchParams} />
        </div>

        <Pagination searchParams={searchParams} />
      </Section>
    </>
  );
}
