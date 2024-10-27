import { cn } from "@/utils/cn";

export const ListFallback = ({
  length,
  className,
}: {
  length: number;
  className?: string;
}) => {
  const keys = Array.from({ length }, () => crypto.randomUUID());

  return (
    <>
      {keys.map((key) => (
        <div
          key={key}
          className={cn("h-full animate-fadeIn transition", className)}
        >
          <div className="fallback h-full" />
        </div>
      ))}
    </>
  );
};

export const SearchInputFallback = () => {
  return <div className="fallback h-[2.875rem] grow" />;
};

export const TagSearchFallback = () => {
  return <div className="fallback h-[2.875rem] w-[6.125rem]" />;
};

export const PaginationFallback = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li className="fallback size-10 !rounded-full" />
        <li className="fallback size-10 !rounded-full" />
        <li className="fallback size-10 !rounded-full" />
      </ul>
    </nav>
  );
};
