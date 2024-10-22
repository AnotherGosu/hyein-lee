import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

interface ListItemProps extends Content.GenerativeDocument {
  idx: number;
}

export const ListItem = ({ idx, uid, data }: ListItemProps) => {
  return (
    <Link
      href={`/generatives/${uid}`}
      className="focus-ring group animate-fadeIn overflow-hidden rounded-md border border-primary-200"
    >
      <PrismicNextImage
        key={data.images[0]?.image.id}
        field={data.images[0]?.image}
        alt=""
        priority={idx < 2}
        className="h-72 object-cover sm:h-96"
      />

      <div className="p-4 duration-500 group-hover:bg-primary-100">
        <h3 className="font-semibold text-primary-500">{data.title}</h3>
        <p className="truncate text-sm">{data.subtitle}</p>
      </div>
    </Link>
  );
};
