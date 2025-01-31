"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useOptimistic, useTransition } from "react";
import Select from "react-select";

import { SelectOption } from "@/types/common";

import { cn } from "@/utils/cn";

interface SearchSelectProps {
  label: string;
  param: string;
  options: SelectOption[];
  isMulti?: boolean;
}

export const SearchSelect = ({
  label,
  param,
  options,
  isMulti = false,
}: SearchSelectProps) => {
  const { optimisticValue, onSelect, isPending } = useSearchSelect({
    param,
    options,
  });

  return (
    <div>
      <label
        htmlFor={param}
        className="mb-1 block text-sm"
      >
        {label}
      </label>

      <Select
        id={param}
        value={optimisticValue}
        options={options}
        onChange={onSelect as any}
        isMulti={isMulti}
        isLoading={isPending}
        isClearable
        classNames={{
          control: ({ isFocused }) =>
            cn(
              "!border-primary-300 !rounded-md !bg-primary-50 !text-sm !font-medium",
              "hover:!border-primary-400",
              { "!ring-primary-500 !ring-1": isFocused },
            ),
          option: ({ isSelected, isFocused }) =>
            cn("active:!bg-primary-300 ", {
              "!bg-primary-200": isFocused,
              "hover:!bg-primary-200": !isSelected,
              "!bg-primary-500 !text-primary-50": isSelected,
            }),
        }}
      />
    </div>
  );
};

const useSearchSelect = ({
  param,
  options,
}: Pick<SearchSelectProps, "param" | "options">) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const defaultQuery = searchParams.get(param);

  const defaultValues = defaultQuery?.split(",") || [];

  const defaultValue = options.filter((option) =>
    defaultValues.includes(option.value),
  );

  const [isPending, startTransition] = useTransition();
  const [optimisticValue, setOptimisticValue] =
    useOptimistic<SelectValue>(defaultValue);

  const onSelect = (select: SelectValue) => {
    const params = new URLSearchParams(searchParams.toString());

    if (Array.isArray(select)) {
      const values = select.map((option) => option.value);

      if (values.length) {
        params.set(param, values.join(","));
      } else {
        params.delete(param);
      }
    } else {
      if (select) {
        params.set(param, select.value);
      } else {
        params.delete(param);
      }
    }

    startTransition(() => {
      setOptimisticValue(select);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  return { optimisticValue, onSelect, isPending };
};

type SelectValue = SelectOption | SelectOption[] | null;
