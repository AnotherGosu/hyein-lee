import { IconProps } from "@/types/common";

import { cn } from "@/utils/cn";

export const Menu = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-5", className)}
    >
      <title>Menu</title>

      <line
        x1="4"
        x2="20"
        y1="12"
        y2="12"
      />
      <line
        x1="4"
        x2="20"
        y1="6"
        y2="6"
      />
      <line
        x1="4"
        x2="20"
        y1="18"
        y2="18"
      />
    </svg>
  );
};
