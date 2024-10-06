import { IconProps } from "@/types/common";

import { cn } from "@/utils/cn";

export const Mail = ({ className }: IconProps) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-5", className)}
    >
      <title>Mail</title>

      <rect
        width="20"
        height="16"
        x="2"
        y="4"
        rx="2"
      />

      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
};
