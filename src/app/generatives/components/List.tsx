import { Suspense } from "react";

import { SearchParams } from "@/types/common";

import { getGeneratives } from "@/api/getGeneratives";

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
          className="h-[23rem] sm:h-[29rem]"
        />
      }
    >
      <SuspendedList searchParams={searchParams} />
    </Suspense>
  );
};

const SuspendedList = async ({ searchParams }: ListProps) => {
  const data = await getGeneratives(searchParams);

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
