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
        "group relative grid animate-fadeIn grid-cols-1 overflow-hidden rounded-md border border-primary-300 outline-none transition",
        "md:h-52 md:grid-cols-[1fr_2fr]",
        "focus:border-primary-400",
      )}
    >
      {isHighlight && <HighlightBadge />}

      <PrismicNextImage
        field={data.image}
        alt=""
        priority={idx < 4}
        className="h-40 object-cover md:h-52"
      />

      <div
        className={cn(
          "p-4 transition duration-500",
          "group-hover:bg-primary-200 group-focus:bg-primary-200 group-active:bg-primary-300",
        )}
      >
        <h3 className="mb-2 text-lg font-semibold text-primary-600 md:text-xl">
          {data.title}
        </h3>

        <p className="line-clamp-4 text-sm md:text-base">{data.subtitle}</p>
      </div>
    </Link>
  );
};
