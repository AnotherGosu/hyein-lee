import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react";
import { PropsWithChildren } from "react";

export const RichText = (props: PrismicRichTextProps) => {
  return (
    <PrismicRichText
      components={{
        paragraph: ({ children }: PropsWithChildren) => (
          <p className="text-sm leading-relaxed md:text-lg">{children}</p>
        ),
      }}
      {...props}
    />
  );
};
