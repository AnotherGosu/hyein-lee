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
  title: "Blog",
  description: "Explore various blog posts",
};

interface PageProps {
  searchParams: Promise<SearchParams>;
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;

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

        <Suspense
          key={`${getSearchParamsString(searchParams)}-list`}
          fallback={
            <PaginationFallback
              containerClassName="flex flex-col gap-8"
              itemClassName="h-72 md:h-52"
            />
          }
        >
          <Content searchParams={searchParams} />
        </Suspense>
      </Section>
    </>
  );
}
