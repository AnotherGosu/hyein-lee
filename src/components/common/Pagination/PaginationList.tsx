"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { cn } from "@/utils/cn";

import { ButtonLink } from "@/components/common/ButtonLink";

interface PaginationListProps {
  totalPages: number;
}

export const PaginationList = ({ totalPages }: PaginationListProps) => {
  const { pages, currentPage, getPaginationLink } =
    usePaginationList(totalPages);

  return (
    <ul className="flex flex-wrap gap-2">
      {pages.map((page) => {
        const isDisabled = currentPage === page;

        return (
          <li key={page}>
            <ButtonLink
              href={getPaginationLink(page)}
              aria-label={`Go to page ${page}`}
              className={cn("size-10 p-0", {
                "pointer-events-none opacity-50": isDisabled,
              })}
            >
              {page}
            </ButtonLink>
          </li>
        );
      })}
    </ul>
  );
};

const usePaginationList = (totalPages: number) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") || 1);

  const pages = [...Array(totalPages).keys()].map((key) => key + 1);

  const getPaginationLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }

    return `${pathname}?${params.toString()}`;
  };

  return { pages, currentPage, getPaginationLink };
};
