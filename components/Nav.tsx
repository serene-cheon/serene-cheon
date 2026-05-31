"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur border-b border-stone-100">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-stone-800 hover:text-teal-600 transition-colors"
        >
          Serene Cheon
        </Link>
        <ul className="flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? "text-teal-600"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
