"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { cn } from "@/utils/cn";

export const SearchInput = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { search, onSearch } = useSearchInput();

  return (
    <input
      defaultValue={search}
      onChange={(e) => onSearch(e.target.value)}
      className={cn(
        "h-10 grow rounded-md border border-primary-300 bg-primary-50 px-3 text-sm font-medium outline-none ring-primary-500 transition",
        "placeholder:text-primary-500 hover:border-primary-400 focus:ring-1",
        className,
      )}
      {...props}
    />
  );
};

const useSearchInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const search = searchParams.get("search") || "";

  const onSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value.toLowerCase());
    } else {
      params.delete("search");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 500);

  return { search, onSearch };
};
