import { cn } from "@/utils/cn";

import { Pin } from "@/components/icons/Pin";

interface HighlightBadgeProps {
  className?: string;
}

export const HighlightBadge = ({ className }: HighlightBadgeProps) => {
  return (
    <div
      className={cn(
        "absolute -right-1 top-0 size-14 bg-primary-200/85 [clip-path:polygon(0_0,100%_0,100%_100%)]",
        className,
      )}
    >
      <Pin className="absolute right-2 top-2" />
    </div>
  );
};
