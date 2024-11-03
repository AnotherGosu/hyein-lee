"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

interface NavigationLinkProps extends LinkProps {
  title: string;
}

export const NavigationLink = ({ title, ...props }: NavigationLinkProps) => {
  const { isActive } = useComponent(props.href.toString());

  return (
    <Link
      {...props}
      className={cn("focus-ring rounded-sm px-0.5 text-xl font-medium", {
        "text-primary-600": isActive,
        "hover:text-primary-300": !isActive,
      })}
    >
      {title}
    </Link>
  );
};

const useComponent = (href: string) => {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return { isActive };
};
