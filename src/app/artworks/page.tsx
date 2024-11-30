import { Metadata } from "next";

import { SearchParams } from "@/types/common";

import { Heading, Paragpraph, Section } from "@/components/common/Typography";

import { HighlightList } from "./components/HighlightList";
import { List } from "./components/List";
import { Pagination } from "./components/Pagination";
import { Search } from "./components/Search";

export const metadata: Metadata = {
  title: "Artworks",
  description: "Explore artworks by Hyein Lee",
};

interface PageProps {
  searchParams: SearchParams;
}

export default function Page({ searchParams }: PageProps) {
  const isHighlightList = Object.keys(searchParams).length === 0;

  return (
    <>
      <Section>
        <Heading>Artworks</Heading>

        <Paragpraph>
          I love to create art about nature, animals and stories of women. In my
          artworks, I combine organic shapes with vibrant colors, expressing
          balance and strength on the canvas.
        </Paragpraph>

        <Search />

        <div className="grid grid-flow-dense auto-rows-[5rem] grid-cols-1 gap-4 sm:auto-rows-[18rem] sm:grid-cols-2">
          {isHighlightList && <HighlightList />}
          <List searchParams={searchParams} />
        </div>

        <Pagination searchParams={searchParams} />
      </Section>
    </>
  );
}
