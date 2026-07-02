import Image from "next/image";
import Link from "next/link";
import type { Case } from "@/lib/cases";
import { CaseCoverTransition } from "@/components/CaseCoverTransition";
import {
  listItemTitleClassName,
  projectCardImageClassName,
  projectCardLinkClassName,
} from "@/lib/typography";

type ProjectCardProps = {
  item: Case;
};

function ProjectCover({ item }: { item: Case }) {
  const image = (
    <div className="overflow-hidden rounded-xl">
      <Image
        src={item.cover}
        alt={item.title}
        width={672}
        height={400}
        sizes="(max-width: 672px) 100vw, 672px"
        className={projectCardImageClassName}
      />
    </div>
  );

  if (item.layout === "gallery") {
    return image;
  }

  return <CaseCoverTransition slug={item.slug}>{image}</CaseCoverTransition>;
}

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${item.slug}`}
      className={projectCardLinkClassName}
    >
      <div className="flex flex-col gap-1">
        <span className={`text-xl ${listItemTitleClassName}`}>{item.title}</span>
        {item.description ? (
          <span className="text-lg font-semibold leading-[1.35] text-tertiary">
            {item.description}
          </span>
        ) : null}
      </div>
      <ProjectCover item={item} />
    </Link>
  );
}
