import Image, { StaticImageData } from "next/image";
import Link, { LinkProps } from "next/link";

import { cn } from "@/utils/cn";

interface ImageCardProps extends LinkProps {
  src: string | StaticImageData;
  title: string;
  description: string;
  className?: string;
}

export const ImageCard = ({
  href,
  src,
  title,
  description,
  className,
  ...props
}: ImageCardProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring group relative overflow-hidden rounded-md",
        className,
      )}
      {...props}
    >
      <div className="absolute bottom-0 left-0 z-10 w-full select-none bg-black/30 px-4 py-2 text-white">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>

      <Image
        src={src}
        alt={description}
        fill
        priority
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover"
      />
    </Link>
  );
};
