import { IconProps } from "@/types/common";

import { cn } from "@/utils/cn";

export const Naver = ({ className }: IconProps) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-5", className)}
    >
      <title>Naver</title>
      <path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z" />
    </svg>
  );
};
