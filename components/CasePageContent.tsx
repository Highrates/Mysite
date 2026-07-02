import { DiagonalDivider } from "@/components/DiagonalDivider";
import { CaseCoverTransition } from "@/components/CaseCoverTransition";
import { CaseMedia } from "@/components/CaseMedia";
import { CaseNavigation } from "@/components/CaseNavigation";
import { MediaGallery } from "@/components/MediaGallery";
import { OtherProjects } from "@/components/OtherProjects";
import { RichText } from "@/components/RichText";
import {
  caseMediaWidthClassName,
  caseTextWidthClassName,
} from "@/lib/case-layout";
import { getAdjacentCases, type CaseContent } from "@/lib/get-case";
import { caseBodyClassName, caseIntroClassName } from "@/lib/typography";

type CasePageContentProps = {
  item: CaseContent;
};

export function CasePageContent({ item }: CasePageContentProps) {
  const isGallery = item.layout === "gallery";
  const { prev, next } = getAdjacentCases(item.slug);

  return (
    <main
      data-main-content="true"
      className="relative isolate mx-auto flex min-h-svh w-full min-w-0 overflow-x-hidden"
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <article
            className={`text-primary flex min-w-0 flex-col gap-8 px-4 py-16 leading-[1.4] sm:py-32 ${caseMediaWidthClassName}`}
          >
            {!isGallery ? (
              <CaseCoverTransition slug={item.slug}>
                <CaseMedia src={item.cover} alt={item.title} priority />
              </CaseCoverTransition>
            ) : null}

            {!isGallery ? (
              <header
                className={`${caseTextWidthClassName} flex flex-col gap-4`}
              >
                <h1 className="text-3xl font-bold leading-[1.2] tracking-[-0.64px] text-primary md:text-4xl lg:text-[2.5rem]">
                  {item.title}
                </h1>
                {item.description ? (
                  <p className={`text-pretty ${caseIntroClassName}`}>
                    {item.description}
                  </p>
                ) : null}
              </header>
            ) : null}

            <div className="min-w-0 w-full">
              {isGallery ? (
                <MediaGallery items={item.media} alt={item.title} />
              ) : item.body ? (
                <RichText content={item.body} />
              ) : (
                <p className={`${caseTextWidthClassName} ${caseBodyClassName}`}>
                  Content coming soon.
                </p>
              )}
            </div>
          </article>

          <div className="mt-12">
            <DiagonalDivider />
          </div>

          <div className={`${caseTextWidthClassName} px-4 pb-16 sm:pb-32`}>
            <CaseNavigation prev={prev} next={next} />
            <OtherProjects currentSlug={item.slug} />
          </div>
        </div>
      </div>
    </main>
  );
}
