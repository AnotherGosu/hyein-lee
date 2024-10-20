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
          className="animate-fadeIn transition"
        >
          <div className={cn("fallback", className)} />
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
