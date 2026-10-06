"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { inkFade, brushReveal, stagger } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-pad overflow-hidden"
    >
      {/* Dekorasi kabut */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 w-md h-md rounded-full bg-ink-100/40 blur-3xl animate-mist-drift" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-mist-500/10 blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="container-ink relative"
      >
        <motion.p
          variants={inkFade}
          className="font-display text-seal-500 tracking-[0.3em] mb-6"
        >
          Portfolio
        </motion.p>

        <motion.h1
          variants={brushReveal}
          className="font-display text-6xl md:text-8xl leading-[1.05] text-ink-900 mb-6 text-balance"
        >
          Hi, I&apos;m Muhammad Fadhil
        </motion.h1>

        <motion.p
          variants={inkFade}
          className="font-heading text-2xl md:text-3xl text-ink-700 mb-4"
        >
          Full-Stack Developer
        </motion.p>

        <motion.p
          variants={inkFade}
          className="font-body text-lg leading-relaxed text-ink-500 max-w-xl mb-10"
        >
          Saya membangun aplikasi web yang bersih, cepat, dan friendly user dari
          antarmuka hingga basis data.
        </motion.p>

        <motion.div variants={inkFade} className="flex flex-wrap gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}