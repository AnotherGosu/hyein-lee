import type { RichTextField } from "@prismicio/client";

import { RichText } from "@/components/common/RichText";
import { SubHeading } from "@/components/common/Typography";

interface PromptSectionProps {
  prompt: RichTextField;
}

export const PromptSection = ({ prompt }: PromptSectionProps) => {
  return (
    <section>
      <SubHeading>Prompt</SubHeading>

      <RichText field={prompt} />
    </section>
  );
};
