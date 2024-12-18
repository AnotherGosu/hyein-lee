import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { cn } from "@/utils/cn";

import { HighlightBadge } from "@/components/common/HighlightBadge";

interface ListItemProps extends Content.GenerativeDocument {
  idx: number;
  isHighlight?: boolean;
}

export const ListItem = ({
  idx,
  isHighlight = false,
  uid,
  data,
}: ListItemProps) => {
  return (
    <Link
      href={`/generatives/${uid}`}
      className={cn(
        "group relative overflow-hidden rounded-md border border-primary-300 outline-none transition",
        "hover:border-primary-400 focus:border-primary-400",
      )}
    >
      {isHighlight && <HighlightBadge />}

      <PrismicNextImage
        field={data.images[0]?.image}
        alt=""
        priority={idx < 2}
        className="h-72 object-cover sm:h-96"
      />

      <div
        className={cn(
          "p-4 transition duration-500",
          "group-hover:bg-primary-200 group-focus:bg-primary-200 group-active:bg-primary-300",
        )}
      >
        <h3 className="truncate font-semibold text-primary-600">
          {data.title}
        </h3>
        <p className="truncate text-sm">{data.subtitle}</p>
      </div>
    </Link>
  );
};
