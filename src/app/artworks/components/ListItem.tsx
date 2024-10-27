import type { Content } from "@prismicio/client";

import { cn } from "@/utils/cn";

import { HighlightBadge } from "@/components/common/HighlightBadge";
import { ImageLink } from "@/components/common/ImageLink";

interface ListItemProps extends Content.ArtworkDocument {
  idx: number;
  isHighlight?: boolean;
}

export const ListItem = ({
  idx,
  isHighlight = false,
  uid,
  data,
}: ListItemProps) => {
  let subtitle = "";

  if (data.description[0]?.type === "paragraph") {
    subtitle = data.description[0].text;
  }

  return (
    <ImageLink
      key={uid}
      href={`/artworks/${uid}`}
      image={data.image}
      title={data.title}
      subtitle={subtitle}
      priority={idx < 4}
      className={cn("row-span-3 animate-fadeIn sm:row-span-1", {
        "row-span-4 sm:row-span-2": data.tall,
      })}
    >
      {isHighlight && <HighlightBadge />}
    </ImageLink>
  );
};
