import { forwardRef } from "react";

import { cn } from "@/utils/cn";

export const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function ButtonRef({ className, type = "button", ...props }, ref) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "flex h-10 items-center justify-center gap-2 rounded-md px-3",
        "bg-primary-500 text-sm font-semibold text-white",
        "outline-hidden transition [&>svg]:size-5",
        "hover:bg-primary-600 active:bg-primary-700",
        "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});
