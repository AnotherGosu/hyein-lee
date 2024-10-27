import * as prismic from "@prismicio/client";

import { SearchParams } from "@/types/common";

import { createClient } from "@/prismicio";

export const getArtworks = (searchParams: SearchParams) => {
  const client = createClient();

  return client.getByType("artwork", {
    page: Number(searchParams.page || 1),
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
};
