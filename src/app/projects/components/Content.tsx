import { SearchParams } from "@/types/common";

import { getProjects } from "@/api/getProjects";

import { Pagination } from "@/components/common/Pagination";

import { ListItem } from "./ListItem";

interface ContentProps {
  searchParams: SearchParams;
}

export async function Content({ searchParams }: ContentProps) {
  const isHighlight = Object.keys(searchParams).length === 0;

  const [data, higlhights] = await Promise.all([
    getProjects(searchParams),
    getProjects(searchParams, isHighlight),
  ]);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
