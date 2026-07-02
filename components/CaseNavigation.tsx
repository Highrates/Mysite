import Link from "next/link";
import type { Case } from "@/lib/cases";
import { interactiveLinkClassName } from "@/lib/typography";

type CaseNavigationProps = {
  prev: Case | null;
  next: Case | null;
};

export function CaseNavigation({ prev, next }: CaseNavigationProps) {
  if (!prev && !next) {
    return null;
  }

  return (
    <nav
      aria-label="Case navigation"
      className="flex items-start justify-between gap-6 border-t border-border-primary pt-8"
    >
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className={`${interactiveLinkClassName} min-w-0 text-left text-lg font-semibold text-primary`}
        >
          <span aria-hidden="true">← </span>
          {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className={`${interactiveLinkClassName} min-w-0 text-right text-lg font-semibold text-primary`}
        >
          {next.title}
          <span aria-hidden="true"> →</span>
        </Link>
      ) : null}
    </nav>
  );
}
