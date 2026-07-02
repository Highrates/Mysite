import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePageContent } from "@/components/CasePageContent";
import { getAllCaseSlugs, getCaseBySlug } from "@/lib/get-case";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    return { title: "Case not found" };
  }

  return {
    title: `${item.title} — Aleksey Popov`,
    description: item.description,
  };
}

export default async function CasePage({ params }: PageProps) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    notFound();
  }

  return <CasePageContent item={item} />;
}
