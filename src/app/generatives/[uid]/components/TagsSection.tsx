import Link from "next/link";

import { cn } from "@/utils/cn";

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
            className={cn(
              "border-primary-300 rounded-md border px-2 py-1 outline-hidden transition",
              "hover:border-primary-400 hover:bg-primary-300 focus:border-primary-400 focus:bg-primary-300 active:bg-primary-400",
            )}
          >
            {tag}
          </Link>
        ))}
      </div>
    </section>
  );
};
