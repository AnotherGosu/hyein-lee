import { Suspense } from "react";

import { getHighlightGeneratives } from "@/api/getHighlightGeneratives";

import { ListFallback } from "@/components/common/Fallback";

import { ListItem } from "./ListItem";

export const HighlightList = () => {
  return (
    <Suspense
      fallback={
        <ListFallback
          length={2}
          className="h-[23rem] sm:h-[29rem]"
        />
      }
    >
      <SuspendedList />
    </Suspense>
  );
};

const SuspendedList = async () => {
  const data = await getHighlightGeneratives();

  return (
    <>
      {data.map((result, idx) => (
        <ListItem
          key={result.uid}
          idx={idx}
          isHighlight
          {...result}
        />
      ))}
    </>
  );
};
