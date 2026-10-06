"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { contacts } from "@/lib/data";
import { inkFade, stagger } from "@/lib/motion";

export function Contact() {
  return (
    <section id="contact" className="section-pad">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="container-ink"
      >
        <motion.div variants={inkFade}>
          <Tag accent>Contact</Tag>
        </motion.div>
        <motion.h2
          variants={inkFade}
          className="font-display text-4xl md:text-5xl text-ink-900 mt-4 mb-4"
        >
          Mari Terhubung
        </motion.h2>
        <motion.p
          variants={inkFade}
          className="font-body text-lg text-ink-500 max-w-xl mb-12"
        >
          Terbuka untuk kolaborasi, proyek freelance tentang teknologi dan Website.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6">
          {contacts.map((c) => (
            <motion.a
              key={c.label}
              variants={inkFade}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full group">
                <p className="font-heading text-xs tracking-[0.2em] text-ink-300 mb-3">
                  {c.label.toUpperCase()}
                </p>
                <p className="font-heading text-xl text-ink-900 group-hover:text-seal-500 transition-colors duration-500 ease-ink mb-2">
                  {c.handle}
                </p>
                <p className="font-body text-sm text-ink-500">
                  Klik untuk membuka →
                </p>
              </Card>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}