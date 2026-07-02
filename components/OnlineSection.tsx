import { SectionLabel } from "@/components/SectionLabel";
import { interactiveLinkClassName, listItemTitleClassName } from "@/lib/typography";
import { online } from "@/lib/site";

export function OnlineSection() {
  return (
    <section className="flex flex-col gap-4 px-4">
      <SectionLabel>Online</SectionLabel>
      <ul className="flex flex-col gap-8 sm:gap-1.5">
        {online.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl ${interactiveLinkClassName} ${listItemTitleClassName}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
