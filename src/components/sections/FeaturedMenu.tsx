"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { menuCategories } from "@/lib/data";
import { cinematic } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
  exit: {},
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: cinematic } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: cinematic } },
};

export function FeaturedMenu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const active = menuCategories.find((category) => category.id === activeId) ?? menuCategories[0];

  return (
    <section id="menu" className="section-pad relative bg-charcoal">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Featured Menu"
          title="What's on the grill"
          description="From smoky nyama choma to cold cocktails and sweet finishes — a taste of what's cooking at Vibanda Village tonight."
          align="center"
          className="mx-auto"
        />

        <Reveal delay={0.12} className="mt-14 lg:mt-16">
          <div
            role="tablist"
            aria-label="Menu categories"
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-b border-ivory/10 pb-6"
          >
            {menuCategories.map((category) => {
              const isActive = category.id === activeId;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(category.id)}
                  className={cn(
                    "relative pb-3 text-xs uppercase tracking-[0.28em] transition-colors duration-500 cursor-pointer",
                    isActive ? "text-gold-bright" : "text-sand-dim hover:text-sand"
                  )}
                >
                  {category.label}
                  {isActive && (
                    <motion.span
                      layoutId="menu-tab-underline"
                      className="absolute -bottom-[1.625rem] left-0 right-0 h-px bg-gold"
                      transition={{ duration: 0.5, ease: cinematic }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="relative mt-4 min-h-[30rem] lg:min-h-[22rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              variants={listVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid gap-x-16 gap-y-10 pt-10 sm:grid-cols-2 lg:pt-12"
            >
              {active.items.map((item) => (
                <motion.div key={item.name} variants={itemVariants} className="group">
                  <h3 className="font-display text-xl text-ivory transition-colors duration-500 group-hover:text-gold-bright sm:text-[1.4rem]">
                    {item.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-sand/70 sm:text-[0.95rem]">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
