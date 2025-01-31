import { getTagOptions } from "@/api/getTagOptions";

import {
  GENERATIVE_CATEGORY_OPTIONS,
  GENERATIVE_TOOL_OPTIONS,
} from "@/constants/options";

import { SearchSelect } from "@/components/common/SearchSelect";

export const Filters = async () => {
  const tagOptions = await getTagOptions("generative");

  return (
    <>
      <SearchSelect
        label="Category"
        param="category"
        options={GENERATIVE_CATEGORY_OPTIONS}
      />

      <SearchSelect
        label="Tool"
        param="tool"
        options={GENERATIVE_TOOL_OPTIONS}
      />

      <SearchSelect
        label="Tags"
        param="tags"
        options={tagOptions}
        isMulti
      />
    </>
  );
};
