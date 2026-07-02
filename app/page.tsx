import Image from "next/image";
import { OnlineSection } from "@/components/OnlineSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WorkSection } from "@/components/WorkSection";
import { bodyTextClassName, textLinkClassName } from "@/lib/typography";

export default function Home() {
  return (
    <main
      data-main-content="true"
      className="relative isolate mx-auto flex min-h-svh w-full min-w-0"
    >
      <div className="flex flex-1 flex-col">
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="text-primary mx-auto flex max-w-2xl flex-1 flex-col gap-16 py-16 leading-[1.4] sm:py-32">
            <section className="flex flex-col gap-4 px-4">
              <h1 className="sr-only">Aleksey Popov</h1>
              <Image
                src="/images/avatar.png"
                alt="Aleksey Popov"
                width={60}
                height={60}
                draggable={false}
                className="mb-8 select-none rounded-full"
              />
              <p className={`text-pretty ${bodyTextClassName}`}>
                Hey! I&apos;m Aleksey. I&apos;m a product guy, designer and
                entrepreneur. I&apos;m currently a Product Owner and Product
                Designer at{" "}
                <a
                  href="https://www.dpworld.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLinkClassName}
                >
                  DP World
                </a>
                . Before that, I worked at{" "}
                <a
                  href="https://integral-group.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLinkClassName}
                >
                  Integral Petroleum SA
                </a>
                , where I developed an end-to-end commodity commerce
                platform, pioneering solutions for search, logistics,
                transactions, and everything in between in the Greater Caspian
                region.
              </p>
              <p className={bodyTextClassName}>
                In 2023, I co-founded YoFlats, a property classifieds platform
                in Bali, Indonesia, where I served as CEO. I am also a
                co-founder and CVO at{" "}
                <a
                  href="https://www.citata-pr.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLinkClassName}
                >
                  Citata PR-Agency
                </a>
                , where we help businesses, startups, and events gain
                visibility by creating newsworthy stories and securing coverage in
                leading media outlets such as Forbes, RBK, and others.
              </p>
            </section>

            <OnlineSection />

            <WorkSection />

            <ProjectsSection />
          </div>
        </div>
      </div>
    </main>
  );
}
