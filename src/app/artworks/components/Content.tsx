import { SearchParams } from "@/types/common";

import { getArtworks } from "@/api/getArtworks";

import { Pagination } from "@/components/common/Pagination";

import { ListItem } from "./ListItem";

interface ContentProps {
  searchParams: SearchParams;
}

export async function Content({ searchParams }: ContentProps) {
  const isHighlight = Object.keys(searchParams).length === 0;

  const [data, highlights] = await Promise.all([
    getArtworks(searchParams),
    getArtworks(searchParams, isHighlight),
  ]);

  return (
    <>
      <div className="grid grid-flow-dense auto-rows-[5rem] grid-cols-1 gap-4 sm:auto-rows-[18rem] sm:grid-cols-2">
        {highlights.results.map((result, idx) => (
          <ListItem key={result.uid} isImagePriority isHighlight {...result} />
        ))}

        {data.results.map((result, idx) => (
          <ListItem key={result.uid} isImagePriority={idx < 2} {...result} />
        ))}
      </div>

      <Pagination totalPages={data.total_pages} />
    </>
  );
}
