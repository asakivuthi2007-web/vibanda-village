"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/data";
import { scaleReveal } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Gallery() {
  return (
    <section id="gallery" className="section-pad relative bg-noir">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the village"
          description="A glimpse of the plates, the pours, and the nights that keep our regulars coming back."
        />

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:mt-20 lg:columns-3 lg:gap-6">
          {galleryImages.map((image, i) => (
            <Reveal
              key={image.src}
              variants={scaleReveal}
              delay={(i % 3) * 0.1}
              className={cn(
                "group relative mb-5 block overflow-hidden rounded-[2px] break-inside-avoid lg:mb-6",
                image.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
              )}
            >
              <div className="absolute inset-0 scale-[1.02] transition-transform duration-[1500ms] ease-[var(--ease-cinematic)] group-hover:scale-[1.1]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-noir/0 transition-colors duration-700 ease-[var(--ease-cinematic)] group-hover:bg-noir/15" />
              <span
                className="pointer-events-none absolute inset-3 rounded-[2px] border border-gold/0 transition-colors duration-700 group-hover:border-gold/25"
                aria-hidden
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
