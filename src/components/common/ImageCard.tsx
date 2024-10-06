import Image, { StaticImageData } from "next/image";

import { cn } from "@/utils/cn";

interface ImageCardProps extends React.ComponentProps<"div"> {
  src: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
}

export const ImageCard = ({
  src,
  alt,
  title,
  description,
  className,
  ...props
}: ImageCardProps) => {
  return (
    <div
      className={cn("group relative h-full overflow-hidden", className)}
      {...props}
    >
      <div className="absolute bottom-0 left-0 z-10 select-none p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <h2 className="mb-1 font-semibold sm:text-xl">{title}</h2>
        <p className="text-sm sm:text-base md:text-nowrap">{description}</p>
      </div>

      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="rounded-md object-cover transition-all duration-500 ease-in group-hover:brightness-75"
      />
    </div>
  );
};
