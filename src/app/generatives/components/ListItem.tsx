import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { cn } from "@/utils/cn";

import { HighlightBadge } from "@/components/common/HighlightBadge";

interface ListItemProps extends Content.GenerativeDocument {
  isImagePriority: boolean;
  isHighlight?: boolean;
}

export const ListItem = ({
  isImagePriority,
  isHighlight = false,
  uid,
  data,
}: ListItemProps) => {
  return (
    <Link
      href={`/generatives/${uid}`}
      className={cn(
        "group border-primary-300 relative overflow-hidden rounded-md border outline-hidden transition",
        "hover:border-primary-400 focus:border-primary-400",
      )}
    >
      {isHighlight && <HighlightBadge />}

      <PrismicNextImage
        field={data.images[0]?.image}
        alt=""
        priority={isImagePriority}
        className="h-72 object-cover sm:h-96"
      />

      <div
        className={cn(
          "p-4 transition duration-500",
          "group-hover:bg-primary-200 group-focus:bg-primary-200 group-active:bg-primary-300",
        )}
      >
        <h3 className="text-primary-600 truncate font-semibold">
          {data.title}
        </h3>

        <p className="truncate text-sm">{data.subtitle}</p>
      </div>
    </Link>
  );
};
