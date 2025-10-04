"use client";

import type { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/utils/cn";

import { PLACEHOLDER } from "@/constants/common";

import { CarouselButton } from "./CarouselButton";
import { CarouselDot } from "./CarouselDot";

interface CarouselProps {
  images: Array<{ image: ImageField }>;
  slides?: 1 | 2 | 3;
}

export const Carousel = ({ images, slides = 3 }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { skipSnaps: true, align: "start" },
    [WheelGesturesPlugin()],
  );

  const {
    isPrevButtonDisabled,
    isNextButtonDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarouselButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotClick } = useCarouselDots(emblaApi);

  return (
    <div>
      <div
        ref={emblaRef}
        className="mb-4 overflow-hidden"
      >
        <div className="-ml-4 flex">
          {images.map(({ image }) => (
            <div
              key={image.id}
              className={cn(
                "pointer-events-none select-none",
                "mx-auto min-w-0 pl-4",
                {
                  "flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)]":
                    slides === 3,
                  "flex-[0_0_100%] sm:flex-[0_0_50%]": slides === 2,
                  "flex-[0_0_100%]": slides === 1,
                },
              )}
            >
              <PrismicNextImage
                field={image}
                alt=""
                priority
                className={cn("h-[30rem] w-full rounded-md object-cover", {
                  "object-contain": slides === 1,
                })}
                placeholder={PLACEHOLDER}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <CarouselButton
          icon={<ArrowLeftIcon />}
          ariaLabel="Previous image"
          isDisabled={isPrevButtonDisabled}
          onClick={onPrevButtonClick}
        />

        {scrollSnaps.map((_, idx) => (
          <CarouselDot
            key={idx}
            arialLabel={`Go to image ${idx + 1}`}
            isSelected={selectedIndex === idx}
            onClick={() => onDotClick(idx)}
          />
        ))}

        <CarouselButton
          icon={<ArrowRightIcon />}
          ariaLabel="Next image"
          isDisabled={isNextButtonDisabled}
          onClick={onNextButtonClick}
        />
      </div>
    </div>
  );
};

const useCarouselButtons = (emblaApi: EmblaCarouselType | undefined) => {
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  const onPrevButtonClick = () => {
    emblaApi?.scrollPrev();
  };

  const onNextButtonClick = () => {
    emblaApi?.scrollNext();
  };

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setIsPrevButtonDisabled(!emblaApi.canScrollPrev());
    setIsNextButtonDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (emblaApi) {
      onSelect(emblaApi);

      emblaApi.on("reInit", onSelect).on("select", onSelect);
    }
  }, [emblaApi, onSelect]);

  return {
    isPrevButtonDisabled,
    isNextButtonDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

const useCarouselDots = (emblaApi: EmblaCarouselType | undefined) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotClick = (idx: number) => {
    emblaApi?.scrollTo(idx);
  };

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (emblaApi) {
      onInit(emblaApi);
      onSelect(emblaApi);

      emblaApi
        .on("reInit", onInit)
        .on("reInit", onSelect)
        .on("select", onSelect);
    }
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotClick };
};
