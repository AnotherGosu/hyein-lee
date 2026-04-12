import { Metadata } from "next";
import { Suspense } from "react";

import { SearchParams } from "@/types/common";

import { getSearchParamsString } from "@/lib/getSearchParamsString";

import {
  PaginationFallback,
  SearchInputFallback,
} from "@/components/common/Fallback";
import { FiltersDrawer } from "@/components/common/FiltersDrawer";
import { SearchInput } from "@/components/common/SearchInput";
import { Heading, Paragpraph, Section } from "@/components/common/Typography";

import { Content } from "./components/Content";
import { Filters } from "./components/Filters";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore self-made projects",
};

interface PageProps {
  searchParams: Promise<SearchParams>;
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;

  return (
    <>
      <Section>
        <Heading>Projects</Heading>

        <Paragpraph>
          Explore a curated collection of original projects that integrate
          design, technology, and strategic thinking—from conceptual lifestyle
          visions and branding systems to advanced legal-tech applications.
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

        <Suspense
          key={`${getSearchParamsString(searchParams)}-list`}
          fallback={
            <PaginationFallback
              containerClassName="grid grid-cols-1 gap-8 md:grid-cols-2"
              itemClassName="h-92 sm:h-116"
            />
          }
        >
          <Content searchParams={searchParams} />
        </Suspense>
      </Section>
    </>
  );
}
