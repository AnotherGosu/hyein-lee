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
          Drawing has been my creative outlet for years, and these pieces
          represent my passion for fine details, textures, and the beauty of
          imperfection that comes with handmade art. From intricate sketches to
          more refined illustrations, these works capture my artistic vision in
          its purest form.
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
