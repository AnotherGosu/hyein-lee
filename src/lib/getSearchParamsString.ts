import { SearchParams } from "@/types/common";

export const getSearchParamsString = (searchParams: SearchParams): string => {
  const entries = Object.entries(searchParams);

  const pairs = entries.map(([key, value]) => `${key}=${value}`);

  return pairs.join("&");
};
