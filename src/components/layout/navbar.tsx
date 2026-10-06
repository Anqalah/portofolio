"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-ink",
        scrolled
          ? "bg-paper-50/80 dark:bg-night-900/80 backdrop-blur-md border-b border-paper-200 dark:border-night-700"
          : "bg-transparent"
      )}
    >
      <nav className="container-ink px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl text-ink-900 dark:text-paper-50 leading-none">
          凌<span className="text-seal-500">塔</span>
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-heading text-sm text-ink-500 dark:text-ink-100
                           brush-underline hover:text-ink-900 dark:hover:text-paper-50
                           transition-colors duration-500 ease-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-ink-900 dark:text-paper-50 text-2xl leading-none"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-ink",
          "bg-paper-50/95 dark:bg-night-900/95 backdrop-blur-md border-b border-paper-200 dark:border-night-700",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <ul className="px-6 py-4 space-y-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-heading text-ink-700 dark:text-paper-100 brush-underline"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}