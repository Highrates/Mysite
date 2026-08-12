import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Case, CaseLayout, CaseMediaItem } from "./cases";

export type CaseContent = Case & {
  body: string;
  layout: CaseLayout;
  media: CaseMediaItem[];
};

type CaseFrontmatter = {
  title?: string;
  slug?: string;
  description?: string;
  cover?: string;
  layout?: CaseLayout;
  media?: CaseMediaItem[];
  order?: number;
  hidden?: boolean;
};

type ParsedCase = CaseContent & { order: number };

const casesDirectory = path.join(process.cwd(), "content/cases");

let casesCache: CaseContent[] | null = null;

function parseCaseFile(filename: string): ParsedCase | null {
  const markdownPath = path.join(casesDirectory, filename);
  const file = fs.readFileSync(markdownPath, "utf8");
  const { data, content } = matter(file);
  const frontmatter = data as CaseFrontmatter;

  if (!frontmatter.title || !frontmatter.slug || !frontmatter.cover) {
    return null;
  }

  return {
    title: frontmatter.title,
    slug: frontmatter.slug,
    description: frontmatter.description ?? "",
    cover: frontmatter.cover,
    layout: frontmatter.layout ?? "default",
    media: frontmatter.media ?? [],
    hidden: frontmatter.hidden ?? false,
    body: content,
    order: frontmatter.order ?? Number.MAX_SAFE_INTEGER,
  };
}

function loadAllCases(): CaseContent[] {
  if (process.env.NODE_ENV === "production" && casesCache) {
    return casesCache;
  }

  const files = fs
    .readdirSync(casesDirectory)
    .filter((filename) => filename.endsWith(".md"));

  const loaded = files
    .map(parseCaseFile)
    .filter((item): item is ParsedCase => item !== null)
    .filter((item) => !item.hidden)
    .sort((a, b) => a.order - b.order)
    .map(({ order: _order, hidden: _hidden, ...item }) => item);

  if (process.env.NODE_ENV === "production") {
    casesCache = loaded;
  }

  return loaded;
}

export function getAllCases(): Case[] {
  return loadAllCases();
}

export function getCaseBySlug(slug: string): CaseContent | null {
  return loadAllCases().find((item) => item.slug === slug) ?? null;
}

export function getAllCaseSlugs(): string[] {
  return loadAllCases().map((item) => item.slug);
}

export function getAdjacentCases(slug: string): {
  prev: Case | null;
  next: Case | null;
} {
  const cases = getAllCases();
  const index = cases.findIndex((item) => item.slug === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? cases[index - 1] : null,
    next: index < cases.length - 1 ? cases[index + 1] : null,
  };
}
