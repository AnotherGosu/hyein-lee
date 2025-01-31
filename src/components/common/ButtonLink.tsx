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
        "group bg-primary-500 flex h-10 w-max items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold text-white ring-blue-500 outline-hidden transition ring-inset [&svg]:size-5",
        "hover:bg-primary-600 active:bg-primary-700 focus:ring-2",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
