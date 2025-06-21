import { Metadata } from "next";
import { Suspense } from "react";

import { SearchParams } from "@/types/common";

import { getProjects } from "@/api/getProjects";

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
  title: "Projects",
  description: "Explore self-made projects",
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
        <Heading>Projects</Heading>

        <Paragpraph>
          Take a look at unique self-made projects, from beautifully illustrated
          picture books to aesthetically designed calendars
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Suspense
            key={`${getSearchParamsString(searchParams)}-list`}
            fallback={
              <ListFallback
                length={4}
                className="h-[23rem] sm:h-[29rem]"
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
          <Pagination fetcher={() => getProjects(searchParams)} />
        </Suspense>
      </Section>
    </>
  );
}
