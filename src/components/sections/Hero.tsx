"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, UtensilsCrossed } from "lucide-react";
import { heroContent } from "@/lib/data";
import { cinematic, fadeUp } from "@/lib/motion";

const headline = [
  { text: "This is where", accent: false },
  { text: "the village", accent: true },
  { text: "gathers", accent: false },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const overlay = useTransform(scrollYProgress, [0, 1], [0.4, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Keep the muted loop reliably playing: try on mount/canplay, when the tab
  // becomes visible again, and on first user interaction (autoplay fallback).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    tryPlay();
    v.addEventListener("canplay", tryPlay);
    v.addEventListener("loadeddata", tryPlay);
    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);
    const onInteract = () => tryPlay();
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("scroll", onInteract, { once: true, passive: true });
    return () => {
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("scroll", onInteract);
    };
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[40rem] w-full items-end overflow-hidden bg-noir"
    >
      {/* ── Media layer: fade-in, slowly upscaling video loop ── */}
      {reduced ? (
        <Image
          src="/images/hero-poster.jpg"
          alt="A slowly rotating tray of fire-grilled food at Vibanda Village"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      ) : (
        <div className="hero-fade absolute inset-0">
          <div className="hero-zoom absolute inset-0">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/hero-poster.jpg"
              aria-hidden
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {/* darkening + vignette for legibility */}
      <motion.div className="absolute inset-0 bg-noir" style={{ opacity: overlay }} aria-hidden />
      <div className="vignette" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-noir via-noir/55 to-transparent"
        aria-hidden
      />

      {/* ambient warm glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gold/20 blur-[140px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-edit relative z-10 flex w-full flex-col gap-6 pb-20 pt-24 sm:gap-7 sm:pb-24"
      >
        <motion.p initial="hidden" animate="show" variants={fadeUp} className="eyebrow">
          <span className="h-px w-10 bg-gold/70" aria-hidden />
          {heroContent.eyebrow}
        </motion.p>

        <h1 className="max-w-4xl font-display text-[clamp(2.75rem,7.5vw,6rem)] font-medium leading-[1.05] text-ivory">
          {headline.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "112%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, ease: cinematic, delay: 0.15 + i * 0.13 }}
                className={line.accent ? "block italic text-gold" : "block"}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.65, duration: 1.1, ease: cinematic }}
          className="max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
        >
          {heroContent.subtitle}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.8, duration: 1.1, ease: cinematic }}
          className="flex flex-wrap items-center gap-4 sm:gap-5"
        >
          <Link href={heroContent.primaryCta.href} className="btn-gold-fill">
            {heroContent.primaryCta.label}
          </Link>
          <Link href="#menu" className="btn-gold group">
            <UtensilsCrossed size={15} className="text-gold transition-transform duration-500 group-hover:-translate-y-0.5" />
            View Menu
            <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1.5" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 right-6 z-10 hidden flex-col items-center gap-3 sm:right-10 lg:flex"
      >
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-ivory/50 [writing-mode:vertical-rl]">
          Scroll to discover
        </span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-11 w-7 items-start justify-center rounded-full border border-ivory/25 p-1.5"
        >
          <ArrowDown size={14} className="text-gold" />
        </motion.span>
      </motion.div>
    </section>
  );
}
