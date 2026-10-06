"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { skills } from "@/lib/data";
import { inkFade, stagger } from "@/lib/motion";

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="container-ink"
      >
        <motion.div variants={inkFade}>
          <Tag accent>Skills</Tag>
        </motion.div>
        <motion.h2
          variants={inkFade}
          className="font-display text-4xl md:text-5xl text-ink-900 mt-4 mb-12"
        >
          Keterampilan & Keahlian
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={inkFade}>
              <Card className="h-full">
                <h3 className="font-heading text-xl text-ink-900 mb-4">
                  {category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li key={s}>
                      <Tag>{s}</Tag>
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