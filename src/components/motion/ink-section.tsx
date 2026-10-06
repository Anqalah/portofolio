"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { inkSpread, stagger } from "@/lib/motion";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Delay sebelum mulai animasi */
  delay?: number;
}

export function InkSection({ children, className, id, delay = 0 }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      variants={reduce ? undefined : stagger}
      transition={{ delayChildren: delay }}
      className={cn("relative section-pad", className)}
    >
      {/* Lapisan tinta latar */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 -z-10
                   bg-[radial-gradient(ellipse_at_center,rgba(17,17,17,0.06),transparent_65%)]
                   dark:bg-[radial-gradient(ellipse_at_center,rgba(178,58,42,0.10),transparent_65%)]"
      />
      {children}
    </motion.section>
  );
}

/** Item anak dari InkSection, otomatis dapat animasi inkSpread */
export function InkItem({
  children,
  className,
  variants = inkSpread,
}: {
  children: ReactNode;
  className?: string;
  variants?: any;
}) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}