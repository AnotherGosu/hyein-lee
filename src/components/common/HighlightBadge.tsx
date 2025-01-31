import { PinIcon } from "lucide-react";

import { cn } from "@/utils/cn";

interface HighlightBadgeProps {
  className?: string;
}

export const HighlightBadge = ({ className }: HighlightBadgeProps) => {
  return (
    <div
      className={cn(
        "bg-primary-200/85 absolute top-0 -right-1 size-14 [clip-path:polygon(0_0,100%_0,100%_100%)]",
        className,
      )}
    >
      <PinIcon className="absolute top-2 right-2 size-5" />
    </div>
  );
};
