# The Lawrence Methods — Portfolio Site

A React + Vite + Tailwind CSS v4 portfolio site for Favour Lawrence ("The
Lawrence Methods"), Business Development Manager and Growth Strategist.

## Stack

- React 18 + Vite 6
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion for scroll-triggered and entrance animation
- React Icons for social/contact icons

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/   one component per section (Navbar, Hero, Story, ...)
  data/         content arrays: services.js, experience.js, caseStudies.js
  App.jsx       assembles the page and lifts "selected service" state
                so the Final CTA choices can pre-fill the contact form
  index.css     Tailwind import + design tokens (@theme block)
```


## Design tokens

Defined in `src/index.css` under the `@theme` block:

- `--color-paper` #F8F7F3 — background
- `--color-surface` #FFFFFF — card/section backgrounds
- `--color-ink` #111111 — primary text
- `--color-slate` #5F5F5F — secondary text
- `--color-line` #E5E3DD — borders/dividers
- `--color-rust` #A8572C — accent (used sparingly)
- Display type: Fraunces (serif) · Body/UI type: Work Sans

## Notes

- Respects `prefers-reduced-motion`.
- Visible focus states throughout for keyboard navigation.
- Fully responsive: hamburger nav, stacked cards, and a single-column
  timeline below the `md` breakpoint.
