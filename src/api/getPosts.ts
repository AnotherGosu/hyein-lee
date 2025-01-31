import * as prismic from "@prismicio/client";

import { SearchParams } from "@/types/common";

import { createClient } from "@/prismicio";

export const getPosts = (
  searchParams: SearchParams = {},
  isHighlight: "true" | "false" = "false",
) => {
  const { page = 1, search, tags } = searchParams;

  const filters: string[] = [];

  if (search) {
    filters.push(prismic.filter.fulltext("my.post.title", search.toString()));
  }

  if (tags) {
    filters.push(prismic.filter.any("document.tags", tags.split(",")));
  }

  if (isHighlight === "true") {
    filters.push(prismic.filter.at("my.post.highlight", true));
  }

  return createClient().getByType("post", {
    page: Number(page),
    filters,
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
};
