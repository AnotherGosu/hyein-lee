import { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

interface TypographyProps extends PropsWithChildren {
  className?: string;
}

export const Section = ({ children, className }: TypographyProps) => {
  return (
    <section
      className={cn(
        "mx-auto mb-20 mt-10 flex max-w-5xl flex-col gap-8 px-4",
        className,
      )}
    >
      {children}
    </section>
  );
};

export const Heading = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={cn(
        "text-center text-3xl font-bold uppercase md:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export const SubHeading = ({ children, className }: TypographyProps) => {
  return (
    <h3 className={cn("mb-3 text-2xl font-semibold", className)}>{children}</h3>
  );
};

export const Paragpraph = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-5xl text-center text-sm leading-relaxed md:text-lg",
        className,
      )}
    >
      {children}
    </p>
  );
};
