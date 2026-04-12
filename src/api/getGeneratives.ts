import * as prismic from "@prismicio/client";
import { cache } from "react";

import { SearchParams } from "@/types/common";

import { createClient } from "@/prismicio";

export const getGeneratives = cache(
  (searchParams: SearchParams = {}, isHighlight?: boolean) => {
    const { page = 1, search, category, tool, tags } = searchParams;

    const filters: string[] = [];

    if (search) {
      filters.push(
        prismic.filter.fulltext("my.generative.title", search.toString()),
      );
    }

    if (category) {
      filters.push(prismic.filter.at("my.generative.category", category));
    }

    if (tool) {
      filters.push(prismic.filter.at("my.generative.tool", tool));
    }

    if (tags) {
      filters.push(prismic.filter.any("document.tags", tags.split(",")));
    }

    if (isHighlight) {
      filters.push(prismic.filter.at("my.generative.highlight", true));
    }

    return createClient().getByType("generative", {
      page: Number(page),
      filters,
      orderings: [
        { field: "document.first_publication_date", direction: "desc" },
      ],
    });
  },
);
