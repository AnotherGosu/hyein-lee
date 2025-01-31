import * as prismic from "@prismicio/client";

import { SearchParams } from "@/types/common";

import { createClient } from "@/prismicio";

export const getProjects = (searchParams: SearchParams) => {
  const { page = 1, search, tags } = searchParams;

  const filters: string[] = [];

  if (search) {
    filters.push(
      prismic.filter.fulltext("my.project.title", search.toString()),
    );
  }

  if (tags) {
    filters.push(prismic.filter.any("document.tags", tags.split(",")));
  }

  return createClient().getByType("project", {
    page: Number(page),
    filters,
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
};
