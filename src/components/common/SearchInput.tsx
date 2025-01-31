"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";

import { cn } from "@/utils/cn";

import { Loading } from "@/components/icons/Loading";

export const SearchInput = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { search, onSearch, isPending } = useSearchInput();

  return (
    <div className="relative grow">
      <SearchIcon className="text-primary-500 absolute top-3 left-3 size-4" />

      <input
        defaultValue={search}
        onChange={(e) => onSearch(e.target.value)}
        className={cn(
          "border-primary-300 bg-primary-50 ring-primary-500 h-10 w-full rounded-md border px-8 font-medium outline-hidden transition",
          "placeholder:text-primary-500 hover:border-primary-400 focus:ring-1",
          className,
        )}
        {...props}
      />

      {isPending && <Loading className="absolute top-3 right-3 size-4" />}
    </div>
  );
};

const useSearchInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  const search = searchParams.get("search") || "";

  const onSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value.toLowerCase());
    } else {
      params.delete("search");
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }, 500);

  return { search, onSearch, isPending };
};
