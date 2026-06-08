"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { experienceFeatures } from "@/lib/data";
import { scaleReveal, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Feature = (typeof experienceFeatures)[number];

function ExperienceRow({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const reversed = index % 2 === 1;

  return (
    <div ref={ref} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
      <div className={cn("relative lg:col-span-7", reversed && "lg:order-2")}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={scaleReveal}
          className="relative aspect-[16/11] w-full overflow-hidden rounded-[2px]"
        >
          <motion.div className="absolute inset-0" style={{ y: imageY, scale: 1.16 }}>
            <Image
              src={feature.image.src}
              alt={feature.image.alt}
              fill
              sizes="(min-width: 1024px) 56vw, 92vw"
              className="object-cover"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/45 via-transparent to-transparent" />
          <span className="pointer-events-none absolute inset-4 rounded-[2px] border border-ivory/10" aria-hidden />
        </motion.div>
      </div>

      <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
        <Reveal>
          <span className="font-display text-sm italic tracking-[0.3em] text-gold/70">
            0{index + 1}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="mt-4 font-display text-3xl text-ivory sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
            {feature.title}
          </h3>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-md text-base leading-relaxed text-sand sm:text-lg">
            {feature.description}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <span className="hairline mt-8 block max-w-24" aria-hidden />
        </Reveal>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden bg-noir">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[34rem] w-[34rem] rounded-full bg-gold/[0.05] blur-[170px]"
        aria-hidden
      />

      <div className="container-edit">
        <SectionHeading
          eyebrow="The Vibe"
          title="More than a meal"
          description="Food, drinks, and music under the open sky — every corner of the village is built for good company and long, easy evenings."
          align="center"
          className="mx-auto"
        />

        <div className="mt-20 flex flex-col gap-20 lg:mt-28 lg:gap-32">
          {experienceFeatures.map((feature, i) => (
            <ExperienceRow key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
