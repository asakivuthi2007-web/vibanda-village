"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { footerContent, navLinks, site } from "@/lib/data";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { Wordmark } from "@/components/ui/Wordmark";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <footer className="relative border-t border-ivory/10 bg-noir-deep">
      <div className="hairline" aria-hidden />
      <div className="container-edit grid gap-16 py-20 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-10 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <Link href="#top" aria-label={`${site.name} — home`}>
            <Wordmark className="text-3xl tracking-[0.04em] text-ivory" />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-sand">{footerContent.blurb}</p>
          <div className="mt-8 flex items-center gap-4">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.06)}
        >
          <motion.p variants={staggerItem} className="eyebrow !text-gold/80">
            Navigate
          </motion.p>
          <ul className="mt-6 space-y-3">
            {[{ label: "Home", href: "#top" }, ...navLinks, { label: "Reservation", href: "#reservation" }].map((link) => (
              <motion.li key={link.href} variants={staggerItem}>
                <Link href={link.href} className="link-underline text-sm text-ivory/75 transition-colors hover:text-ivory">
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.06)}
        >
          <motion.p variants={staggerItem} className="eyebrow !text-gold/80">
            Visit
          </motion.p>
          <motion.address variants={staggerItem} className="mt-6 space-y-1 text-sm not-italic leading-relaxed text-ivory/75">
            {site.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.address>
          <motion.div variants={staggerItem} className="mt-5 space-y-1 text-sm leading-relaxed text-ivory/75">
            <a href={site.phoneHref} className="link-underline block w-fit hover:text-gold">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="link-underline block w-fit hover:text-gold">{site.email}</a>
          </motion.div>
          <motion.div variants={staggerItem} className="mt-6 space-y-1.5 text-sm text-ivory/55">
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-6">
                <span>{h.days}</span>
                <span className="text-ivory/75">{h.time}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
          <p className="eyebrow !text-gold/80">Stay in the Glow</p>
          <p className="mt-6 text-sm leading-relaxed text-sand">{footerContent.newsletterLabel}</p>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex items-center border-b border-ivory/25 pb-3 transition-colors focus-within:border-gold">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                aria-label="Email address"
                className="w-full bg-transparent font-sans text-sm text-ivory placeholder:text-ivory/35 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gold transition-transform hover:translate-x-1 cursor-pointer"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </form>
          <p className="mt-3 min-h-[1.25rem] text-xs tracking-wide text-gold/80">
            {submitted ? "You're on the list — welcome to the village." : ""}
          </p>
        </motion.div>
      </div>

      <div className="border-t border-ivory/[0.06]">
        <div className="container-edit flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>Crafted with care for the love of fire, music, and good company.</p>
        </div>
      </div>
    </footer>
  );
}
