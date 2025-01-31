import { Metadata } from "next";
import { Suspense } from "react";

import { SearchParams } from "@/types/common";

import { getArtworks } from "@/api/getArtworks";

import { getSearchParamsString } from "@/lib/getSearchParamsString";

import {
  ListFallback,
  PaginationFallback,
  SearchInputFallback,
} from "@/components/common/Fallback";
import { FiltersDrawer } from "@/components/common/FiltersDrawer";
import { Pagination } from "@/components/common/Pagination";
import { SearchInput } from "@/components/common/SearchInput";
import { Heading, Paragpraph, Section } from "@/components/common/Typography";

import { Filters } from "./components/Filters";
import { List } from "./components/List";

export const metadata: Metadata = {
  title: "Artworks",
  description: "Explore artworks by Hyein Lee",
};

interface PageProps {
  searchParams: Promise<SearchParams>;
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;

  // Show only on "blank" page with no filters or pagination applied
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

        <div className="flex gap-2">
          <Suspense fallback={<SearchInputFallback />}>
            <SearchInput placeholder="Search by title" />
          </Suspense>

          <FiltersDrawer>
            <Suspense>
              <Filters />
            </Suspense>
          </FiltersDrawer>
        </div>

        <div className="grid grid-flow-dense auto-rows-[5rem] grid-cols-1 gap-4 sm:auto-rows-[18rem] sm:grid-cols-2">
          <Suspense
            fallback={
              <ListFallback
                length={4}
                className="row-span-3 md:row-span-1"
              />
            }
          >
            {isHighlightList && <List isHighlight="true" />}

            <List searchParams={searchParams} />
          </Suspense>
        </div>

        <Suspense
          key={`${getSearchParamsString(searchParams)}-pagination`}
          fallback={<PaginationFallback />}
        >
          <Pagination fetcher={() => getArtworks(searchParams)} />
        </Suspense>
      </Section>
    </>
  );
}
