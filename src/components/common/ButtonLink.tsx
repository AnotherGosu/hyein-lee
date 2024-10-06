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
        "focus-ring bg-primary-200 hover:bg-primary-300 flex w-max items-center gap-2 rounded-full px-5 py-3 text-lg font-medium",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
