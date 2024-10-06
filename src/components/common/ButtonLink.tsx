import Link, { LinkProps } from "next/link";

import { cn } from "@/utils/cn";

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
        "focus-ring group flex w-max items-center gap-2 rounded-full bg-primary-200 px-3 py-2 text-sm font-medium hover:bg-primary-300",
        "md:px-5 md:py-3 md:text-lg",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
