import type { Components } from "react-markdown";
import Markdown from "react-markdown";
import { CaseMedia } from "@/components/CaseMedia";
import { caseTextWidthClassName } from "@/lib/case-layout";
import { caseBodyClassName } from "@/lib/typography";

function isImageOnlyParagraph(node: unknown): boolean {
  if (!node || typeof node !== "object" || !("children" in node)) return false;

  const children = (node as { children: unknown[] }).children;
  const elementChildren = children.filter(
    (child): child is { type: "element"; tagName: string } =>
      !!child &&
      typeof child === "object" &&
      "type" in child &&
      child.type === "element" &&
      "tagName" in child &&
      typeof (child as { tagName: unknown }).tagName === "string",
  );

  return elementChildren.length === 1 && elementChildren[0]?.tagName === "img";
}

const components: Components = {
  h2: ({ children }) => (
    <h2
      className={`${caseTextWidthClassName} mt-5 break-words font-sans text-2xl font-bold leading-[1.3] text-primary`}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      className={`${caseTextWidthClassName} mt-5 break-words font-sans text-xl font-bold leading-[1.35] text-primary`}
    >
      {children}
    </h3>
  ),
  p: ({ node, children }) => {
    if (isImageOnlyParagraph(node)) {
      return <div className="my-8 min-w-0 w-full max-w-full">{children}</div>;
    }

    return (
      <p className={`${caseTextWidthClassName} break-words ${caseBodyClassName}`}>
        {children}
      </p>
    );
  },
  hr: () => (
    <hr className={`${caseTextWidthClassName} border-primary my-6 border-t`} />
  ),
  img: ({ src, alt }) => {
    if (!src || typeof src !== "string") return null;

    return <CaseMedia src={src} alt={alt ?? ""} />;
  },
};

type RichTextProps = {
  content: string;
};

export function RichText({ content }: RichTextProps) {
  return (
    <div className="blocks flex min-w-0 w-full flex-col gap-4 text-lg">
      <Markdown components={components}>{content}</Markdown>
    </div>
  );
}
