import { getTagOptions } from "@/api/getTagOptions";

import { SearchSelect } from "@/components/common/SearchSelect";

export const Filters = async () => {
  const tagOptions = await getTagOptions("project");

  return (
    <>
      <SearchSelect
        label="Tags"
        param="tags"
        options={tagOptions}
        isMulti
      />
    </>
  );
};
