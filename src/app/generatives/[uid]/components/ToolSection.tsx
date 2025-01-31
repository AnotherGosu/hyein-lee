import Link from "next/link";

import { SubHeading } from "@/components/common/Typography";

interface ToolSectionProps {
  tool: string;
}

export const ToolSection = ({ tool }: ToolSectionProps) => {
  return (
    <section>
      <SubHeading>Tool</SubHeading>

      <Link
        href={{ pathname: "/generatives", query: { tool } }}
        className="text-primary-500 font-medium italic underline underline-offset-4 md:text-lg"
      >
        {tool}
      </Link>
    </section>
  );
};
