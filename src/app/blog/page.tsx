import { Metadata } from "next";
import { Suspense } from "react";

import { ListFallback } from "@/components/common/Fallback";
import { Heading, Paragpraph, Section } from "@/components/common/Typography";

import { List } from "./components/List";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore blog posts by Hyein Lee",
};

export default function Page() {
  return (
    <>
      <Section>
        <Heading>Blog</Heading>

        <Paragpraph>
          Exploring the complexities of legal systems, I’m passionate about
          understanding the principles of justice and how laws shape our
          society. Whether it&#39;s case studies or legal theory, I love diving
          deep into the world of law.
        </Paragpraph>

        <div className="flex flex-col gap-8">
          <Suspense
            fallback={
              <ListFallback
                length={4}
                className="h-80"
              />
            }
          >
            <List />
          </Suspense>
        </div>
      </Section>
    </>
  );
}
