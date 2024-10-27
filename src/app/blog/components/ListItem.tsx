import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { cn } from "@/utils/cn";

import { HighlightBadge } from "@/components/common/HighlightBadge";

interface ListItemProps extends Content.PostDocument {
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
      href={`/blog/${uid}`}
      className={cn(
        "focus-ring group relative grid animate-fadeIn overflow-hidden rounded-md border border-primary-200",
        "grid-cols-1 md:h-52 md:grid-cols-3",
      )}
    >
      {isHighlight && <HighlightBadge />}

      <PrismicNextImage
        field={data.image}
        alt=""
        priority={idx < 4}
        className="h-40 object-cover md:h-52"
      />

      <div className="p-4 duration-500 group-hover:bg-primary-100 md:col-span-2">
        <h3 className="mb-2 text-lg font-semibold text-primary-500 md:text-xl">
          {data.title}
        </h3>

        <p className="overflow-hidden text-ellipsis text-sm md:text-base">
          {data.subtitle}
        </p>
      </div>
    </Link>
  );
};
