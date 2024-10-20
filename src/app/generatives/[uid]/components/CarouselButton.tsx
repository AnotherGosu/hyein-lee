interface CarosuleButtonProps {
  icon: React.ReactNode;
  ariaLabel: string;
  isDisabled: boolean;
  onClick: () => void;
}

export const CarouselButton = ({
  icon,
  ariaLabel,
  isDisabled,
  onClick,
}: CarosuleButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={isDisabled}
      onClick={onClick}
      className="focus-ring rounded-full bg-primary-200 p-2.5 hover:bg-primary-300 disabled:pointer-events-none disabled:opacity-50"
    >
      {icon}
    </button>
  );
};
