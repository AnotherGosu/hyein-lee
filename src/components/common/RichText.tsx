import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react";
import { PropsWithChildren } from "react";

export const RichText = (props: PrismicRichTextProps) => {
  return (
    <div>
      <PrismicRichText
        components={{
          paragraph: ({ children }: PropsWithChildren) => (
            <p className="mb-4 md:text-lg">{children}</p>
          ),
        }}
        {...props}
      />
    </div>
  );
};
