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
  title: "Artworks",
  description: "Explore artworks by Hyein Lee",
};

interface PageProps {
  searchParams: SearchParams;
}

export default function Page({ searchParams }: PageProps) {
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

        <div className="flex gap-2">
          <Suspense fallback={<SearchInputFallback />}>
            <SearchInput placeholder="Search by title" />
          </Suspense>

          <Suspense fallback={<TagSearchFallback />}>
            <TagSearch type="artwork" />
          </Suspense>
        </div>

        <div className="grid grid-flow-dense auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Suspense
            key={getSearchParamsString(searchParams)}
            fallback={
              <ListFallback
                length={9}
                className="min-h-80 md:min-h-60"
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
