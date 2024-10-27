import { Suspense } from "react";

import { getHighlightPosts } from "@/api/getHighlightPosts";

import { ListFallback } from "@/components/common/Fallback";

import { ListItem } from "./ListItem";

export const HighlightList = () => {
  return (
    <Suspense
      fallback={
        <ListFallback
          length={2}
          className="h-72 md:h-52"
        />
      }
    >
      <SuspendedList />
    </Suspense>
  );
};

const SuspendedList = async () => {
  const data = await getHighlightPosts();

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
