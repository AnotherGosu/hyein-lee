"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { cn } from "@/utils/cn";

import { ButtonLink } from "./ButtonLink";

interface PaginationNavProps {
  totalPages: number;
}

export const PaginationNav = ({ totalPages }: PaginationNavProps) => {
  const { pages, currentPage, getPaginationLink } = usePagination(totalPages);

  return (
    <nav>
      <ul className="flex gap-2">
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
    </nav>
  );
};

const usePagination = (totalPages: number) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") || 1);

  const pages = [...Array(totalPages).keys()].map((key) => key + 1);

  const getPaginationLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("page");

    if (page !== 1) {
      params.set("page", page.toString());
    }

    return `${pathname}?${params.toString()}`;
  };

  return { pages, currentPage, getPaginationLink };
};
