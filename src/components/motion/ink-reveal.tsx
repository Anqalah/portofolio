"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { brushReveal } from "@/lib/motion";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
}

export function InkReveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: Props) {
  const MotionTag = motion[Tag] as any;
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={brushReveal}
      transition={{ delay }}
      className={cn("relative", className)}
    >
      {children}
    </MotionTag>
  );
}