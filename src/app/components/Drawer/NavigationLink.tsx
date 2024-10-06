"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

interface NavigationLinkProps {
  title: string;
  href: string;
  onClick: () => void;
}

export const NavigationLink = ({
  title,
  href,
  onClick,
}: NavigationLinkProps) => {
  const { isActive } = useComponent(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("focus-ring rounded-sm text-xl font-medium", {
        "font-bold text-primary-600": isActive,
        "hover:text-primary-400": !isActive,
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
