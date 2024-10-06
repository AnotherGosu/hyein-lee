import { IconProps } from "@/types/common";

import { cn } from "@/utils/cn";

export const ArrowRight = ({ className }: IconProps) => {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-5", className)}
    >
      <title>Arrow right</title>
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
    </svg>
  );
};
