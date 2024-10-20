import Link from "next/link";

import { SubHeading } from "@/components/common/Typography";

interface TagsSectionProps {
  tags: string[];
}

export const TagsSection = ({ tags }: TagsSectionProps) => {
  return (
    <section>
      <SubHeading>Related tags</SubHeading>

      <div className="flex flex-wrap gap-2 text-sm font-medium md:text-base">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/generatives?tags=${tag}`}
            className="focus-ring rounded-md border border-primary-200 px-2 py-1 hover:bg-primary-100"
          >
            {tag}
          </Link>
        ))}
      </div>
    </section>
  );
};
