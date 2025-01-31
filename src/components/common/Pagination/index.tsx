import { PaginationList } from "./PaginationList";

interface PaginationProps {
  fetcher: () => Promise<{ total_pages: number }>;
}

export const Pagination = async ({ fetcher }: PaginationProps) => {
  const { total_pages } = await fetcher();

  return (
    <nav>
      <PaginationList totalPages={total_pages} />
    </nav>
  );
};
