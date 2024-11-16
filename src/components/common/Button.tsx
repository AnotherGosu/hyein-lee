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
        "flex h-10 items-center justify-center gap-2 rounded-md bg-primary-600 px-3 font-semibold text-white outline-none ring-inset ring-blue-500 transition",
        "hover:bg-primary-700 focus:ring-2 active:bg-primary-800 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});
