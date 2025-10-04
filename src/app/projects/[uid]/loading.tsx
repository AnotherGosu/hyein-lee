import { Section, Title } from "@/components/common/Typography";

export default function Loading() {
  return (
    <Section>
      <Title className="fallback mx-auto w-1/2">Title</Title>

      <div className="fallback h-100" />
    </Section>
  );
}
