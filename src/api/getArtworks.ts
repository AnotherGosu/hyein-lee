import * as prismic from "@prismicio/client";
import { cache } from "react";

import { SearchParams } from "@/types/common";

import { createClient } from "@/prismicio";

export const getArtworks = cache(
  (searchParams: SearchParams = {}, isHighlight?: boolean) => {
    const { page = 1, search, tags } = searchParams;

    const filters: string[] = [];

    if (search) {
      filters.push(
        prismic.filter.fulltext("my.artwork.title", search.toString()),
      );
    }

    if (tags) {
      filters.push(prismic.filter.any("document.tags", tags.split(",")));
    }

    if (isHighlight) {
      filters.push(prismic.filter.at("my.artwork.highlight", true));
    }

    return createClient().getByType("artwork", {
      page: Number(page),
      filters,
      orderings: [
        { field: "document.first_publication_date", direction: "desc" },
      ],
    });
  },
);
