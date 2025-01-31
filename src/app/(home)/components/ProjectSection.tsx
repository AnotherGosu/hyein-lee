import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { FeaturedProject } from "@/types/feautres";

import { cn } from "@/utils/cn";

import { Heading, Paragpraph, Section } from "@/components/common/Typography";

import { ArrowButtonLink } from "./ArrowButtonLink";

interface ProjectSectionProps {
  featuredProjects: FeaturedProject[];
}

export const ProjectSection = ({ featuredProjects }: ProjectSectionProps) => {
  return (
    <Section>
      <Heading>Projects</Heading>

      <Paragpraph>
        Take a look at unique self-made projects, from beautifully illustrated
        picture books to aesthetically designed calendars
      </Paragpraph>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectLink
            key={project.uid}
            {...project}
          />
        ))}
      </div>

      <ArrowButtonLink href="/projects">All Projects</ArrowButtonLink>
    </Section>
  );
};

const ProjectLink = ({ uid, data, ...rest }: FeaturedProject) => {
  console.log(rest);
  return (
    <Link
      key={uid}
      href={`/projects/${uid}`}
      className={cn(
        "border-primary-300 rounded-md border outline-hidden transition duration-500",
        "hover:border-primary-400 hover:bg-primary-200 focus:border-primary-400 focus:bg-primary-200 active:bg-primary-300",
      )}
    >
      <PrismicNextImage
        field={data.image}
        alt=""
        className="h-72 object-cover sm:h-96"
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
