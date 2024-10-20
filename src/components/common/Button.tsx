import { forwardRef } from "react";

import { cn } from "@/utils/cn";

export const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function ButtonRef({ className, ...props }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "focus-ring group flex items-center gap-2 rounded-md bg-primary-200 px-4 py-2.5 font-semibold text-headline hover:bg-primary-300",
        className,
      )}
      {...props}
    />
  );
});
