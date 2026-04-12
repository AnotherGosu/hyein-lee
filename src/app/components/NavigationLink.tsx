"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

interface NavigationLinkProps extends LinkProps {
  title: string;
}

export function NavigationLink({ title, ...props }: NavigationLinkProps) {
  const pathname = usePathname();
  const href = props.href.toString();

  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

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
}
