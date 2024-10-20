import type { Content } from "@prismicio/client";

import { createClient } from "@/prismicio";

export const getTags = async (type: Content.AllDocumentTypes["type"]) => {
  const client = createClient();

  const pages = await client.getAllByType(type, {
    graphQuery: `
    {
      ${type} {
        uid
      }
    }`,
  });

  const tags = pages.map((page) => page.tags);

  const unqiueTags = [...new Set(tags.flat())];

  return unqiueTags;
};
