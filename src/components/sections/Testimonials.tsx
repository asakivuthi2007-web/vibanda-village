"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { cinematic } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 7000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  const go = (next: number) => setIndex(((next % testimonials.length) + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="section-pad relative overflow-hidden bg-charcoal">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-gold/[0.04] blur-[180px]"
        aria-hidden
      />

      <div className="container-edit relative">
        <SectionHeading eyebrow="Guest Reviews" title="Words from the table" align="center" className="mx-auto" />

        <Reveal delay={0.1} className="relative mx-auto mt-16 max-w-3xl text-center lg:mt-20">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -22 }}
              transition={{ duration: 0.6, ease: cinematic }}
            >
              <div className="flex justify-center gap-1" aria-hidden>
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={1} />
                ))}
              </div>

              <p className="mx-auto mt-8 max-w-2xl text-balance font-display text-2xl italic leading-relaxed text-ivory sm:text-3xl lg:text-[2.1rem] lg:leading-[1.45]">
                &ldquo;{active.quote}&rdquo;
              </p>

              <div className="mt-8 flex flex-col items-center gap-1.5">
                <span className="text-sm uppercase tracking-[0.25em] text-gold-bright">{active.name}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-sand-dim">{active.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>

        <Reveal delay={0.2} className="mt-14 flex items-center justify-center gap-8 lg:mt-16">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="cursor-pointer text-sand-dim transition-colors duration-300 hover:text-gold-bright"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.25} />
          </button>

          <div className="flex items-center gap-3">
            {testimonials.map((testimonial, i) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-current={i === index}
                className="group relative cursor-pointer p-1.5"
              >
                <span
                  className={cn(
                    "block h-1.5 w-1.5 rounded-full transition-colors duration-500",
                    i === index ? "bg-gold" : "bg-sand-dim/40 group-hover:bg-sand-dim"
                  )}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="cursor-pointer text-sand-dim transition-colors duration-300 hover:text-gold-bright"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
