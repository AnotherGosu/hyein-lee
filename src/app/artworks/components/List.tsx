import * as prismic from "@prismicio/client";

import { SearchParams } from "@/types/common";

import { ListItem } from "./ListItem";
import { createClient } from "@/prismicio";

interface ListProps {
  searchParams: SearchParams;
}

export const List = async ({ searchParams }: ListProps) => {
  const client = createClient();

  const pages = await client.getAllByType("artwork", {
    filters: [
      prismic.filter.fulltext(
        "my.artwork.title",
        searchParams.search?.toString() || "",
      ),
      prismic.filter.any(
        "document.tags",
        searchParams.tags?.toString().split(",") || [],
      ),
    ],
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return (
    <>
      {pages.map((page, idx) => (
        <ListItem
          key={page.uid}
          idx={idx}
          {...page}
        />
      ))}
    </>
  );
};
