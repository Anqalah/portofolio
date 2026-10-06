"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/** Garis tinta horizontal di atas halaman, mengikuti scroll progress */
export function InkProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]
                 bg-gradient-to-r from-ink-900 via-seal-500 to-gold-500
                 dark:from-paper-50 dark:via-seal-500 dark:to-gold-500"
    />
  );
}

/** Blob tinta besar yang bergerak saat scroll */
export function InkScrollBlob() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);

  return (
    <motion.div
      aria-hidden
      style={{ y, x, rotate, scale }}
      className="pointer-events-none fixed top-[-10%] right-[-10%] w-[60vmax] h-[60vmax] -z-10
                 rounded-full blur-[120px]
                 bg-[radial-gradient(circle,rgba(178,58,42,0.10),transparent_60%)]
                 dark:bg-[radial-gradient(circle,rgba(178,58,42,0.18),transparent_60%)]"
    />
  );
}