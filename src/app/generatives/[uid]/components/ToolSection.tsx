import { SubHeading } from "@/components/common/Typography";

interface ToolSectionProps {
  tool: string;
}

export const ToolsSection = ({ tool }: ToolSectionProps) => {
  return (
    <section>
      <SubHeading>Made with</SubHeading>

      <span className="font-medium italic text-primary-500 md:text-lg">
        {tool}
      </span>
    </section>
  );
};
