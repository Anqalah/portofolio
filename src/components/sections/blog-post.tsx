"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Tag } from "@/components/ui/tag";
import { InkReveal } from "@/components/motion/ink-reveal";
import type { Post } from "@/lib/mdx";
import { ReactNode } from "react";

export function BlogPostLayout({
  meta,
  children,
}: {
  meta: Post;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative section-pad overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 -z-10
                     bg-[radial-gradient(ellipse_at_top,rgba(178,58,42,0.10),transparent_60%)]
                     dark:bg-[radial-gradient(ellipse_at_top,rgba(178,58,42,0.18),transparent_60%)]"
        />

        <div className="container-ink">
          <Link
            href="/blog"
            className="font-heading text-sm text-ink-300 dark:text-ink-100 brush-underline"
          >
            ← Kembali ke Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mt-6 mb-4">
              <span className="font-heading text-xs tracking-[0.2em] text-ink-300 dark:text-ink-100">
                {meta.date}
              </span>
              <span className="text-ink-300 dark:text-ink-100">·</span>
              <span className="font-heading text-xs text-ink-300 dark:text-ink-100">
                {meta.readingTime}
              </span>
            </div>

            <InkReveal as="h1" className="font-display text-4xl md:text-6xl leading-[1.1] text-ink-900 dark:text-paper-50 mb-6">
              {meta.title}
            </InkReveal>

            <p className="font-body text-lg md:text-xl text-ink-500 dark:text-ink-100 max-w-2xl mb-6">
              {meta.excerpt}
            </p>

            <ul className="flex flex-wrap gap-2">
              {meta.tags.map((t) => <li key={t}><Tag>{t}</Tag></li>)}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="container-ink max-w-3xl"
        >
          {children}
        </motion.div>
      </section>
    </>
  );
}