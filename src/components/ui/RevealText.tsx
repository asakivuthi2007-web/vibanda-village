"use client";

import { motion } from "motion/react";
import { cinematic, viewportOnce } from "@/lib/motion";

type RevealTextProps = {
  lines: string[];
  className?: string;
  delay?: number;
  /** stagger between each line, in seconds */
  stagger?: number;
};

/**
 * Masks each line in an overflow-hidden box and lifts it up from below —
 * the cinematic "curtain rising" headline reveal.
 */
export function RevealText({ lines, className, delay = 0, stagger = 0.12 }: RevealTextProps) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={line + i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "115%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={viewportOnce}
            transition={{
              duration: 1.1,
              ease: cinematic,
              delay: delay + i * stagger,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
