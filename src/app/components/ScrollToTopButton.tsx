"use client";

import { MoveUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/utils/cn";

import { Button } from "@/components/common/Button";

export const ScrollToTopButton = () => {
  const { isVisible, onScroll } = useScrollToTop();

  return (
    <Button
      onClick={onScroll}
      className={cn("fixed right-4 bottom-4 z-50 hidden rounded-full px-2.5", {
        flex: isVisible,
      })}
    >
      <MoveUpIcon />
    </Button>
  );
};

const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional for smooth scrolling
    });
  };

  return { isVisible, onScroll };
};
