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
        "size-5 rounded-full border border-primary-600 outline-none ring-inset ring-blue-500 transition",
        "focus:ring-2",
        { "bg-primary-600": isSelected, "hover:bg-primary-400": !isSelected },
      )}
    />
  );
};
