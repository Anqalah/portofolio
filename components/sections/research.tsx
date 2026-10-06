"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { achievements } from "@/lib/data";
import { inkFade, stagger } from "@/lib/motion";

export function Research() {
  return (
    <section id="research" className="section-pad bg-paper-100/60">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="container-ink"
      >
        <motion.div variants={inkFade}>
          <Tag accent>Research & Achievements</Tag>
        </motion.div>
        <motion.h2
          variants={inkFade}
          className="font-display text-4xl md:text-5xl text-ink-900 mt-4 mb-12"
        >
          Penghargaan & Riset
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <motion.div key={a.title} variants={inkFade}>
              <Card className="h-full">
                <p className="font-heading text-xs tracking-[0.2em] text-ink-300 mb-2">
                  {a.year}
                </p>
                <h3 className="font-heading text-lg text-ink-900 mb-2">
                  {a.title}
                </h3>
                <p className="font-body text-sm text-seal-500 mb-3">{a.org}</p>
                <p className="font-body text-sm leading-relaxed text-ink-500">
                  {a.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}