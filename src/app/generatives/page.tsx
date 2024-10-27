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
  searchParams: SearchParams;
}

export default function Page({ searchParams }: PageProps) {
  const isHighlightList = Object.keys(searchParams).length === 0;

  return (
    <>
      <Section>
        <Heading>Generatives</Heading>

        <Paragpraph>
          By blending my artistic direction with AI tools, I&#39;ve created
          visually stunning and unexpected results, pushing the boundaries of
          what can be achieved with technology. These works are a glimpse into
          the future of art, where imagination meets innovation.
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
