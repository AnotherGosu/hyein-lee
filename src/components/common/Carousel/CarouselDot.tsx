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
        "border-primary-600 size-5 rounded-full border ring-blue-500 outline-hidden transition ring-inset",
        "focus:ring-2",
        { "bg-primary-600": isSelected, "hover:bg-primary-400": !isSelected },
      )}
    />
  );
};
