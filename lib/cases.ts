export type CaseLayout = "default" | "gallery";

export type Case = {
  title: string;
  slug: string;
  description: string;
  cover: string;
  layout?: CaseLayout;
  media?: string[];
};
