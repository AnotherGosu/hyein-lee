import { Metadata } from "next";

import { SearchParams } from "@/types/common";

import { Heading, Paragpraph, Section } from "@/components/common/Typography";

import { HighlightList } from "./components/HighlightList";
import { List } from "./components/List";
import { Search } from "./components/Search";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore blog posts by Hyein Lee",
};

interface PageProps {
  searchParams: SearchParams;
}

export default function Page({ searchParams }: PageProps) {
  const isHighlightList = Object.keys(searchParams).length === 0;

  return (
    <>
      <Section>
        <Heading>Blog</Heading>

        <Paragpraph>
          Exploring the complexities of legal systems, I’m passionate about
          understanding the principles of justice and how laws shape our
          society. Whether it&#39;s case studies or legal theory, I love diving
          deep into the world of law.
        </Paragpraph>

        <Search />

        <div className="flex flex-col gap-8">
          {isHighlightList && <HighlightList />}
          <List searchParams={searchParams} />
        </div>
      </Section>
    </>
  );
}
