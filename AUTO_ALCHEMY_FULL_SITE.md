# Auto Alchemy: Full Website Spec and Antigravity Prompts

Extends `AUTO_ALCHEMY_CONCEPT.md`. Read that file first for business facts, prices, colours, typography and the do-not-invent rules. They all still apply. The landing page (`auto-alchemy-landing.html`) is the visual reference for every new page.

---

## 1. Sitemap

| Route | Purpose |
|---|---|
| `/` | Landing page (already designed) |
| `/services` | All services in detail, grouped Car care and Bike care, with FAQ |
| `/services/[slug]` | One page per service (optional, phase 2) |
| `/our-work` | Gallery with lightbox and before/after sliders |
| `/about` | Short studio introduction |
| `/pre-owned` | Pre-owned cars and bikes (real inventory only) |
| `/book` | Booking enquiry form that opens WhatsApp |
| `/contact` | Address, map link, phone, WhatsApp, Instagram |
| `/404` | Simple not-found page with links home |

Nav: Services, Our work, About, Pre-owned, Contact, plus the gold "Book appointment" button (goes to `/book`).

---

## 2. Page details

### Services (`/services`)
- Two groups: **Car care** (Interior & Exterior Detailing, Ceramic Coating, Graphene Coating, Paint Protection Film) and **Bike care** (Accessories, Crash guards, Bash plates, Fitting).
- Each service row: name, one or two short lines, advertised price or "Quote on enquiry", "Works for: cars / bikes", Enquire button (WhatsApp).
- Do not list package inclusions, brands, durations or warranties until the owner confirms them. Use "Details confirmed on enquiry".
- Sun film / tint appears in their reels. List it as "Sun films / tint: ask for a quote", with no price.
- FAQ accordion (keyboard accessible). Keep answers general and safe, for example:
  - Ceramic vs graphene: both are protective coatings applied to paint. Exact differences, brands and results depend on the product the studio uses, so ask the studio.
  - What is PPF: a clear film applied over paint to help protect against everyday wear.
  - How long does an appointment take: depends on the vehicle and service, confirmed when you book.
  - Can I book bike detailing: yes, enquire on WhatsApp.
  - Royal Enfield accessories: the studio has installed crash guards and bash plates on a Royal Enfield Hunter. Ask about your model.
  Mark any answer that needs owner confirmation with a `// CONFIRM WITH OWNER` code comment, not visible text.

### Our work (`/our-work`)
- Grid of photos with a lightbox (keyboard and touch friendly), plus one or more before/after sliders.
- All images come from `/public/work/` and a typed data file. Ship with sample/placeholder items clearly labelled "Sample". Never use stock or AI images as real work.
- If the data file is empty, show a short empty state with a WhatsApp button.

### About (`/about`)
- Keep it short. Facts allowed: studio name, located in Muddinapalya Bengaluru, services offered, est. 2026 (shown on their logo), tagline Protect / Enhance / Preserve.
- No founder story, awards, years of experience or team names unless supplied. Leave a clearly named slot for a team/workshop photo.

### Pre-owned (`/pre-owned`)
- Typed listing data in `data/preowned.ts` (type car/bike, make, model, year, price, condition, photos, WhatsApp message).
- Ship with an **empty list** and an empty state: "No vehicles listed right now. Ask us on WhatsApp." Do not create fake vehicles.
- Filter by Cars / Bikes when there is at least one listing.

### Book (`/book`)
- Fields: name, phone (10-digit India validation), vehicle type (Car/Bike), make and model, service (select from the services data plus "Not sure"), preferred date, message (optional).
- Client-side validation with clear error text. On submit, open `https://wa.me/919180186139?text=...` with all details formatted as readable lines.
- Success text: "Opening WhatsApp. Your request isn't confirmed until the studio replies." Never say booked or confirmed.
- No backend. Do not store the data.

### Contact (`/contact`)
- Address, "Get directions" Google Maps link, Call (tel:), WhatsApp, Instagram. Optional map embed.
- Opening hours: do not show. Add a `hours` field in the config set to `null`, and render the hours block only when it has a value.

### Footer and global
- Same footer as the landing page, with links to all pages. Floating WhatsApp button everywhere. "Concept demo" tag and disclaimer stay.

---

## 3. Data and structure

```
src/
  app/ (routes above)
  components/ (Navbar, Footer, Hero, ServiceCard, ServiceRow, Faq, BeforeAfterSlider, Lightbox, BookingForm, PreownedCard, WhatsAppButton, Logo)
  data/ (site.ts, services.ts, faq.ts, work.ts, preowned.ts)
  lib/ (whatsapp.ts, validation.ts)
public/ (logo, work, preowned)
```

- `site.ts`: name, phone, WhatsApp number, address, Instagram, maps link, hours (null), established (2026).
- `lib/whatsapp.ts`: one function that builds the wa.me link from a message. Everything uses it.
- All content in `data/`, so the owner's real info is replaced in one place.

---

## 4. SEO and performance (phase 3)

- Per-page `title`, description and Open Graph tags. Keep `robots: noindex` while it is a demo, with a single config flag to turn it off after approval.
- `LocalBusiness` JSON-LD using only verified fields (name, address, phone, Instagram). No rating, no hours.
- `next/image`, lazy loading, WebP/AVIF, fonts via `next/font`. Target Lighthouse 90+ on mobile.
- Accessibility: semantic landmarks, alt text, visible focus, labels on inputs, contrast on gold-on-black text, reduced motion.
- `sitemap.xml` and `robots.txt` generated.

---

## 5. Prompts for Antigravity (give them one at a time)

Do the phases in order and check the result in the browser before moving on. One huge prompt tends to drift from the design.

### Phase 1: Foundation and core pages

```
Read AUTO_ALCHEMY_CONCEPT.md, AUTO_ALCHEMY_FULL_SITE.md and auto-alchemy-landing.html in this folder. They are the source of truth.

Build a Next.js (App Router) + TypeScript + Tailwind project. Static export, no backend.

Phase 1 scope:
1. Project setup, Tailwind theme with the design tokens, next/font (Barlow Condensed, DM Sans).
2. data/ and lib/ files exactly as described in section 3 of AUTO_ALCHEMY_FULL_SITE.md.
3. Shared components: Navbar (sticky, mobile menu), Footer, WhatsAppButton, Logo (text wordmark with a slot for the real logo).
4. Pages: / (match auto-alchemy-landing.html exactly), /services, /contact, and a 404 page.

Rules: black and gold, flat and solid, no glassmorphism, minimal text. Do not invent reviews, hours, warranties, brands, certifications, experience or inventory. Prices only from the markdown files. Every button must do something real (wa.me link, tel:, or a route). Responsive and keyboard accessible.

Run the build, fix errors, then stop and summarise what you built and anything you were unsure about.
```

### Phase 2: Business features

```
Continue the same project. Phase 1 is done. Re-read AUTO_ALCHEMY_FULL_SITE.md section 2.

Phase 2 scope:
1. /book with the booking form, validation and WhatsApp message builder.
2. /pre-owned with typed data, an empty state and Cars/Bikes filter (ship with no listings).
3. /our-work with the lightbox and the BeforeAfterSlider component (labelled sample items only).
4. /about, short and fact-only.
5. FAQ accordion on /services.
6. Update the navbar and footer links to all pages.

Same rules as phase 1. No fake data, no extra text, no new visual styles. Reuse existing components and tokens. Run the build and fix errors.
```

### Phase 3: Polish, SEO and performance

```
Continue the same project. Phases 1 and 2 are done.

Phase 3 scope: per-page metadata and Open Graph, LocalBusiness JSON-LD with verified fields only, sitemap and robots, a single noindex flag in site.ts, image optimisation, accessibility pass (labels, alt text, focus, contrast, reduced motion), and a README with run, build and Vercel deploy steps.

Then test every link and every WhatsApp button, check each page at 360px, 768px and 1280px widths, and report any issue you could not fix. Do not change the visual design.
```

---

## 6. What to collect from the owner before the final version

Real logo (SVG/PNG), workshop and vehicle photos, before/after pairs, confirmed prices and package inclusions, coating and PPF brands and warranty, opening hours, whether sun film/tint is offered and its price, pre-owned inventory with photos, and permission to use the Instagram content.

