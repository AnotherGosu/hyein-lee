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
        "group bg-primary-500 flex h-10 w-max items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold text-white ring-blue-500 outline-hidden transition ring-inset [&>svg]:size-5",
        "hover:bg-primary-600 active:bg-primary-700 focus:ring-2",
        className,
      )}
      {...props}
    >
      {children}
      <ExternalLinkIcon />
    </a>
  );
};
