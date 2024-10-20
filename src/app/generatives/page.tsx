import { Metadata } from "next";
import { Suspense } from "react";

import { SearchParams } from "@/types/common";

import { getSearchParamsString } from "@/lib/getSearchParamsString";

import {
  ListFallback,
  SearchInputFallback,
  TagSearchFallback,
} from "@/components/common/Fallback";
import { SearchInput } from "@/components/common/SearchInput";
import { TagSearch } from "@/components/common/TagSearch";
import { Heading, Paragpraph, Section } from "@/components/common/Typography";

import { List } from "./components/List";

export const metadata: Metadata = {
  title: "Generatives",
  description: "Explore AI generated images by Hyein Lee",
};

interface PageProps {
  searchParams: SearchParams;
}

export default function Page({ searchParams }: PageProps) {
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

        <div className="flex gap-2">
          <Suspense fallback={<SearchInputFallback />}>
            <SearchInput placeholder="Search by title" />
          </Suspense>

          <Suspense fallback={<TagSearchFallback />}>
            <TagSearch type="generative" />
          </Suspense>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Suspense
            key={getSearchParamsString(searchParams)}
            fallback={
              <ListFallback
                length={8}
                className="h-96 sm:h-[30rem]"
              />
            }
          >
            <List searchParams={searchParams} />
          </Suspense>
        </div>
      </Section>
    </>
  );
}
