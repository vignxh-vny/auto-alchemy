# Paramaathma's Auto Alchemy: Concept Website

Concept/pitch demo for a premium car and bike detailing studio in Muddinapalya, Bengaluru. It is **not** an official or approved website. Do not publish it publicly or claim the business endorses it.

Reference file: `auto-alchemy-landing.html` (the approved first landing page design). Match it visually.

---

## 1. Concept

One idea: Auto Alchemy is not just another service centre. Vehicles are **protected, enhanced and preserved** with attention to detail.

- Brand tagline (keep as is): **PROTECT / ENHANCE / PRESERVE**
- Goal of the page: get the visitor to enquire or book on WhatsApp
- Audience: customers arriving from Instagram, mostly on phones
- Feel: neat, clean, premium studio. Not a generic car wash template.

---

## 2. Business facts (use only these)

| Item | Value |
|---|---|
| Name | Paramaathma's Auto Alchemy |
| Category | Auto detailing: Detailing, PPF, Coating, Accessories, Pre-owned bikes/cars |
| Established | 2026 (shown on their logo) |
| Phone / WhatsApp | +91 9180186139, `https://wa.me/919180186139` |
| Address | 1272, Muddinapalya Main Road, Sir M. Vishweshwaraiah Layout, 5th Block, 8th Block, Byregowda Layout, Annapurneshwari Nagar, Bengaluru, Karnataka 560091 |
| Instagram | https://www.instagram.com/paramaathmas_auto_alchemy/ |

### Advertised prices

| Service | Price |
|---|---|
| Interior & Exterior Detailing | ₹3,999 |
| Ceramic Coating | ₹12,999 |
| Graphene Coating | ₹16,999 |
| Paint Protection Film (PPF) | From ₹49,999 |
| Bike Accessories (crash guards, bash plates, fitting) | Quote on enquiry |

Label prices as "advertised by the studio, final quote confirmed on enquiry".

### Do not invent

Reviews or ratings, opening hours, warranties, coating or PPF brands, certifications, years of experience, vehicle inventory, or customer photos. Do not present AI-generated or stock images as the studio's real work (the Toyota promo graphic on Instagram is labelled AI content). Do not recreate or redesign the logo; use the real logo file when available.

---

## 3. Design system

### Direction
Black and gold. Flat, solid, quiet. **No glassmorphism** (no blur, frosted cards or glow effects). Minimal text: one short heading per section and at most one line under it.

### Colours

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#08090B` | Page background |
| `--panel` | `#111316` | Cards, alternate sections |
| `--line` | `#23262B` | 1px borders and dividers |
| `--gold` | `#D6AE48` | Prices, main button, hover borders |
| `--gold-soft` | `#E5C879` | Button hover |
| `--red` | `#C8372D` | Only the small "Concept demo" tag (replace with a sample from the real logo) |
| `--text` | `#F5F3ED` | Primary text |
| `--muted` | `#A5A5A5` | Secondary text |

Gold stays limited to prices, the primary button and thin accents.

### Typography
- Headings: **Barlow Condensed** 600/700, uppercase, tight line height. Hero h1 up to about 132px on desktop.
- Body: **DM Sans** 400/500, 17px, line height 1.6.
- Prices: heading font, about 46px, gold.
- Tagline: small, wide letter-spacing, gold.
- No caps eyebrow labels above headings, no decorative numbering.

### Shape and motion
- Corners: 2px radius. 1px borders. No shadows except the WhatsApp button.
- Wide spacing: sections have about 112px vertical padding on desktop, about 80px on mobile.
- Motion: one hero entrance (fade and rise) and the before/after slider. No scroll animations on every section. Respect `prefers-reduced-motion`.

---

## 4. Page structure (Landing page only)

1. **Sticky nav**: wordmark (replace with real logo), Services, Our work, Contact, gold "Book appointment" button, hamburger on mobile, small "Concept demo" tag.
2. **Hero**: "Protect your ride. Perfect every detail." One line of support text, two buttons (Book appointment, View services), tagline PROTECT / ENHANCE / PRESERVE. Faint hexagon line texture in the background (inspired by their ceiling lights).
3. **Services**: 5 solid cards (name, one line, gold price, Enquire button) and one small note about advertised prices.
4. **Our work**: before/after slider with sample visuals, labelled as a sample until real photos arrive.
5. **How it works**: one thin row, four words: Choose, Contact, Schedule, Transform.
6. **Final CTA**: "Your vehicle deserves the Auto Alchemy experience." with Book appointment and Chat on WhatsApp.
7. **Footer**: address, directions link, phone, WhatsApp, Instagram, quick links, "Concept demo" disclaimer.

Floating WhatsApp button on every screen.

Left out on purpose until real data exists: reviews, pre-owned inventory, opening hours.

---

## 5. WhatsApp behaviour

Every Book/Enquire button opens `https://wa.me/919180186139?text=<encoded message>` in a new tab, with a message specific to the service, for example:
`Hi, I'd like to enquire about Ceramic Coating.`

Never say an appointment is confirmed. Only the business can confirm.

---

## 6. Later phases (not in the first build)

- Services page with details, benefits and FAQ
- Booking form (name, phone, car or bike, make and model, service, date) that builds a WhatsApp message
- Pre-owned vehicles page (real inventory only)
- Reviews (real ones only), real before/after photos, SEO and performance work

---

## 7. Prompt for Antigravity

Copy everything in the block below into Antigravity. Put `auto-alchemy-landing.html` and this file in the project folder first.

```
You are building a concept landing page for "Paramaathma's Auto Alchemy", a car and bike detailing studio in Muddinapalya, Bengaluru. This is a pitch demo, not an official site.

Read AUTO_ALCHEMY_CONCEPT.md fully first. It is the source of truth for business facts, prices, colours, typography and rules. The file auto-alchemy-landing.html is the approved visual reference: match its layout, spacing, colours, typography and behaviour exactly.

Task: rebuild the reference page as a production-quality project.
- Stack: Next.js (App Router), TypeScript, Tailwind CSS. Use next/font for Barlow Condensed and DM Sans. Static export, no backend.
- Split into reusable components: Navbar, Hero, Services (ServiceCard), BeforeAfterSlider, Process, FinalCta, Footer, WhatsAppButton.
- Keep service data (name, description, price, WhatsApp message) in one typed data file.
- Put the phone number and WhatsApp builder in one config/helper so it is easy to change.
- Keep the design tokens from the markdown file as Tailwind theme values.

Design rules:
- Black and gold, flat and solid. No glassmorphism, blur, glow, gradients as decoration, or heavy shadows.
- Minimal text. Do not add extra sections, badges, taglines or paragraphs that are not in the reference.
- Only one entrance animation in the hero and the slider interaction. Respect prefers-reduced-motion.

Functional rules:
- Every Book and Enquire button must open wa.me/919180186139 with a prefilled, service-specific message.
- Sticky nav with a working mobile hamburger menu, smooth scrolling, floating WhatsApp button, visible keyboard focus.
- The before/after slider must be keyboard accessible (range input) and touch friendly.
- Fully responsive: desktop, tablet, phones. Mobile first.
- Add <meta name="robots" content="noindex"> and keep the "Concept demo" tag and footer disclaimer.

Content rules:
- Use only the facts and prices in the markdown file. Do not invent reviews, ratings, opening hours, warranties, brands, certifications, years of experience or inventory.
- Do not recreate or redesign the logo. Use a plain text wordmark and leave a clearly named slot (components/Logo.tsx) to drop in the real logo file later.
- Do not use stock or AI-generated images as the studio's real work. The before/after slider stays a labelled sample until real photos are provided.

Output: a clean folder structure, a README with run and deploy steps (Vercel), and no broken links. Run the build and fix any errors before finishing.
```

---

## 8. Still needed from the owner

Real logo (SVG/PNG), workshop and vehicle photos, before/after pairs, opening hours, confirmed prices and package inclusions, coating and PPF brands and warranty, whether the number is on WhatsApp, and pre-owned inventory details.

