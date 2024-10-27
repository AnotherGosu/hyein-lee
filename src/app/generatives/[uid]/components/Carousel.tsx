"use client";

import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useCallback, useEffect, useState } from "react";

import { ArrowLeft } from "@/components/icons/ArrowLeft";
import { ArrowRight } from "@/components/icons/ArrowRight";

import { CarouselButton } from "./CarouselButton";
import { CarouselDot } from "./CarouselDot";

interface CarouselProps {
  images: Content.GenerativeDocumentData["images"];
}

export const Carousel = ({ images }: CarouselProps) => {
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
        <div className="-ml-8 flex">
          {images.map(({ image }) => (
            <div
              key={image.id}
              className="pointer-events-none min-w-0 flex-[0_0_100%] select-none pl-8 md:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)]"
            >
              <PrismicNextImage
                field={image}
                alt=""
                priority
                className="h-[30rem] w-full rounded-md object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <CarouselButton
          icon={<ArrowLeft />}
          ariaLabel="Previous image"
          isDisabled={isPrevButtonDisabled}
          onClick={onPrevButtonClick}
        />

        <div className="flex gap-2">
          {scrollSnaps.map((_, idx) => (
            <CarouselDot
              key={idx}
              arialLabel={`Go to image ${idx + 1}`}
              isSelected={selectedIndex === idx}
              onClick={() => onDotClick(idx)}
            />
          ))}
        </div>

        <CarouselButton
          icon={<ArrowRight />}
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