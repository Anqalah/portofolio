"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { InkSection, InkItem } from "@/components/motion/ink-section";
import { InkReveal } from "@/components/motion/ink-reveal";
import { inkRise } from "@/lib/motion";
import type { PostMeta } from "@/lib/mdx";

export function BlogIndex({ posts }: { posts: PostMeta[] }) {
  return (
    <InkSection id="blog">
      <div className="container-ink">
        <InkItem><Tag accent>Blog</Tag></InkItem>
        <InkReveal as="h2" className="font-display text-4xl md:text-5xl mt-4 mb-3 text-ink-900 dark:text-paper-50">
          Catatan Tinta
        </InkReveal>
        <InkItem>
          <p className="font-body text-ink-500 dark:text-ink-100 max-w-xl mb-14">
            Tulisan tentang desain, kode, dan hal-hal yang saya pikirkan.
          </p>
        </InkItem>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={inkRise(i * 0.08)}
            >
              <Link href={`/blog/${p.slug}`} className="block group">
                <Card className="surface h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-heading text-xs tracking-[0.2em] text-ink-300 dark:text-ink-100">
                      {p.date}
                    </span>
                    <span className="text-ink-300 dark:text-ink-100">·</span>
                    <span className="font-heading text-xs text-ink-300 dark:text-ink-100">
                      {p.readingTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl text-ink-900 dark:text-paper-50 mb-3 group-hover:text-seal-500 transition-colors duration-500 ease-ink">
                    {p.title}
                  </h3>

                  <p className="font-body text-ink-500 dark:text-ink-100 leading-relaxed mb-5">
                    {p.excerpt}
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {p.tags.map((t) => <li key={t}><Tag>{t}</Tag></li>)}
                  </ul>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </InkSection>
  );
}