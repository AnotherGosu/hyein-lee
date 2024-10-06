"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

interface NavigationLinkProps {
  title: string;
  href: string;
}

export const NavigationLink = ({ title, href }: NavigationLinkProps) => {
  const { isActive } = useComponent(href);

  return (
    <Link
      href={href}
      className={cn(
        "focus-ring rounded-sm px-2 text-xl font-medium text-black",
        {
          "text-primary-600 font-bold": isActive,
          "hover:text-primary-400": !isActive,
        },
      )}
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
