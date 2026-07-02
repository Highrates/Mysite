import { getAllCases } from "@/lib/get-case";
import { ProjectCard } from "./ProjectCard";
import { SectionLabel } from "./SectionLabel";

export function ProjectsSection() {
  const cases = getAllCases();

  return (
    <section id="projects" className="flex scroll-mt-20 flex-col gap-4 px-4">
      <SectionLabel>Projects</SectionLabel>
      <ul className="flex flex-col gap-12 sm:gap-10">
        {cases.map((item) => (
          <li key={item.slug}>
            <ProjectCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
