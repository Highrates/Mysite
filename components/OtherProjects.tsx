import { getAllCases } from "@/lib/get-case";
import { ProjectCard } from "./ProjectCard";
import { SectionLabel } from "./SectionLabel";

type OtherProjectsProps = {
  currentSlug: string;
};

export function OtherProjects({ currentSlug }: OtherProjectsProps) {
  const items = getAllCases().filter((item) => item.slug !== currentSlug);

  return (
    <section className="flex flex-col gap-4 pt-12">
      <SectionLabel>Other projects</SectionLabel>
      <ul className="flex flex-col gap-12 sm:gap-10">
        {items.map((item) => (
          <li key={item.slug}>
            <ProjectCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
