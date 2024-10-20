import { IconProps } from "@/types/common";

import { cn } from "@/utils/cn";

export const ArrowUp = ({ className }: IconProps) => {
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
      <title>Arrow up</title>

      <path d="M8 6L12 2L16 6" />
      <path d="M12 2V22" />
    </svg>
  );
};
