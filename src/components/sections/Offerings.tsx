"use client";

import { motion } from "motion/react";
import { Flame, Music, Bike, PartyPopper, type LucideIcon } from "lucide-react";
import { offerings } from "@/lib/data";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const icons: Record<string, LucideIcon> = { Flame, Music, Bike, PartyPopper };

export function Offerings() {
  return (
    <section aria-label="What we offer" className="relative border-y border-ivory/10 bg-charcoal">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1, 0.05)}
        className="container-edit grid grid-cols-1 divide-y divide-ivory/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x"
      >
        {offerings.map((item) => {
          const Icon = icons[item.icon] ?? Flame;
          return (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="group flex items-start gap-4 px-2 py-8 sm:px-6 lg:px-8"
            >
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-500 group-hover:border-gold/70 group-hover:bg-gold/5">
                <Icon size={18} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-display text-lg text-ivory">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-sand/80">{item.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
