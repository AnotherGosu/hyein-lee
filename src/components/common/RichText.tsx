import { RTParagraphNode } from "@prismicio/client";
import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react";

import { cn } from "@/utils/cn";

export const RichText = (props: PrismicRichTextProps) => {
  return (
    <div
      className={cn(
        "text-sm leading-relaxed md:text-base md:leading-loose",
        "[&_a]:text-primary-600 [&_a]:underline",
        "[&_sup]:text-primary-600",
      )}
    >
      <PrismicRichText
        components={{
          heading3: ({ children }) => (
            <h3 className="mb-4 mt-6 text-base font-medium md:text-lg">
              {children}
            </h3>
          ),

          heading4: ({ children }) => (
            <h4 className="mb-4 mt-6 font-medium">{children}</h4>
          ),

          paragraph: ({ node }) => (
            <p
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: formatParagraphNode(node) }}
            />
          ),

          oList: ({ children }) => (
            <ol className="mb-4 list-inside list-decimal">{children}</ol>
          ),
        }}
        {...props}
      />
    </div>
  );
};

const formatParagraphNode = (node: RTParagraphNode) => {
  let html = node.text;

  const replaceParts = node.spans.map((span) => {
    return {
      phrase: node.text.slice(span.start, span.end),
      span,
    };
  });

  replaceParts.forEach(({ phrase, span }) => {
    switch (span.type) {
      case "em": {
        html = html.replaceAll(phrase, `<em>${phrase}</em>`);
        break;
      }

      case "strong": {
        html = html.replaceAll(phrase, `<strong>${phrase}</strong>`);
        break;
      }

      case "hyperlink": {
        html = html.replaceAll(
          phrase,
          `<a href="${span.data.url}" target="${span.data.link_type === "Web" && span.data.target}">
          ${phrase}
          </a>`,
        );

        break;
      }
    }
  });

  return html;
};
