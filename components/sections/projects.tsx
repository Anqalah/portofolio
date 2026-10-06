"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { projects } from "@/lib/data";
import { inkFade, stagger } from "@/lib/motion";

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-paper-100/60">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="container-ink"
      >
        <motion.div variants={inkFade}>
          <Tag accent>Projects</Tag>
        </motion.div>
        <motion.h2
          variants={inkFade}
          className="font-display text-4xl md:text-5xl text-ink-900 mt-4 mb-12"
        >
          Galeri Karya
        </motion.h2>

        {/* Galeri masonry-ish */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={inkFade}
              transition={{ delay: i * 0.05 }}
              className="mb-6 break-inside-avoid"
            >
              <Card className="group cursor-pointer">
                {/* Preview bergaya tinta */}
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-5 bg-gradient-to-br from-paper-200 via-paper-100 to-paper-50">
                  <div className="absolute inset-0 opacity-70 mix-blend-multiply">
                    <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-ink-300/40 blur-2xl" />
                    <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-seal-500/10 blur-3xl" />
                  </div>
                  <span className="absolute bottom-3 left-4 font-display text-5xl text-ink-900/80 leading-none">
                    {p.title.charAt(0)}
                  </span>
                  <span className="absolute top-3 right-3 font-heading text-xs text-ink-300">
                    {p.year}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <Tag accent>{p.tag}</Tag>
                </div>

                <h3 className="font-heading text-xl text-ink-900 mb-2 group-hover:text-seal-500 transition-colors duration-500 ease-ink">
                  {p.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-ink-500 mb-4">
                  {p.desc}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="text-xs font-heading text-ink-300 tracking-wide"
                    >
                      #{s}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}