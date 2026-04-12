import { getTagOptions } from "@/api/getTagOptions";

import { SearchSelect } from "@/components/common/SearchSelect";

export async function Filters() {
  const tagOptions = await getTagOptions("post");

  return (
    <>
      <SearchSelect label="Tags" param="tags" options={tagOptions} isMulti />
    </>
  );
}
