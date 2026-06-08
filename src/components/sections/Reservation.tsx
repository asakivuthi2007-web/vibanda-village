"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronDown } from "lucide-react";
import { reservationContent, site } from "@/lib/data";
import { cinematic, scaleReveal, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success";

const fieldClasses =
  "w-full rounded-[2px] border border-ivory/15 bg-ivory/[0.03] px-4 py-3.5 text-sm text-ivory placeholder:text-sand-dim/60 outline-none transition-colors duration-300 focus:border-gold/60 focus:bg-ivory/[0.05] [color-scheme:dark]";

const labelClasses = "mb-2 block text-[0.65rem] uppercase tracking-[0.25em] text-sand-dim";

export function Reservation() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status !== "idle") return;
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1100);
  };

  return (
    <section id="reservation" className="section-pad relative overflow-hidden bg-noir">
      <div
        className="pointer-events-none absolute -left-48 bottom-0 h-[32rem] w-[32rem] rounded-full bg-gold/[0.05] blur-[180px]"
        aria-hidden
      />

      <div className="container-edit grid items-stretch gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 hidden overflow-hidden rounded-[2px] lg:order-1 lg:block">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={scaleReveal}
            className="relative h-full min-h-[36rem] w-full overflow-hidden rounded-[2px]"
          >
            <Image
              src={reservationContent.image.src}
              alt={reservationContent.image.alt}
              fill
              sizes="(min-width: 1024px) 44vw, 90vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir via-noir/10 to-transparent" />
          </motion.div>

          <div className="pointer-events-none absolute inset-x-10 bottom-10">
            <Reveal delay={0.2}>
              <p className="max-w-xs font-display text-2xl italic leading-snug text-ivory sm:text-3xl">
                &ldquo;Good food, cold drinks, great company — that&rsquo;s a night at Vibanda.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow={reservationContent.eyebrow}
            title={reservationContent.title}
            description={reservationContent.description}
          />

          <div className="relative mt-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: cinematic }}
                  className="flex flex-col items-start gap-5 rounded-[2px] border border-gold/20 bg-ivory/[0.02] p-8 sm:p-10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Check className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-ivory">Request received</h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-sand">
                      Thank you — our team will confirm your table by email within one business day. We look
                      forward to hosting you at Vibanda Village.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="link-underline cursor-pointer text-xs uppercase tracking-[0.25em] text-gold-bright"
                  >
                    Make another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: cinematic }}
                  onSubmit={handleSubmit}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <div className="sm:col-span-2">
                    <label htmlFor="res-name" className={labelClasses}>
                      Full name
                    </label>
                    <input id="res-name" name="name" type="text" required placeholder="Jane Doe" className={fieldClasses} />
                  </div>

                  <div>
                    <label htmlFor="res-email" className={labelClasses}>
                      Email
                    </label>
                    <input id="res-email" name="email" type="email" required placeholder="jane@email.com" className={fieldClasses} />
                  </div>

                  <div>
                    <label htmlFor="res-phone" className={labelClasses}>
                      Phone
                    </label>
                    <input id="res-phone" name="phone" type="tel" required placeholder="0714 826537" className={fieldClasses} />
                  </div>

                  <div>
                    <label htmlFor="res-date" className={labelClasses}>
                      Date
                    </label>
                    <input id="res-date" name="date" type="date" required className={fieldClasses} />
                  </div>

                  <div>
                    <label htmlFor="res-time" className={labelClasses}>
                      Time
                    </label>
                    <div className="relative">
                      <select id="res-time" name="time" required defaultValue="" className={cn(fieldClasses, "appearance-none pr-10")}>
                        <option value="" disabled>
                          Select a time
                        </option>
                        {reservationContent.times.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-sand-dim"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="res-party" className={labelClasses}>
                      Party size
                    </label>
                    <div className="relative">
                      <select id="res-party" name="party" required defaultValue="" className={cn(fieldClasses, "appearance-none pr-10")}>
                        <option value="" disabled>
                          Select party size
                        </option>
                        {reservationContent.partySizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-sand-dim"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <div className="mt-2 sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-gold-fill w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {status === "submitting" ? "Sending request…" : "Request a Table"}
                    </button>
                    <p className="mt-4 text-xs leading-relaxed text-sand-dim">
                      Parties of seven or more, please call{" "}
                      <a href={site.phoneHref} className="text-gold-bright transition-colors duration-300 hover:text-gold">
                        {site.phone}
                      </a>
                      .
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
