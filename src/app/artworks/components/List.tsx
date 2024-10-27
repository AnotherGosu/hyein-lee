import { Suspense } from "react";

import { SearchParams } from "@/types/common";

import { getArtworks } from "@/api/getArtworks";

import { getSearchParamsString } from "@/lib/getSearchParamsString";

import { ListFallback } from "@/components/common/Fallback";

import { ListItem } from "./ListItem";

interface ListProps {
  searchParams: SearchParams;
}

export const List = ({ searchParams }: ListProps) => {
  return (
    <Suspense
      key={`${getSearchParamsString(searchParams)}-list`}
      fallback={
        <ListFallback
          length={8}
          className="row-span-3 md:row-span-1"
        />
      }
    >
      <SuspendedList searchParams={searchParams} />
    </Suspense>
  );
};

const SuspendedList = async ({ searchParams }: ListProps) => {
  const data = await getArtworks(searchParams);

  return (
    <>
      {data.results.map((result, idx) => (
        <ListItem
          key={result.uid}
          idx={idx}
          {...result}
        />
      ))}
    </>
  );
};
