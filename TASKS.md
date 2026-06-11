# X BEEF Website — Review & Improvement Backlog

Site: `index.html` + `styles.css` + `main.js` (static site, GitHub Pages).
Official menu flipbook: https://heyzine.com/flip-book/7badf703f1.html
Brand direction: **modern, clean, mid-high, trendy, for family & friends.**

## Status

P0–P2 from the original review have been implemented, except for items that
need the owner or a local environment (listed under "Remaining" below).

### Done — P0
- [x] Rewrote all design-brief language into guest-facing copy (story, menu,
      experience, visit sections).
- [x] Connected the real menu: "View full menu & prices" buttons in the hero,
      signature section, menu card, visit info, footer, and the mobile action
      bar all link to the heyzine flipbook; `hasMenu` added to structured data.
- [x] Removed the `*` placeholder price column from menu lists.
- [x] Removed fabricated testimonials and the unverifiable `aggregateRating`
      from JSON-LD; replaced with a "Read reviews on Google" CTA linking to the
      Google Maps listing.
- [x] "4.8 guest signal" → "4.8 on Google".

### Done — P1
- [x] Reservation/contact flow: LINE deep links (`line.me/R/ti/p/@xbeefth`)
      everywhere, sticky mobile bottom bar (Call · LINE · Map · Menu),
      embedded Google Map in the Visit section, footer NAP (address + phone +
      LINE as real links).
- [x] Thai language support: full TH translation, header EN/ไทย toggle,
      auto-detect from browser language, persisted in localStorage,
      `<html lang>` switches, Thai-specific typography rules.
- [x] Replaced text-glyph icons (`=`, `x`, "moon"/"sun", `>`) with inline SVG
      icons; added an SVG favicon.
- [x] Fonts: removed the never-loaded Inter reference; tuned system font
      stacks (sans + serif) with Thai fallbacks (`Noto Sans Thai`,
      `Leelawadee UI`) — zero font network requests.
- [x] SEO metadata: Open Graph + Twitter cards, canonical URL, bilingual
      title/description, `robots.txt`, `sitemap.xml`.
- [x] Structured data: `priceRange` fixed to `฿฿-฿฿฿`, added
      `acceptsReservations` and `hasMenu`, removed invalid rating.

### Done — P2
- [x] Pre-rendered all section content as static HTML (values, signatures,
      menu tabs + default category, experience list, visit list) — the page is
      complete without JavaScript; JS only powers tabs, theme, language, and
      the mobile panel.
- [x] Theme bootstrap script in `<head>` (no dark-mode flash); image error
      fallback defined before images parse.
- [x] Accessibility: simplified menu tabs to `aria-pressed` buttons, focus
      management + focus trap in the mobile panel, `:focus-visible` styles,
      star rating `aria-label`, `prefers-reduced-motion` support.
- [x] Concept depth: new "Signatures" section with a dry-aged story block and
      four signature dishes with tasting notes.
- [x] Extracted CSS/JS into `styles.css` / `main.js` for caching and editing.
- [x] Performance details: `fetchpriority="high"` on the hero image,
      `decoding="async"` + `loading="lazy"` below the fold, lazy map iframe,
      reduced backdrop-filter usage.

## Remaining — needs the owner or a local environment

1. **Self-host images.** This remote environment's network policy blocks
   downloading from xbeefth.com. Locally: download the originals (not the
   Elementor thumbnails), export WebP at 2 sizes into `assets/img/`, switch
   `<img>`/OG/schema URLs, add `width`/`height` + `srcset`. Also add more
   photos: garden seating, interior, dry-aged cabinet, signature dishes,
   family table.
2. **Verify menu content against the flipbook.** The on-page categories and
   dish names should be checked against the real heyzine menu (also blocked
   from this environment). Update names/categories in `main.js` (`menus`,
   `signatures`) in both EN and TH if they differ.
3. **Confirm real Google rating/review count** and the exact Google Maps place
   link; replace the generic maps search URL with the place URL.
4. **Owner facts to confirm:** exact geo coordinates (then add `geo` to
   JSON-LD), parking, kids/high-chair availability, delivery platforms
   (Grab/LINE MAN), live-music schedule — add a practical-info row for each
   confirmed item.
5. **Canonical domain.** Metadata assumes the site will live at
   `https://xbeefth.com/`. If it stays on GitHub Pages, update canonical,
   OG URLs, robots.txt, and sitemap.xml.
6. Optional polish: embed the flipbook in a lightbox, real display webfont
   (e.g. Fraunces + Noto Sans Thai) if a richer brand voice is wanted,
   Instagram feed strip.
