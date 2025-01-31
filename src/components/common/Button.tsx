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
        "bg-primary-500 flex h-10 items-center justify-center gap-2 rounded-md px-3 font-semibold text-white ring-blue-500 outline-hidden transition ring-inset [&>svg]:size-5",
        "hover:bg-primary-600 active:bg-primary-700 focus:ring-2 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});
