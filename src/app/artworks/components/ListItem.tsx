import type { Content } from "@prismicio/client";

import { cn } from "@/utils/cn";

import { HighlightBadge } from "@/components/common/HighlightBadge";
import { ImageLink } from "@/components/common/ImageLink";

interface ListItemProps extends Content.ArtworkDocument {
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
    <ImageLink
      key={uid}
      href={`/artworks/${uid}`}
      image={data.image}
      title={data.title}
      subtitle={data.subtitle}
      priority={isImagePriority}
      className={cn("row-span-3 sm:row-span-1", {
        "row-span-4 sm:row-span-2": data.tall,
      })}
    >
      {isHighlight && <HighlightBadge />}
    </ImageLink>
  );
};
