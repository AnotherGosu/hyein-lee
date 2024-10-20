import { cn } from "@/utils/cn";

interface CarouselDotProps {
  arialLabel: string;
  isSelected: boolean;
  onClick: () => void;
}

export const CarouselDot = ({
  arialLabel,
  isSelected,
  onClick,
}: CarouselDotProps) => {
  return (
    <button
      type="button"
      aria-label={arialLabel}
      onClick={onClick}
      className={cn(
        "focus-ring size-5 rounded-full border border-primary-300",
        { "bg-primary-300": isSelected, "hover:bg-primary-200": !isSelected },
      )}
    />
  );
};
