import type { Content } from "@prismicio/client";

import { cn } from "@/utils/cn";

import { ImageLink } from "@/components/common/ImageLink";

interface ListItemProps extends Content.ArtworkDocument {
  idx: number;
}

export const ListItem = ({ idx, uid, data }: ListItemProps) => {
  return (
    <ImageLink
      key={uid}
      href={`/artworks/${uid}`}
      image={data.image}
      title={data.title}
      subtitle={data.subtitle}
      priority={idx < 8}
      className={cn("min-h-72 animate-fadeIn", {
        "md:col-span-2 md:row-span-2": data.big,
        "row-span-2": data.tall,
      })}
    />
  );
};
