import Link, { LinkProps } from "next/link";

import { cn } from "@/utils/cn";

import { ArrowRight } from "@/components/icons/ArrowRight";

interface ButtonLinkProps extends LinkProps {
  children: React.ReactNode;
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
        "focus-ring group flex w-max items-center gap-2 rounded-full bg-primary-200 px-4 py-2.5 text-sm font-semibold text-headline hover:bg-primary-300",
        className,
      )}
      {...props}
    >
      {children}

      <div className="relative size-5">
        <ArrowRight className="absolute left-0 transition-all ease-in group-hover:left-1" />
      </div>
    </Link>
  );
};
