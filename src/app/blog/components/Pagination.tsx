import { Suspense } from "react";

import { SearchParams } from "@/types/common";

import { getPosts } from "@/api/getPosts";

import { getSearchParamsString } from "@/lib/getSearchParamsString";

import { PaginationFallback } from "@/components/common/Fallback";
import { PaginationNav } from "@/components/common/PaginationNav";

interface PaginationProps {
  searchParams: SearchParams;
}

export const Pagination = ({ searchParams }: PaginationProps) => {
  return (
    <Suspense
      key={`${getSearchParamsString(searchParams)}-pagination`}
      fallback={<PaginationFallback />}
    >
      <SuspendedPagination searchParams={searchParams} />
    </Suspense>
  );
};

const SuspendedPagination = async ({ searchParams }: PaginationProps) => {
  const { total_pages } = await getPosts(searchParams);

  return <PaginationNav totalPages={total_pages} />;
};
