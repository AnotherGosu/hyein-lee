import { SearchParams } from "@/types/common";

import { getPosts } from "@/api/getPosts";

import { Pagination } from "@/components/common/Pagination";

import { ListItem } from "./ListItem";

interface ContentProps {
  searchParams: SearchParams;
}

export async function Content({ searchParams }: ContentProps) {
  const isHighlight = Object.keys(searchParams).length === 0;

  const [data, higlhights] = await Promise.all([
    getPosts(searchParams),
    getPosts(searchParams, isHighlight),
  ]);

  return (
    <>
      <div className="flex flex-col gap-8">
        {isHighlight &&
          higlhights.results.map((result) => (
            <ListItem
              key={result.uid}
              isImagePriority
              isHighlight
              {...result}
            />
          ))}

        {data.results.map((result, idx) => (
          <ListItem key={result.uid} isImagePriority={idx < 2} {...result} />
        ))}
      </div>

      <Pagination totalPages={data.total_pages} />
    </>
  );
}
