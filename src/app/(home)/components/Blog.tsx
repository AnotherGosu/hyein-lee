import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { Suspense } from "react";

import { getFeatures } from "@/api/getFeatures";

import { cn } from "@/utils/cn";

import { ButtonLink } from "@/components/common/ButtonLink";
import { ListFallback } from "@/components/common/Fallback";
import { Heading, Paragpraph, Section } from "@/components/common/Typography";

export const Blog = () => {
  return (
    <Section>
      <Heading>Blog</Heading>

      <Paragpraph>
        I created this space to explore and share valuable insights into the
        complex world of law. Here, you&#39;ll find articles on legal
        developments, case analyses, practical advice, and commentary.
      </Paragpraph>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Suspense
          fallback={
            <ListFallback
              length={4}
              className="h-[9.5rem]"
            />
          }
        >
          <FeaturedItems />
        </Suspense>
      </div>

      <ButtonLink href="/blog">All Posts</ButtonLink>
    </Section>
  );
};

const FeaturedItems = async () => {
  const { featuredPosts } = await getFeatures();

  return (
    <>
      {featuredPosts.map(({ uid, data }) => (
        <Link
          key={uid}
          href={`/blog/${uid}`}
          className={cn(
            "border-primary-300 rounded-md border outline-hidden transition duration-500",
            "hover:border-primary-400 hover:bg-primary-200 focus:border-primary-400 focus:bg-primary-200 active:bg-primary-300",
          )}
        >
          <PrismicNextImage
            field={data.image}
            alt=""
            className="h-40 object-cover"
          />

          <div className="p-6">
            <h3 className="text-primary-600 mb-2 truncate text-lg font-semibold">
              {data.title}
            </h3>

            <p className="line-clamp-3 text-sm leading-relaxed font-medium">
              {data.subtitle}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};
