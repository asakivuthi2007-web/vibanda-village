"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { aboutContent } from "@/lib/data";
import { cinematic, fadeUp, scaleReveal, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-noir">
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold/[0.06] blur-[160px]"
        aria-hidden
      />

      <div className="container-edit grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Image column */}
        <div className="relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -28, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 1.2, ease: cinematic }}
            className="pointer-events-none absolute -left-5 -top-5 h-full w-full rounded-[2px] border border-gold/25 sm:-left-7 sm:-top-7"
            aria-hidden
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={scaleReveal}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] sm:aspect-[5/6]"
          >
            <Image
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/55 via-transparent to-transparent" />
            <span className="absolute left-5 top-1/2 hidden -translate-y-1/2 text-[0.65rem] uppercase tracking-[0.35em] text-ivory/45 [writing-mode:vertical-rl] sm:block">
              Nairobi, Kenya
            </span>
          </motion.div>
        </div>

        {/* Content column */}
        <div className="order-1 lg:order-2">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="eyebrow"
          >
            <span className="h-px w-8 bg-gold/60" aria-hidden />
            {aboutContent.eyebrow}
          </motion.p>

          <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.12] text-ivory sm:text-5xl lg:text-6xl">
            <RevealText lines={["Where strangers", "become regulars"]} delay={0.1} />
          </h2>

          <div className="mt-8 max-w-xl space-y-5">
            {aboutContent.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.12 + i * 0.1}>
                <p className="text-base leading-relaxed text-sand sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.32} className="mt-9 flex flex-wrap items-center gap-5">
            <span className="font-display text-2xl italic text-gold-bright sm:text-3xl">
              {aboutContent.signatureName}
            </span>
            <span className="hairline w-12 sm:w-16" aria-hidden />
            <span className="text-xs uppercase tracking-[0.28em] text-sand-dim">
              {aboutContent.signatureRole}
            </span>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.12, 0.18)}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-ivory/10 pt-9 sm:gap-10"
          >
            {aboutContent.stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <p className="font-display text-3xl text-gold sm:text-4xl lg:text-5xl">{stat.value}</p>
                <p className="mt-2 text-[0.65rem] uppercase leading-snug tracking-[0.2em] text-sand-dim sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
