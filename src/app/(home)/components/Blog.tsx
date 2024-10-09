import Link from "next/link";

import { ButtonLink } from "@/components/common/ButtonLink";
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

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {POSTS.map((post) => (
          <Post
            key={post.title}
            {...post}
          />
        ))}
      </div>

      <ButtonLink href="/blog">All posts</ButtonLink>
    </Section>
  );
};

const Post = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Link
      href="/blog"
      className="focus-ring overflow-hidden rounded-md border border-primary-200"
    >
      <div className="p-6 duration-500 hover:bg-primary-100">
        <h3 className="mb-2 text-xl font-semibold text-primary-600">{title}</h3>

        <p className="text-sm font-medium leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};

const POSTS = [
  {
    title: "The Role of Precedent in Modern Legal Systems",
    description:
      "Precedents serve as the backbone of common law, ensuring consistency while allowing flexibility for societal evolution.",
  },
  {
    title: "Understanding Constitutional Rights in a Digital Era",
    description:
      "As technology advances, interpreting constitutional rights in the context of privacy and data security becomes increasingly complex.",
  },
  {
    title: "The Impact of International Law on Climate Change Policy",
    description:
      "International law plays a critical role in shaping global efforts to combat climate change, but enforcement remains a significant challenge.",
  },
  {
    title: "The Importance of Legal Ethics in Modern Practice",
    description:
      "Legal ethics are essential in ensuring that lawyers maintain integrity, fairness, and responsibility while advocating for justice in a rapidly changing world.",
  },
];
