import { Suspense } from "react";

import { SearchParams } from "@/types/common";

import { getPosts } from "@/api/getPosts";

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
          length={6}
          className="h-72 md:h-52"
        />
      }
    >
      <SuspendedList searchParams={searchParams} />
    </Suspense>
  );
};

const SuspendedList = async ({ searchParams }: ListProps) => {
  const data = await getPosts(searchParams);

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
