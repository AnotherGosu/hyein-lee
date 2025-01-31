import { MoveRightIcon } from "lucide-react";

import { cn } from "@/utils/cn";

import { ButtonLink, ButtonLinkProps } from "@/components/common/ButtonLink";

export const ArrowButtonLink = ({
  children,
  className,
  ...props
}: ButtonLinkProps) => {
  return (
    <ButtonLink
      className={cn("group", className)}
      {...props}
    >
      {children}

      <div className="relative size-5">
        <MoveRightIcon className="absolute left-0 size-5 transition-all ease-in group-hover:left-1" />
      </div>
    </ButtonLink>
  );
};
