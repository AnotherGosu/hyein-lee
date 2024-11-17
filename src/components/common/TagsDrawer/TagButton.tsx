import { memo } from "react";

import { cn } from "@/utils/cn";

interface TagButtonProps {
  tag: string;
  isActive: boolean;
  onClick: () => void;
}

export const TagButton = memo(function MemoTagButton({
  tag,
  isActive,
  onClick,
}: TagButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-md border border-primary-300 px-2 py-1 outline-none transition",
        "hover:border-primary-400 hover:bg-primary-300 focus:border-primary-400 focus:bg-primary-300 active:bg-primary-400",
        {
          "bg-primary-600 text-white hover:bg-primary-500 focus:bg-primary-500 active:bg-primary-400":
            isActive,
        },
      )}
    >
      {tag}
    </button>
  );
});
