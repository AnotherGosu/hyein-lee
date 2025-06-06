import { ImageFieldImage, KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

interface ImageLinkProps extends PropsWithChildren {
  href: LinkProps["href"];
  image: ImageFieldImage | null | undefined;
  title: KeyTextField;
  subtitle: KeyTextField;
  priority?: boolean;
  className?: string;
}

export const ImageLink = ({
  href,
  image,
  title,
  subtitle,
  priority = false,
  className,
  children,
}: ImageLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-md outline-hidden transition",
        "focus-visible:ring-2 focus-visible:ring-blue-500",
        className,
      )}
    >
      <Note
        title={title}
        subtitle={subtitle}
      />

      <PrismicNextImage
        field={image}
        alt=""
        priority={priority}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover"
      />

      {children}
    </Link>
  );
};

const Note = ({
  title,
  subtitle,
}: Pick<ImageLinkProps, "title" | "subtitle">) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 z-10 w-full bg-black/30 px-4 py-2 text-white transition-all duration-500 select-none",
        "sm:opacity-0",
        "group-hover:opacity-100 group-focus:opacity-100",
      )}
    >
      <h3 className="truncate font-semibold text-white">{title}</h3>
      <p className="truncate text-sm">{subtitle}</p>
    </div>
  );
};
