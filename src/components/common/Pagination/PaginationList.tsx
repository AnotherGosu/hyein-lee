"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
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
    <ul className="flex justify-center gap-4">
      <div className="flex gap-1">
        <ButtonLink
          href={getPaginationLink(1)}
          aria-label="Go to first page"
          className={cn("size-8 p-0", {
            "pointer-events-none opacity-50": currentPage === 1,
          })}
        >
          <ChevronsLeftIcon />
        </ButtonLink>

        <ButtonLink
          href={getPaginationLink(currentPage - 1)}
          aria-label="Go to previous page"
          className={cn("size-8 p-0", {
            "pointer-events-none opacity-50": currentPage === 1,
          })}
        >
          <ChevronLeftIcon />
        </ButtonLink>
      </div>

      <div className="flex gap-1">
        {pages.map((page) => {
          const isDisabled = currentPage === page;

          return (
            <li key={page}>
              <ButtonLink
                href={getPaginationLink(page)}
                aria-label={`Go to page ${page}`}
                className={cn("size-8 p-0", {
                  "pointer-events-none opacity-50": isDisabled,
                })}
              >
                {page}
              </ButtonLink>
            </li>
          );
        })}
      </div>

      <div className="flex gap-1">
        <ButtonLink
          href={getPaginationLink(currentPage + 1)}
          aria-label="Go to next page"
          className={cn("size-8 p-0", {
            "pointer-events-none opacity-50": currentPage === totalPages,
          })}
        >
          <ChevronRightIcon />
        </ButtonLink>

        <ButtonLink
          href={getPaginationLink(totalPages)}
          aria-label="Go to last page"
          className={cn("size-8 p-0", {
            "pointer-events-none opacity-50": currentPage === totalPages,
          })}
        >
          <ChevronsRightIcon />
        </ButtonLink>
      </div>
    </ul>
  );
};

const usePaginationList = (totalPages: number) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") || 1);

  const start = currentPage < 4 ? 0 : currentPage - 3;
  const end = currentPage < 4 ? 5 : currentPage + 2;

  const pages = [...Array(totalPages).keys()]
    .map((key) => key + 1)
    .slice(start, end);

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
