"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { signatureDishes } from "@/lib/data";
import { cinematic, fadeUp, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function SignatureDishes() {
  return (
    <section id="dishes" className="section-pad relative bg-charcoal">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Signature Dishes"
          title="The plates our regulars come back for"
          description="A few of the favourites that keep the garden full — straight off the grill, from the bar, and something sweet to finish."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:gap-6">
          {signatureDishes.map((dish, i) => (
            <motion.article
              key={dish.name}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: (i % 2) * 0.1, duration: 1.1, ease: cinematic }}
              className="group relative flex aspect-[4/5] items-end overflow-hidden rounded-[2px] sm:aspect-[5/6]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 scale-[1.02] transition-transform duration-[1500ms] ease-[var(--ease-cinematic)] group-hover:scale-[1.12]">
                  <Image
                    src={dish.image.src}
                    alt={dish.image.alt}
                    fill
                    sizes="(min-width: 1024px) 44vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-noir/35 opacity-0 transition-opacity duration-700 ease-[var(--ease-cinematic)] group-hover:opacity-100" />

              <span
                className="pointer-events-none absolute inset-3 rounded-[2px] border border-gold/0 transition-colors duration-700 group-hover:border-gold/30 sm:inset-4"
                aria-hidden
              />

              <div className="relative z-10 flex w-full items-end justify-between gap-5 p-6 sm:p-8">
                <div>
                  <h3 className="font-display text-xl text-ivory sm:text-2xl lg:text-[1.7rem]">{dish.name}</h3>
                  <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-sand/75 sm:max-w-xs">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex flex-col items-center gap-4 text-center lg:mt-16">
          <p className="max-w-md text-sm leading-relaxed text-sand/70">
            There&rsquo;s plenty more where these came from — explore the full spread from the grill, bar, and kitchen.
          </p>
          <Link href="#menu" className="btn-gold-fill group">
            View the Menu
            <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
