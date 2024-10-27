import { Suspense } from "react";

import { getHighlightArtworks } from "@/api/getHighlightArtworks";

import { ListFallback } from "@/components/common/Fallback";

import { ListItem } from "./ListItem";

export const HighlightList = () => {
  return (
    <Suspense
      fallback={
        <ListFallback
          length={4}
          className="row-span-3 md:row-span-1"
        />
      }
    >
      <SuspendedList />
    </Suspense>
  );
};

const SuspendedList = async () => {
  const data = await getHighlightArtworks();

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
