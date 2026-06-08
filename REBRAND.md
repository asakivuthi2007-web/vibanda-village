# Reskinning this template for a new client

This site is built as a **reusable restaurant template**. The layout, sections, and
animations stay the same for every client — you only change content, colours, and media.
A typical rebrand takes ~30 minutes.

## 1. Brand identity & all copy — `src/lib/data.ts`

This single file is the source of truth for everything written on the site.

- **`site`** — name, `accentWord` (the word highlighted in the accent colour in the logo),
  `legalName`, `tagline`, `url`, `locale`, `description` + `keywords` (SEO), `ogImage`,
  phone, email, address, opening `hours`, and `social` links.
  → The header/footer wordmark and all page metadata are generated from this. No brand
  name is hardcoded anywhere else.
- **`heroContent`** — eyebrow, subtitle, CTA labels. (The big animated headline lives in
  `src/components/sections/Hero.tsx`, `headline` array.)
- **`aboutContent`, `offerings`, `signatureDishes`, `experienceFeatures`,
  `menuCategories`, `galleryImages`, `testimonials`, `reservationContent`,
  `footerContent`** — the content of each section. Add/remove array items freely.

> **Prices:** the menu intentionally ships with **no prices**. To add them later, add a
> `price` field to `menuCategories`/`signatureDishes` items and render it in
> `FeaturedMenu.tsx` / `SignatureDishes.tsx`.

## 2. Colours — `src/app/globals.css`

Edit the **BRAND PALETTE** block at the top (10 values). Roles are documented inline:
backgrounds (`noir`/`noir-deep`/`charcoal`), text (`ivory`/`sand`/`sand-dim`), and the
accent (`gold`/`gold-bright`/`gold-deep`). Keep the light↔dark relationships and the whole
site re-tones automatically.

Fonts: swap `Playfair_Display` / `Inter` in `src/app/layout.tsx`.

## 3. Media — `public/images/` and `public/videos/`

Replace files **keeping the same names** so no code changes are needed:

- `videos/hero.mp4` — hero background loop (+ `images/hero-poster.jpg` poster / reduced-motion still)
- `images/about.webp`, `signature-1..4.webp`, `experience-1..3.webp`,
  `gallery-1..6.webp`, `reservation.webp`
- Update the matching `alt` text in `data.ts`.

Helper scripts in `scripts/` (`produce_images.py`, `encode_hero_loop.py`) use the bundled
`imageio-ffmpeg` to crop/optimise images and encode a seamless hero loop.

## What you should NOT need to touch

`src/components/**` (layout & sections), `src/lib/motion.ts` (animation tokens), and the
page structure in `src/app/page.tsx`. These are the reusable engine.
