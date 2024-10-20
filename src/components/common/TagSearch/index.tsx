import type { Content } from "@prismicio/client";

import { getTags } from "@/api/getTags";

import { TagsDrawer } from "./TagsDrawer";

interface TagSearchProps {
  type: Content.AllDocumentTypes["type"];
}

export const TagSearch = async ({ type }: TagSearchProps) => {
  const tags = await getTags(type);

  return <TagsDrawer tags={tags} />;
};
