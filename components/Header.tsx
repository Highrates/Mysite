"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import type { Case } from "@/lib/cases";
import { BurgerIcon } from "./BurgerIcon";
import { MenuNavLink } from "./MenuNavLink";

type HeaderProps = {
  cases: Case[];
};

function getBreadcrumbLabel(pathname: string, cases: Case[]): string | null {
  if (pathname === "/") return null;

  const caseMatch = pathname.match(/^\/projects\/([^/]+)$/);
  if (caseMatch) {
    const item = cases.find((entry) => entry.slug === caseMatch[1]);
    return item?.title ?? caseMatch[1];
  }

  const segment = pathname.split("/").filter(Boolean).at(-1);
  return segment ?? null;
}

export function Header({ cases }: HeaderProps) {
  const pathname = usePathname();
  const menuId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const breadcrumbLabel = getBreadcrumbLabel(pathname, cases);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-30 flex h-14 w-full items-center gap-3 bg-background-main px-3"
        style={{ viewTransitionName: "site-header" }}
      >
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((open) => !open)}
          className="group/button inline-flex h-9 w-9 flex-none cursor-pointer select-none items-center justify-center gap-1.5 rounded-full p-0 text-lg font-medium text-primary hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50"
        >
          <BurgerIcon isOpen={isOpen} />
        </button>

        {breadcrumbLabel ? (
          <nav
            aria-label="Breadcrumb"
            className="min-w-0 truncate p-2 text-base font-medium text-primary"
          >
            <Link href="/" className="text-primary">
              Aleksey Popov
            </Link>
            <span className="font-medium text-quaternary opacity-50">
              {" "}
              /{" "}
            </span>
            <span className="text-primary">{breadcrumbLabel}</span>
          </nav>
        ) : null}
      </header>

      <div
        id={menuId}
        className={[
          "fixed inset-0 top-14 z-20 flex w-full origin-top flex-col bg-background-main transition-[opacity,transform] duration-200 ease-out",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Site" className="flex-1 overflow-y-auto p-6">
          <div className="flex flex-col gap-1">
            <MenuNavLink href="/" onNavigate={closeMenu}>
              Home
            </MenuNavLink>
            <MenuNavLink href="/#work" onNavigate={closeMenu}>
              Work
            </MenuNavLink>
            <MenuNavLink href="/#projects" onNavigate={closeMenu}>
              Projects
            </MenuNavLink>
          </div>

          <div className="mt-8">
            <span className="text-sm font-medium text-quaternary">
              All projects
            </span>
            <div className="mt-3 flex flex-col gap-1">
              {cases.map((item) => (
                <MenuNavLink
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  onNavigate={closeMenu}
                >
                  {item.title}
                </MenuNavLink>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
