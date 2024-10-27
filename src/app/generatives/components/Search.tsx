import { Suspense } from "react";

import { getTags } from "@/api/getTags";

import {
  SearchInputFallback,
  TagSearchFallback,
} from "@/components/common/Fallback";
import { SearchInput } from "@/components/common/SearchInput";
import { TagsDrawer } from "@/components/common/TagsDrawer";

export const Search = () => {
  return (
    <div className="flex gap-2">
      <Suspense fallback={<SearchInputFallback />}>
        <SearchInput placeholder="Search by title" />
      </Suspense>

      <Suspense fallback={<TagSearchFallback />}>
        <SuspendedTagsDrawer />
      </Suspense>
    </div>
  );
};

const SuspendedTagsDrawer = async () => {
  const tags = await getTags("generative");

  return <TagsDrawer tags={tags} />;
};
