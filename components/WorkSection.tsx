import { SectionLabel } from "@/components/SectionLabel";
import { interactiveLinkClassName, listItemTitleClassName } from "@/lib/typography";
import { work } from "@/lib/site";

export function WorkSection() {
  return (
    <section id="work" className="flex scroll-mt-20 flex-col gap-4 px-4">
      <SectionLabel>Work</SectionLabel>
      <ul className="flex flex-col gap-8 sm:gap-1.5">
        {work.map((entry) => (
          <li key={entry.company} className="flex">
            <a
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex flex-1 flex-col items-start gap-0.5 text-xl sm:flex-row sm:items-center sm:gap-3 ${interactiveLinkClassName}`}
            >
              <span className={`text-xl ${listItemTitleClassName}`}>
                {entry.company}
              </span>
              <span className="font-semibold text-tertiary">{entry.role}</span>
              <span className="font-mono text-[19px] font-medium text-quaternary opacity-80 sm:ml-auto">
                {entry.period}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
