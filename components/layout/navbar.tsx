"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-ink",
        scrolled
          ? "bg-paper-50/80 backdrop-blur-md border-b border-paper-200"
          : "bg-transparent"
      )}
    >
      <nav className="container-ink px-6 h-16 flex items-center justify-between">
        <Link
          href="#home"
          className="font-display text-2xl text-ink-900 leading-none"
        >
          凌<span className="text-seal-500">塔</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-heading text-sm text-ink-500 brush-underline hover:text-ink-900 transition-colors duration-500 ease-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink-900 text-2xl leading-none"
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-ink",
          "bg-paper-50/95 backdrop-blur-md border-b border-paper-200",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <ul className="px-6 py-4 space-y-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-heading text-ink-700 brush-underline"
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