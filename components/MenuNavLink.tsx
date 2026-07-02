"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuNavLinkProps = {
  href: string;
  children: React.ReactNode;
  onNavigate?: () => void;
};

export function MenuNavLink({ href, children, onNavigate }: MenuNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={[
        "inline-flex items-center py-2 text-2xl font-semibold leading-[1.4] transition-colors",
        isActive ? "text-primary" : "text-secondary hover:text-primary",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
