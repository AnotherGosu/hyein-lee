import { ExternalLinkIcon } from "lucide-react";

import { cn } from "@/utils/cn";

interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ExternalLink = ({
  children,
  className,
  ...props
}: ExternalLinkProps) => {
  return (
    <a
      target="_blank"
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
      <ExternalLinkIcon />
    </a>
  );
};
