"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { projectsData } from "@/lib/projects";
import { InkSection, InkItem } from "@/components/motion/ink-section";
import { InkReveal } from "@/components/motion/ink-reveal";
import { inkRise } from "@/lib/motion";

export function FeaturedProjects() {
  const featured = projectsData.slice(0, 3);

  return (
    <InkSection id="projects" className="bg-paper-100/60 dark:bg-night-800/40">
      <div className="container-ink">
        <InkItem>
          <Tag accent>Featured</Tag>
        </InkItem>
        <InkReveal
          as="h2"
          className="font-display text-4xl md:text-5xl mt-4 mb-3 text-ink-900 dark:text-paper-50"
        >
          Proyek Pilihan
        </InkReveal>
        <InkItem>
          <p className="font-body text-ink-500 dark:text-ink-100 max-w-xl mb-14">
            Beberapa karya yang paling saya banggakan.
          </p>
        </InkItem>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => {
            // Ambil link pertama (kalau ada)
            const primaryLink = p.links?.[0]?.href;

            // Konten kartu — dipakai baik sebagai <a> atau <div>
            const cardContent = (
              <Card className="surface h-full group-hover:border-seal-500/40 transition-colors duration-500 ease-ink">
                <div
                  className="relative aspect-4/3 rounded-sm overflow-hidden mb-5
                             bg-linear-to-br from-paper-200 via-paper-100 to-paper-50
                             dark:from-night-700 dark:via-night-800 dark:to-night-900"
                >
                </div>

                <Tag accent>{p.tag}</Tag>

                <h3 className="font-heading text-xl text-ink-900 dark:text-paper-50 mt-3 mb-2 group-hover:text-seal-500 transition-colors duration-500 ease-ink">
                  {p.title}
                </h3>

                <p className="font-body text-sm text-ink-500 dark:text-ink-100 line-clamp-3">
                  {p.summary}
                </p>

                {/* Hint link di bawah */}
                {primaryLink && (
                  <div className="mt-4 flex items-center gap-2 font-heading text-xs tracking-[0.15em] text-seal-500 group-hover:gap-3 transition-all duration-500 ease-ink">
                    <span>KUNJUNGI</span>
                    <span className="text-base leading-none">→</span>
                  </div>
                )}
              </Card>
            );

            return (
              <motion.div
                key={p.slug}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={inkRise(i * 0.08)}
              >
                {primaryLink ? (
         
                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label={`Buka ${p.title} di tab baru`}
                  >
                    {cardContent}
                  </a>
                ) : (
                  // Fallback kalau tidak ada link
                  <div className="block cursor-default opacity-90">
                    {cardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </InkSection>
  );
}