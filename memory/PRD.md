# ADA Corrector — Landing Page (by EnhanceGov)

## Original problem statement
Build a marketing landing page for ADA Corrector, a web app that makes any PDF
accessible automatically (scans against WCAG 2.1 AA & Section 508, fixes what it
can, flags what it can't, returns corrected file + report + compliance certificate).
Deep-navy institutional visual direction, award-worthy motion, and strict WCAG
accessibility requirements baked into the design (contrast, 16px+ text, 1.5+ line
height, sans-serif, 200% zoom reflow).

## Architecture
- Frontend only (React 19 + CRA/craco + Tailwind). No backend used.
- Smooth scroll via `lenis`; motion via `framer-motion`.
- Routes: `/` (Home), `/privacy-policy`, `/cookie-policy` (placeholder pages).

## User personas
- Government compliance officers / accessibility directors (get audited)
- University & public-institution IT leads
- Public-sector procurement evaluators

## Core requirements (static)
- Sections in order: Header, Hero, Marquee, Problem, How it works (4 steps),
  Features (9), Why us / honest-reporting, Pricing (2 cards), FAQ, Final CTA, Footer.
- NO testimonials. NO fabricated numbers/logos.
- Copy taken verbatim from the client brief.
- Pricing: Single Scan $19.99 (one doc, no subscription); Monthly $99/mo,
  unlimited scans, 1,000 pages included, add page packs mid-cycle (Most Popular).
- Accessibility hard requirements: white/high-contrast text (no light grey subtext),
  min 16px text, line-height ≥1.5, sans-serif throughout, 200% zoom reflow safe,
  visible high-contrast focus rings, prefers-reduced-motion honored.

## Implemented (2026-06-18)
- Full single-page landing with all 9 sections + sticky header + footer.
- Kinetic hero: masked line-by-line headline reveal, parallax glow, and an honest
  "scan simulator" widget (6 fixed automatically + 1 flagged for review).
- Editorial marquee, framer-motion scroll reveals, animated FAQ accordion.
- Text-based logo (`Logo.jsx`) — client will swap in their uploaded mark.
- Privacy Policy & Cookie Policy placeholder pages (content TBD by client).
- Accessibility base styles enforced globally in `index.css`.

## Verification
- Frontend compiles cleanly; hero verified visually (award-quality).
- Full rendered content verified via crawl: all sections/copy/pricing/FAQ correct.
- NOTE: screenshot tool only returns the top viewport for this SPA (Lenis/tool
  limitation), so lower sections were verified via rendered-content check, not image.

## Backlog / next
- P1: Replace text logo with client's uploaded brand asset.
- P1: Fill Privacy & Cookie policy content.
- P2: Wire "Scan a PDF" CTAs to a real upload/checkout flow when scope expands.
- P2: Add Accessibility Statement page.
