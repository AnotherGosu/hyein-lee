import { IconProps } from "@/types/common";

import { cn } from "@/utils/cn";

export const ArrowLeft = ({ className }: IconProps) => {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-5", className)}
    >
      <title>Arrow left</title>

      <path d="M6 8L2 12L6 16" />
      <path d="M2 12H22" />
    </svg>
  );
};
