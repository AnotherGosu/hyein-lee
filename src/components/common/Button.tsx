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
        "focus-ring flex items-center justify-center gap-2 rounded-md bg-primary-600 px-4 py-2.5 font-semibold text-white hover:bg-primary-700",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});
