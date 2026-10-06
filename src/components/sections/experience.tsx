"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Tag } from "@/components/ui/tag";
import { inkFade, stagger } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="container-ink"
      >
        <motion.div variants={inkFade}>
          <Tag accent>Experience</Tag>
        </motion.div>
        <motion.h2
          variants={inkFade}
          className="font-display text-4xl md:text-5xl text-ink-900 mt-4 mb-12"
        >
          Perjalanan
        </motion.h2>

        <div className="relative pl-6 md:pl-8">
          {/* Garis tinta vertikal */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-linear-to-b from-ink-900 via-ink-300 to-transparent" />

          <div className="space-y-10">
            {experiences.map((e) => (
              <motion.div key={e.role + e.company} variants={inkFade}>
                <div className="relative">
                  {/* Titik tinta */}
                  <span className="absolute -left-6.75 md:-left-8.75 top-2 w-3 h-3 rounded-full bg-seal-500 shadow-seal" />

                  <p className="font-heading text-xs tracking-[0.2em] text-ink-300 mb-1">
                    {e.period}
                  </p>
                  <h3 className="font-heading text-xl md:text-2xl text-ink-900">
                    {e.role}
                  </h3>
                  <p className="font-body text-sm text-seal-500 mb-3">
                    {e.company}
                  </p>
                  <p className="font-body text-ink-500 leading-relaxed max-w-2xl">
                    {e.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}