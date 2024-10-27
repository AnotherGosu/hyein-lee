import Link from "next/link";
import { Suspense } from "react";

import { getFeatures } from "@/api/getFeatures";

import { ButtonLink } from "@/components/common/ButtonLink";
import { ListFallback } from "@/components/common/Fallback";
import { Heading, Paragpraph, Section } from "@/components/common/Typography";

export const Blog = () => {
  return (
    <Section>
      <Heading>Blog</Heading>

      <Paragpraph>
        Exploring the complexities of legal systems, I’m passionate about
        understanding the principles of justice and how laws shape our society.
        Whether it&#39;s case studies or legal theory, I love diving deep into
        the world of law.
      </Paragpraph>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Suspense
          fallback={
            <ListFallback
              length={4}
              className="h-36"
            />
          }
        >
          <FeaturedItems />
        </Suspense>
      </div>

      <ButtonLink href="/blog">All posts</ButtonLink>
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
          className="focus-ring rounded-md border border-primary-200"
        >
          <div className="h-full p-6 duration-500 hover:bg-primary-100">
            <h3 className="mb-2 truncate text-lg font-semibold text-primary-600">
              {data.title}
            </h3>

            <p className="line-clamp-3 text-sm font-medium">{data.subtitle}</p>
          </div>
        </Link>
      ))}
    </>
  );
};
