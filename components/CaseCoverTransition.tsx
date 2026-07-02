import { ViewTransition } from "react";

type CaseCoverTransitionProps = {
  slug: string;
  children: React.ReactNode;
};

export function CaseCoverTransition({ slug, children }: CaseCoverTransitionProps) {
  return (
    <ViewTransition name={`case-cover-${slug}`} share="case-cover-morph">
      {children}
    </ViewTransition>
  );
}
