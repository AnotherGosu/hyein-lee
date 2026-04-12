import { Metadata } from "next";
import { Suspense } from "react";

import { SearchParams } from "@/types/common";

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
  title: "Artworks",
  description: "Explore artworks by Hyein Lee",
};

interface PageProps {
  searchParams: Promise<SearchParams>;
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;

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

        <Suspense
          fallback={
            <PaginationFallback
              containerClassName="grid grid-flow-dense auto-rows-[5rem] grid-cols-1 gap-4 sm:auto-rows-[18rem] sm:grid-cols-2"
              itemClassName="row-span-3 md:row-span-1"
            />
          }
        >
          <Content searchParams={searchParams} />
        </Suspense>
      </Section>
    </>
  );
}
