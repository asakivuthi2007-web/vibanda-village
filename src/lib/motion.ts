import type { Variants, Transition } from "motion/react";

export const cinematic: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 56 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: cinematic },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.2, ease: cinematic },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 1.12 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: cinematic },
  },
};

export const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1.2, ease: cinematic },
  },
};

/** Stagger container — children should use `staggerItem` */
export const staggerContainer = (stagger = 0.14, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: cinematic },
  },
};

/** Per-character / per-word reveal for headlines */
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: { duration: 1, ease: cinematic },
  },
};

export const viewportOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;
export const viewportEager = { once: true, margin: "-5% 0px -5% 0px" } as const;
