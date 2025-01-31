import { Metadata } from "next";
import { Suspense } from "react";

import { SearchParams } from "@/types/common";

import { getPosts } from "@/api/getPosts";

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
  title: "Blog",
  description: "Explore various blog posts",
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
        <Heading>Blog</Heading>

        <Paragpraph>
          I created this space to explore and share valuable insights into the
          complex world of law. Here, you&#39;ll find articles on legal
          developments, case analyses, practical advice, and commentary.
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

        <div className="flex flex-col gap-8">
          <Suspense
            key={`${getSearchParamsString(searchParams)}-list`}
            fallback={
              <ListFallback
                length={6}
                className="h-72 md:h-52"
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
          <Pagination fetcher={() => getPosts(searchParams)} />
        </Suspense>
      </Section>
    </>
  );
}
