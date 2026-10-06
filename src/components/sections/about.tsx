"use client";

import { motion } from "framer-motion";
import { inkFade, stagger } from "@/lib/motion";
import { Tag } from "@/components/ui/tag";

export function About() {
  return (
    <section id="about" className="section-pad bg-paper-100/60">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="container-ink"
      >
        <motion.div variants={inkFade}>
          <Tag accent>About Me</Tag>
        </motion.div>

        <motion.h2
          variants={inkFade}
          className="font-display text-4xl md:text-5xl text-ink-900 mt-4 mb-8"
        >
          Tentang Saya
        </motion.h2>

        <motion.div
          variants={inkFade}
          className="grid md:grid-cols-3 gap-8 items-start"
        >
          <div className="md:col-span-2 space-y-5">
            <p className="font-body text-lg leading-relaxed text-ink-500">
              Saya adalah seorang <span className="text-ink-900 font-heading">Full-Stack Developer</span>{" "}
              yang berfokus pada pembuatan aplikasi web modern dengan performa
              tinggi dan pengalaman pengguna yang tenang. 
            </p>
            <p className="font-body text-lg leading-relaxed text-ink-500">
              Selama beberapa tahun terakhir, saya telah bekerja dengan
              berbagai tim dan klien untuk membangun produk digital dari nol,
              mulai dari riset, desain, pengembangan, hingga deployment.
              Ketertarikan saya mencakup arsitektur backend dan design system ke dalam produk sehari-hari.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { k: "Nama", v: "Muhammad Fadhil" },
              { k: "Peran", v: "Full-Stack Developer" },
              { k: "Lokasi", v: "Indonesia" },
              { k: "Status", v: "Tersedia untuk proyek" },
            ].map((item) => (
              <div
                key={item.k}
                className="flex justify-between border-b border-paper-200 pb-3"
              >
                <span className="font-heading text-sm text-ink-300">
                  {item.k}
                </span>
                <span className="font-body text-sm text-ink-700">
                  {item.v}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}