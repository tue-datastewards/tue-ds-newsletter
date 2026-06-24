"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type EmailEntry = { slug: string; title: string };

export function Sidebar({ emails }: { emails: EmailEntry[] }) {
  const pathname = usePathname();

  return (
    <aside className="__sidebar">
      <div className="__sidebar-header">TU/e DS Newsletter</div>
      <nav className="__sidebar-nav">
        {emails.map((email) => {
          const href = `/preview/${email.slug}`;
          const active = pathname === href;
          return (
            <Link
              key={email.slug}
              href={href}
              className={active ? "__sidebar-link active" : "__sidebar-link"}
            >
              {email.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
