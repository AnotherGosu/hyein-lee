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
        "focus-ring group flex w-max items-center justify-center gap-2 rounded-full bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-700",
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
