import { SearchParams } from "@/types/common";

import { getProjects } from "@/api/getProjects";

import { ListItem } from "./ListItem";

interface ListProps {
  searchParams?: SearchParams;
  isHighlight?: "true" | "false";
}

export const List = async ({ searchParams, isHighlight }: ListProps) => {
  const data = await getProjects(searchParams, isHighlight);

  return (
    <>
      {data.results.map((result, idx) => (
        <ListItem
          key={result.uid}
          isImagePriority={isHighlight === "true" || idx < 2}
          isHighlight={isHighlight === "true"}
          {...result}
        />
      ))}
    </>
  );
};
