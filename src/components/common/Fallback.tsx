import { cn } from "@/utils/cn";

interface PaginationFallbackProps {
  containerClassName?: string;
  itemClassName?: string;
}

export function PaginationFallback({
  containerClassName,
  itemClassName,
}: PaginationFallbackProps) {
  const items = [1, 2, 3, 4];
  const buttons = [1, 2, 3];

  return (
    <div>
      <div className={cn("mb-8", containerClassName)}>
        {items.map((idx) => (
          <div key={idx} className={cn("h-full", itemClassName)}>
            <div className="fallback h-full" />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        {buttons.map((idx) => (
          <div key={idx} className="fallback size-8 rounded-full" />
        ))}
      </div>
    </div>
  );
}

export function SearchInputFallback() {
  return <div className="fallback h-10 grow" />;
}

export function TagSearchFallback() {
  return <div className="fallback h-10 w-24.5" />;
}
