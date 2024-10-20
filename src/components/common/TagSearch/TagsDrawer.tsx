"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Drawer } from "vaul";

import { cn } from "@/utils/cn";

import { Button } from "@/components/common/Button";
import { Tags } from "@/components/icons/Tags";

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
            <span className="absolute -right-2 -top-2 size-5 rounded-full bg-black text-sm text-white">
              {activeTags.length}
            </span>
          )}
        </Button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />

        <Drawer.Content
          aria-describedby={undefined}
          className="fixed bottom-0 left-0 right-0 z-50 bg-background p-8 outline-none"
        >
          <div className="mx-auto max-w-7xl">
            <Drawer.Title className="mb-4 text-2xl font-semibold">
              Search by tags
            </Drawer.Title>

            <div className="mx-auto flex flex-wrap gap-3">
              {tags.map((tag) => (
                <TagButton
                  key={tag}
                  tag={tag}
                  isActive={activeTags.includes(tag)}
                  onClick={() => onToggleTag(tag)}
                />
              ))}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

const TagButton = ({
  tag,
  isActive,
  onClick,
}: {
  tag: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      key={tag}
      type="button"
      onClick={onClick}
      className={cn(
        "focus-ring rounded-md border border-primary-200 px-2 py-1 hover:bg-primary-100",
        {
          "bg-primary-200": isActive,
        },
      )}
    >
      {tag}
    </button>
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
