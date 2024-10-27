import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";

export const getHighlightGeneratives = () => {
  const client = createClient();

  return client.getAllByType("generative", {
    filters: [prismic.filter.at("my.generative.highlight", true)],
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
};
