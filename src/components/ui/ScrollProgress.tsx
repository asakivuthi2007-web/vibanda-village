"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** A hairline of gold that fills across the top of the viewport as the guest scrolls through the story. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 70, damping: 22, mass: 0.25 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold-deep via-gold to-gold-bright"
      aria-hidden
    />
  );
}
