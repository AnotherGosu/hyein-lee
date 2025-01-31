import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { FeaturedPost } from "@/types/feautres";

import { cn } from "@/utils/cn";

import { Heading, Paragpraph, Section } from "@/components/common/Typography";

import { ArrowButtonLink } from "./ArrowButtonLink";

interface BlogSectionProps {
  featuredPosts: FeaturedPost[];
}

export const BlogSection = ({ featuredPosts }: BlogSectionProps) => {
  return (
    <Section>
      <Heading>Blog</Heading>

      <Paragpraph>
        I created this space to explore and share valuable insights into the
        complex world of law. Here, you’ll find articles on legal developments,
        case analyses, practical advice, and commentary.
      </Paragpraph>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {featuredPosts.map((post) => (
          <PostLink
            key={post.uid}
            {...post}
          />
        ))}
      </div>

      <ArrowButtonLink href="/blog">All Posts</ArrowButtonLink>
    </Section>
  );
};

const PostLink = ({ uid, data }: FeaturedPost) => {
  return (
    <Link
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
  );
};
