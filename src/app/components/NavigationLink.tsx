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
      className={cn(
        "rounded-xs px-0.5 text-xl font-medium underline decoration-transparent underline-offset-8 outline-hidden transition",
        "hover:decoration-primary-400 focus:decoration-primary-400 active:decoration-primary-500",
        { "text-primary-600": isActive },
      )}
      {...props}
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
