"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Drawer } from "vaul";

import { Button } from "@/components/common/Button";
import { Tags } from "@/components/icons/Tags";

import { TagButton } from "./TagButton";

interface TagsDrawerProps {
  tags: string[];
}

export const TagsDrawer = ({ tags }: TagsDrawerProps) => {
  const { activeTags, onToggleTag } = useTagsDrawer();

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button className="relative">
          <Tags />
          Tags
          {activeTags.length > 0 && (
            <span className="absolute -top-2 -right-2 size-5 rounded-full bg-black text-sm text-white">
              {activeTags.length}
            </span>
          )}
        </Button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />

        <Drawer.Content
          aria-describedby={undefined}
          className="bg-background fixed right-0 bottom-0 left-0 z-50 p-8 outline-hidden"
        >
          <div className="mx-auto max-w-7xl">
            <Drawer.Title className="mb-4 text-2xl font-semibold">
              Search by tags
            </Drawer.Title>

            <div className="mx-auto flex max-h-96 flex-wrap gap-3 overflow-y-auto">
              {tags.map((tag) => {
                const isActive = activeTags.includes(tag);

                return (
                  <TagButton
                    key={tag}
                    tag={tag}
                    onClick={() => onToggleTag(tag)}
                    isActive={isActive}
                  />
                );
              })}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

const useTagsDrawer = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeTags = searchParams.get("tags")?.split(",") || [];

  const onToggleTag = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (activeTags.includes(value)) {
      const filteredTags = activeTags.filter((tag) => tag !== value);

      if (filteredTags.length === 0) {
        params.delete("tags");
      } else {
        params.set("tags", filteredTags.join(","));
      }
    } else {
      const updatedTags = [...activeTags, value];

      params.set("tags", updatedTags.join(","));
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { activeTags, onToggleTag };
};
