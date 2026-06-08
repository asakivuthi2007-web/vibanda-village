"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={cn("max-w-2xl", isCenter && "mx-auto text-center", className)}>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="eyebrow"
      >
        <span className="h-px w-8 bg-gold/60" aria-hidden />
        {eyebrow}
      </motion.p>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={{ delay: 0.08 }}
        className={cn(
          "mt-5 font-display text-4xl leading-[1.12] text-ivory sm:text-5xl lg:text-6xl",
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ delay: 0.16 }}
          className="mt-6 text-base leading-relaxed text-sand sm:text-lg"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
