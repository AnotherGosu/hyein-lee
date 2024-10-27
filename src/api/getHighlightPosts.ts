import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";

export const getHighlightPosts = () => {
  const client = createClient();

  return client.getAllByType("post", {
    filters: [prismic.filter.at("my.post.highlight", true)],
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
};
