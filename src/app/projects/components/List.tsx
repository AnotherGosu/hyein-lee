import { SearchParams } from "@/types/common";

import { getProjects } from "@/api/getProjects";

import { ListItem } from "./ListItem";

interface ListProps {
  searchParams: SearchParams;
}

export const List = async ({ searchParams }: ListProps) => {
  const data = await getProjects(searchParams);

  return (
    <>
      {data.results.map((result, idx) => (
        <ListItem
          key={result.uid}
          isImagePrioprity={idx < 2}
          {...result}
        />
      ))}
    </>
  );
};
