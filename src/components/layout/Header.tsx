"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { cn } from "@/lib/utils";
import { cinematic } from "@/lib/motion";
import { Wordmark } from "@/components/ui/Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-ivory/10 bg-noir/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-edit flex h-20 items-center justify-between lg:h-[5.5rem]">
        <Link
          href="#top"
          className="transition-colors hover:text-gold"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} — home`}
        >
          <Wordmark className="text-xl tracking-[0.04em] text-ivory sm:text-2xl" />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline font-sans text-[0.8rem] uppercase tracking-[0.2em] text-ivory/75 transition-colors hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={site.phoneHref} className="font-display text-sm italic tracking-wide text-ivory/70 hover:text-gold transition-colors">
            {site.phone}
          </a>
          <Link href="#reservation" className="btn-gold-fill">
            Reserve
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 text-ivory transition-colors hover:border-gold hover:text-gold lg:hidden cursor-pointer"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: cinematic }}
            className="overflow-hidden border-t border-ivory/10 bg-noir/97 backdrop-blur-md lg:hidden"
          >
            <nav className="container-edit flex flex-col gap-1 py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: cinematic, delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ivory/[0.06] py-4 font-display text-2xl text-ivory transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: cinematic, delay: 0.05 * navLinks.length }}
                className="mt-6 flex items-center justify-between"
              >
                <a href={site.phoneHref} className="font-display italic text-ivory/70">
                  {site.phone}
                </a>
                <Link href="#reservation" onClick={() => setOpen(false)} className="btn-gold-fill">
                  Reserve
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
