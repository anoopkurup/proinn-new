# PROINN website

Astro static site, plain CSS, no integrations.

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # dist/

Node 22.12+ (Astro 6).

## Before launch

- **Contact form has no backend.** Create a form at https://formspree.io, then set `formAction` in `src/data/site.ts` to the endpoint it gives you. Nothing is sent until you do.
- **Open workshop dates** are the `events` array in `src/data/site.ts`. It is empty; the page shows an "ask us" line until you add rows.

## Where the copy lives

- Levels, FAQ, clients, testimonials, contact details: `src/data/site.ts`
- Page copy: `src/pages/*.astro`
- All styles: `src/styles/global.css`
