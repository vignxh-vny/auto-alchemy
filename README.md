# Paramaathma’s Auto Alchemy — Concept Website

A concept pitch demo and multi-page website for **Paramaathma’s Auto Alchemy**, an auto detailing studio in Muddinapalya, Bengaluru. Built from the approved design reference (`auto-alchemy-landing.html`) and specifications (`AUTO_ALCHEMY_CONCEPT.md` and `AUTO_ALCHEMY_FULL_SITE.md`) into a production-ready **Next.js (App Router) + TypeScript + Tailwind CSS** project with static export capabilities.

> **Disclaimer**: This is a concept pitch demo, not the official or approved website of Paramaathma’s Auto Alchemy.

---

## Phase 1 & Phase 2 Implementations

### 1. Routes & Pages
- **`/` (Landing Page)**: Matches `auto-alchemy-landing.html` with interactive before/after slider, process steps, final CTA, and ambient detailing bay hero imagery under hex lighting.
- **`/services`**: Detailed Car Care (Detailing, Ceramic Coating, Graphene Coating, PPF, Sun film/tint) and Bike Care (Accessories, crash guards, bash plates) with advertised rates and an interactive FAQ accordion.
- **`/our-work`**: Visual portfolio gallery with interactive Lightbox (keyboard Esc/arrows + touch) and the interactive Before & After transformation slider. Features strictly labelled sample visuals (`isSample: true`).
- **`/about`**: Fact-only studio overview with established date (2026), tagline *PROTECT / ENHANCE / PRESERVE*, location, and a clean slot for official workshop/team photography.
- **`/pre-owned`**: Certified vehicle inventory with Cars/Bikes filter and the designated empty state: *"No vehicles listed right now. Ask us on WhatsApp."*
- **`/book`**: Interactive booking enquiry form with 10-digit Indian phone validation. Submissions format and open directly in WhatsApp with zero data storage on external servers.
- **`/contact`**: Studio location, directions via Google Maps, direct phone calling (`tel:+919180186139`), WhatsApp quick-chat, Instagram link, and a conditional operating hours section (hidden while `hours === null`).
- **`/404` & `not-found`**: Custom styled 404 page with return links to Home and Services.

### 2. Design System & Theme Tokens
- **Aesthetic**: Flat, solid black & gold design without glassmorphism or decorative blur.
- **Color Tokens**:
  - `--bg`: `#08090B` (page background)
  - `--panel`: `#111316` (cards & elevated panels)
  - `--line`: `#23262B` (1px dividers & borders)
  - `--gold`: `#D6AE48` (prices, primary buttons, hover borders)
  - `--gold-soft`: `#E5C879` (button hover)
  - `--red`: `#C8372D` (concept demo badge)
  - `--text`: `#F5F3ED` (primary text)
  - `--muted`: `#A5A5A5` (secondary text)
- **Typography**: Google Fonts loaded via `next/font/google`:
  - `Barlow Condensed` (500, 600, 700) for uppercase tight headings and prices
  - `DM Sans` (400, 500, 600) for body text and form controls
- **Accessibility & Micro-Interactions**:
  - Visible focus outlines (`:focus-visible`)
  - Smooth scrolling (`scroll-behavior: smooth`)
  - `prefers-reduced-motion` safety
  - ARIA attributes on modals, accordions, and comparison sliders

### 3. Data & Utilities Architecture (`src/data/`, `src/lib/`)
- `data/site.ts`: Studio facts, phone, WhatsApp, address, Instagram, maps link, `hours: null`, established (2026).
- `data/services.ts`: Typed data for home cards, car care, and bike care services.
- `data/faq.ts`: Safe general answers for ceramic vs. graphene, PPF, appointment duration, bike detailing, and Royal Enfield accessories.
- `data/work.ts`: Typed gallery data referencing sample visuals in `public/work/`.
- `data/preowned.ts`: Typed inventory schema initialized with an empty array (`[]`) and WhatsApp consultation message.
- `lib/whatsapp.ts`: Centralized URL generator for `https://wa.me/919180186139?text=...`.
- `lib/validation.ts`: Form and 10-digit Indian phone validation regex (`/^(?:\+91|0)?[6-9]\d{9}$/`).

---

## Project Structure

```
src/
  app/
    about/page.tsx       # About the studio & photo slot
    book/page.tsx        # Booking appointment enquiry form
    contact/page.tsx     # Studio address, map directions, and phone/chat
    our-work/page.tsx    # Work gallery, lightbox, and before/after slider
    pre-owned/page.tsx   # Verified pre-owned vehicles & empty state
    services/page.tsx    # Categorized car care, bike care & FAQ
    404/page.tsx         # Direct /404 route
    not-found.tsx        # Custom App Router 404 page
    globals.css          # Design tokens, CSS variables, buttons, and animations
    layout.tsx           # next/font definitions, viewport, and noindex metadata
    page.tsx             # Home landing page (matching auto-alchemy-landing.html)
  components/
    BeforeAfterSlider.tsx# Accessible interactive comparison slider
    BookingForm.tsx      # Type-safe client form with phone validation & WhatsApp builder
    Faq.tsx              # Keyboard-accessible accordion with ARIA attributes
    FinalCta.tsx         # Conversion section with primary Book & Chat CTAs
    Footer.tsx           # Studio address, directions, and explore links across all pages
    Hero.tsx             # Hero section with integrated studio detailing visual
    Lightbox.tsx         # Accessible image modal (Esc, left/right arrows, touch)
    Logo.tsx             # Modular wordmark slot for official logo asset
    Navbar.tsx           # Sticky nav with mobile drawer and active route highlights
    Process.tsx          # 4-stage workflow (Choose, Contact, Schedule, Transform)
    ServiceCard.tsx      # Individual service card for home grid
    ServiceRow.tsx       # Horizontal service row for /services
    Services.tsx         # Landing page services wrapper
    WhatsAppButton.tsx   # Fixed floating WhatsApp button
  data/
    faq.ts               # General FAQ items with owner confirmation flags
    preowned.ts          # Pre-owned vehicle listings schema and empty state
    services.ts          # Typed service catalog with advertised prices and messages
    site.ts              # Studio info, address, phone, maps, and hours
    work.ts              # Sample work gallery items
  lib/
    validation.ts        # Validation helpers (phone number, text)
    whatsapp.ts          # Centralized WhatsApp URL builder
public/
  hero-studio.jpg        # Dark studio detailing bay visual under hex lights
  logo/                  # Slot for studio logo SVGs/PNGs
  preowned/              # Slot for vehicle inventory images
  work/                  # Sample work SVGs (sample-1.svg through sample-4.svg)
```

---

## Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Static Export
```bash
npm run build
```
Generates a pre-rendered static site in `out/`.
