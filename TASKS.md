# X BEEF Website — Review & Improvement Backlog

Site reviewed: `index.html` (single-page static site, GitHub Pages).
Official menu flipbook: https://heyzine.com/flip-book/7badf703f1.html
Brand direction: **modern, clean, mid-high, trendy, for family & friends.**

Overall: the design system is solid (warm editorial palette, serif display type,
dark mode, responsive layout). The biggest problems are (1) internal design-brief
text leaking into customer-facing copy, (2) placeholder/fake content, (3) the real
menu flipbook not being connected, and (4) images hotlinked from the old WordPress
site. Tasks below are grouped and prioritized.

---

## P0 — Critical (fix before anything else)

### 1. Copywriting: remove design-brief language from customer copy
Several texts talk *about the website* instead of *to the guest*. These read as
internal notes accidentally shipped:
- `storyCopy`: "The website should make X BEEF feel like…"
- `menuIntro`: "The menu should feel easy to understand…"
- `menuNoteFooter`: "Keep prices out of the premium landing page, but connect the full menu through PDF, delivery, LINE, or a booking platform."
- `experienceCopy`: "X BEEF should feel welcoming first…"
- `visitCopy`: "Designed for lunch, dinner, family meals… On mobile, booking, map, call, and LINE should be one tap away."

Rewrite all of these in guest-facing voice. Example: storyCopy → "X BEEF is a
neighbourhood steakhouse in Ayutthaya — stylish enough for a special night,
relaxed enough for an everyday family dinner."

### 2. Connect the real menu (heyzine flipbook)
The menu section currently shows hardcoded sample items with a `*` placeholder
where prices would be. Tasks:
- Add a prominent "View full menu" button linking to the flipbook
  (`https://heyzine.com/flip-book/7badf703f1.html`, `target="_blank"`).
- Reconcile the on-page category tabs/items with the actual flipbook menu
  (categories, signature dishes, naming). Verify dish names against the real menu.
- Replace the `*` price column: either show real prices, "from ฿xxx" anchors on
  signature dishes (mid-high positioning benefits from price anchoring), or drop
  the column entirely.
- Optionally embed the flipbook in a lightbox/iframe so guests don't leave the page.

### 3. Replace fake social proof
- Testimonials ("M. K. - Thailand", etc.) and "4.8 / 200 ratings" appear invented.
  Replace with real Google review quotes and the actual rating/count, and link the
  rating card to the Google Maps listing. Fake aggregate ratings also risk a rich-
  results penalty (see SEO #12).
- "4.8 guest signal" is meaningless phrasing — change to "4.8 Google rating".

### 4. Self-host images
All three photos hotlink low-res Elementor *thumbnails* from `xbeefth.com`. If
that WordPress site changes or dies, the new site loses every image.
- Copy originals into `assets/img/`, export as WebP/AVIF in 2 sizes (`srcset`),
  add explicit `width`/`height` (prevents CLS), `fetchpriority="high"` on the hero.
- Three photos is too few for a restaurant. Add a gallery: garden seating,
  interior, dry-aged cabinet, signature steaks, dessert/coffee, family table.

---

## P1 — High value

### 5. Reservation & contact flow (UX)
- "Reserve" buttons only scroll to #visit — there is no actual action there beyond
  "Call now". Add direct LINE deep link (`https://line.me/R/ti/p/@xbeefth`) and
  make footer "LINE @xbeefth" a real link.
- Add a sticky mobile bottom bar: Call · LINE · Map · Menu (one tap each).
- Embed a Google Map (or static map image linking out) in the Visit section.

### 6. Thai language support
Target audience is local families + tourists, but the site is English-only.
The `data-i18n` scaffolding already exists — add a TH content object and an
EN/TH toggle in the header. Thai should arguably be the default.

### 7. Replace text-glyph icons with real icons (UI polish)
- Hamburger is the literal character `=`, close is `x`, theme toggle shows the
  words "moon"/"sun", menu tab arrows are `>`. Swap all for inline SVG icons.
- Add a favicon + apple-touch-icon (currently none — browser tab shows default).

### 8. Typography
- `font-family: Inter…` is declared but Inter is never loaded, so everything
  falls back to system fonts. Either load Inter (self-hosted, `font-display: swap`)
  or drop it. For the serif headlines, consider loading a real display serif
  (e.g. Fraunces / Playfair) instead of `ui-serif` for a more consistent
  trendy/editorial look across devices. Subset for Thai if #6 is done.

### 9. SEO — metadata
- Add Open Graph + Twitter card tags (title, description, image) — currently
  sharing the site on LINE/Facebook shows nothing.
- Add `<link rel="canonical">`, `robots.txt`, `sitemap.xml`, and a proper
  `lang` strategy (currently `lang="en"` even if Thai content is added).
- Title/description: include searchable terms guests actually use:
  "steakhouse Ayutthaya", "ร้านสเต็ก อยุธยา", "dry-aged beef".

### 10. SEO — structured data fixes
- `priceRange: "THB THB"` is invalid — use `"฿฿-฿฿฿"` or `"$$"`.
- Add `hasMenu` pointing at the flipbook URL, `geo` coordinates,
  `acceptsReservations`, and `menu`/`telephone` consistency.
- Remove or correct `aggregateRating` unless backed by real, on-page reviews
  (Google penalizes self-serving unverifiable ratings).
- Schema `image` URLs should point at self-hosted images after #4.

---

## P2 — Quality & performance

### 11. Performance
- Render is JS-dependent: all section content (values, menu, experience,
  testimonials, visit info) is injected by inline JS — no-JS users and some
  crawlers see empty sections. Pre-render this content as static HTML and keep
  JS only for interactivity (tabs, theme, mobile panel). This also helps SEO.
- Theme flash: theme is applied after parse; move a tiny theme-bootstrap script
  into `<head>` to avoid light-flash for dark-mode users.
- `backdrop-filter: blur(18px)` on fixed header + several cards is expensive on
  low-end Android — test, and reduce blur radius or add `@supports` fallback.
- Add `loading="lazy"` + `decoding="async"` everywhere below the fold (partially
  done), and preconnect to any font/CDN origins.

### 12. Accessibility
- Menu tabs use `role="tab"`/`aria-selected` but no `tablist` keyboard behavior
  (arrow keys) and no `aria-controls`/`tabpanel` pairing — either implement it or
  simplify to buttons without tab roles.
- Mobile panel: no focus trap, focus isn't moved on open/close.
- Star ratings `★★★★★` need `aria-label="5 out of 5 stars"`.
- Check contrast of `--gold` on dark backgrounds at small uppercase sizes.
- Add `prefers-reduced-motion` guard for smooth-scroll and hover transforms.

### 13. Concept & content depth (mid-high, trendy, family & friends)
- The dry-aged story is the differentiator — give it a dedicated block: aging
  days, cabinet photo, where the beef comes from. Mid-high diners buy the story.
- Add a "Signature dishes" strip with photos + short tasting notes (3–5 dishes
  from the real flipbook menu) instead of plain text lists.
- Family angle is claimed but not shown: kids-friendly note, group/sharing sets,
  garden photo corner — show, don't tell.
- Add practical info guests look for: parking, English menu available,
  delivery platforms (Grab/LINE MAN) if applicable, live-music nights schedule.
- Footer: add full address + phone (NAP consistency for local SEO) and an
  Instagram feed strip if feasible.

### 14. Style/code housekeeping
- Extract CSS/JS from the 980-line single file into `styles.css` / `main.js`
  once the site grows (gallery, i18n) — keeps GitHub Pages simple but editable.
- `menu-note` styling exists for the now-removed internal note — reuse it for a
  real note (e.g. "Prices subject to service charge" or "Full menu →").
- Consistent dash usage in copy (currently mixes `-` as separator: "Steak -
  Thai-Western comfort - Ayutthaya" → use "·").

---

## Suggested order of work
1. P0 #1–#3 (copy + real menu link + honest social proof) — one small PR.
2. P0 #4 + P1 #7–#8 (images, icons, fonts, favicon) — visual polish PR.
3. P1 #5–#6 (reservation flow + Thai) — conversion PR.
4. P1 #9–#10 (SEO) — metadata PR.
5. P2 items as ongoing improvements.
