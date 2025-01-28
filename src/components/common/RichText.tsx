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
        "[&_img]:mx-auto [&_img]:mb-3 [&_img]:max-h-[40rem] [&_img]:rounded-md",
      )}
    >
      <PrismicRichText
        components={{
          heading1: ({ children }) => (
            <h1 className="mt-6 mb-3 text-2xl font-semibold md:text-3xl">
              {children}
            </h1>
          ),

          heading2: ({ children }) => (
            <h2 className="mt-6 mb-3 text-xl font-semibold md:text-2xl">
              {children}
            </h2>
          ),

          heading3: ({ children }) => (
            <h3 className="mt-6 mb-3 text-lg font-semibold md:text-xl">
              {children}
            </h3>
          ),

          heading4: ({ children }) => (
            <h4 className="mt-6 mb-3 text-base font-semibold md:text-lg">
              {children}
            </h4>
          ),

          heading5: ({ children }) => (
            <h5 className="mt-6 mb-3 text-sm font-semibold md:text-base">
              {children}
            </h5>
          ),

          heading6: ({ children }) => (
            <h6 className="mt-6 mb-3 text-sm font-medium md:text-base">
              {children}
            </h6>
          ),

          paragraph: ({ node }) => (
            <p
              className="mb-3"
              dangerouslySetInnerHTML={{ __html: formatParagraphNode(node) }}
            />
          ),

          preformatted: ({ children }) => (
            <pre className="bg-primary-200 mb-3 rounded-xs px-2 py-1 text-wrap">
              {children}
            </pre>
          ),

          oList: ({ children }) => (
            <ol className="mb-3 list-inside list-decimal">{children}</ol>
          ),

          list: ({ children }) => (
            <ul className="mb-3 list-inside list-disc">{children}</ul>
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
