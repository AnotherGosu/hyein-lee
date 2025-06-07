import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

export interface ButtonLinkProps extends LinkProps, PropsWithChildren {
  className?: string;
}

export const ButtonLink = ({
  children,
  className,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      className={cn(
        "flex h-10 w-max items-center justify-center gap-2 rounded-full px-3",
        "bg-primary-500 text-sm font-semibold text-white",
        "group outline-hidden transition [&svg]:size-5",
        "hover:bg-primary-600 active:bg-primary-700",
        "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
