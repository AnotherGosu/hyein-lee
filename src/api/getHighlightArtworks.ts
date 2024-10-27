import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";

export const getHighlightArtworks = () => {
  const client = createClient();

  return client.getAllByType("artwork", {
    filters: [prismic.filter.at("my.artwork.highlight", true)],
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
};
