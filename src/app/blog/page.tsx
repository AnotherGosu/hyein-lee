import { Metadata } from "next";

import { SearchParams } from "@/types/common";

import { Heading, Paragpraph, Section } from "@/components/common/Typography";

import { HighlightList } from "./components/HighlightList";
import { List } from "./components/List";
import { Pagination } from "./components/Pagination";
import { Search } from "./components/Search";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore blog posts by Hyein Lee",
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
        <Heading>Blog</Heading>

        <Paragpraph>
          I created this space to explore and share valuable insights into the
          complex world of law. Here, you&#39;ll find articles on legal
          developments, case analyses, practical advice, and commentary.
        </Paragpraph>

        <Search />

        <div className="flex flex-col gap-8">
          {isHighlightList && <HighlightList />}
          <List searchParams={searchParams} />
        </div>

        <Pagination searchParams={searchParams} />
      </Section>
    </>
  );
}
