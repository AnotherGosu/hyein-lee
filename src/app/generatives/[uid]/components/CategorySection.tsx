import Link from "next/link";

import { SubHeading } from "@/components/common/Typography";

interface CategorySectionProps {
  category: string | null;
}

export const CategorySection = ({ category }: CategorySectionProps) => {
  return (
    <section>
      <SubHeading>Category</SubHeading>

      <Link
        href={{ pathname: "/generatives", query: { category } }}
        className="text-primary-500 font-medium italic underline underline-offset-4 md:text-lg"
      >
        {category}
      </Link>
    </section>
  );
};
