"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function InkCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 300, damping: 40, mass: 0.4 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  // Sembunyikan di perangkat sentuh
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[70] -translate-x-1/2 -translate-y-1/2
                 w-24 h-24 rounded-full mix-blend-multiply dark:mix-blend-screen
                 bg-[radial-gradient(circle,rgba(17,17,17,0.10),transparent_70%)]
                 dark:bg-[radial-gradient(circle,rgba(178,58,42,0.18),transparent_70%)]
                 blur-2xl"
    />
  );
}