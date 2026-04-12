import type { Content } from "@prismicio/client";
import { cache } from "react";

import { SelectOption } from "@/types/common";

import { createClient } from "@/prismicio";

export const getTagOptions = cache(
  async (type: Content.AllDocumentTypes["type"]) => {
    const pages = await createClient().getAllByType(type, {
      graphQuery: `
    {
      ${type} {
        uid
      }
    }`,
    });

    const tags = pages.map((page) => page.tags);

    const unqiueTags = [...new Set(tags.flat())];

    const options: SelectOption[] = unqiueTags.map((tag) => ({
      label: tag,
      value: tag,
    }));

    return options;
  },
);
