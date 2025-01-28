import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

import { ArrowRight } from "@/components/icons/ArrowRight";

interface ButtonLinkProps extends LinkProps, PropsWithChildren {
  isArrowIcon?: boolean;
  className?: string;
}

export const ButtonLink = ({
  children,
  isArrowIcon = true,
  className,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      className={cn(
        "group bg-primary-500 flex h-10 w-max items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold text-white ring-blue-500 outline-hidden transition ring-inset",
        "hover:bg-primary-600 active:bg-primary-700 focus:ring-2",
        className,
      )}
      {...props}
    >
      {children}

      {isArrowIcon && (
        <div className="relative size-5">
          <ArrowRight className="absolute left-0 transition-all ease-in group-hover:left-1" />
        </div>
      )}
    </Link>
  );
};
