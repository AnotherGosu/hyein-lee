"use client";

import { FilterIcon, XIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Drawer } from "vaul";

import { Button } from "./Button";

interface FiltersDrawerProps extends React.PropsWithChildren {}

export const FiltersDrawer = ({ children }: FiltersDrawerProps) => {
  const { isOpen, setIsOpen, activeFilters } = useFiltersDrawer();

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      direction="left"
      handleOnly
    >
      <Drawer.Trigger asChild>
        <Button className="relative">
          <FilterIcon />
          Filters
          <ActiveBadge activeFilters={activeFilters} />
        </Button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40" />

        <Drawer.Content className="fixed top-0 bottom-0 left-0 z-50 flex outline-hidden">
          <div className="bg-background w-xs p-6">
            <div className="mb-10">
              <div className="flex items-center justify-between">
                <Drawer.Title className="mb-2 text-2xl font-semibold">
                  Filters
                </Drawer.Title>

                <Button
                  onClick={() => setIsOpen(false)}
                  className="size-6 p-0"
                >
                  <XIcon />
                </Button>
              </div>

              <Drawer.Description>Find the content you need</Drawer.Description>
            </div>

            <div className="flex flex-col gap-6">{children}</div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

const ActiveBadge = ({ activeFilters }: { activeFilters: number }) => {
  if (!activeFilters) return null;

  return (
    <span className="absolute -top-2 -right-2 size-5 rounded-full bg-black text-sm text-white">
      {activeFilters}
    </span>
  );
};

const useFiltersDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const searchParams = useSearchParams();

  let activeFilters = 0;

  for (let param of searchParams) {
    const [name, value] = param;

    if (!OMIT_PARAMS.includes(name)) {
      activeFilters += value.split(",").length;
    }
  }

  return { isOpen, setIsOpen, activeFilters };
};

const OMIT_PARAMS = ["page"];
