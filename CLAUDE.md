# PROINN® — fresh build brief

A new website for Proinn Consultancy® (PROINN®), built from the copy up, with no obligation to the old site's structure or look. The previous Astro replica lives at `~/Documents/Proinn Website` (GitHub: anoopkurup/proinn-website). Use it only as a source of verbatim copy and images, never as a layout reference.

## What the business is

A founder-led school that turns engineers into inventors. Tito Kishan Vemuri teaches TRIZ (structured inventive problem solving) and DFP® (Design for Patentability) to professionals at Indian OEMs and MNCs, certified by MATRIZ and DFP-Institute. One product, three levels: PROINN® Beginner, Advanced, Expert. Side offers: corporate workshops, mentoring (The-AIP™), consultancy.

The promise is a career outcome: grow as an Innovation / IP leader. Lead with that.

The proof is unusually strong and specific. Use it, don't decorate it:
- 850+ US patents filed by GE Energy India engineering under his IP leadership
- 100+ MATRIZ certification workshops since 2015, 1000+ inventors groomed
- Letters from TVS, Rolls-Royce, Mahindra; logos from Tata, GE, Siemens, Shell, SKF, Saint-Gobain and more
- MATRIZ board member, TRIZ Champion 2022, India's first TRIZ Level 4
- Testimonials naming patent counts and promotions

Audience: engineers, scientists, IP professionals and R&D leaders in India with 5–20 years of experience, deciding whether to invest their own money and time in a certification.

## Stack

Astro (static, no framework integrations), plain CSS, no Tailwind, no component library. `npm create astro@latest -- . --template minimal`. Astro 6 if Node is below 22.23.4.

## Site map (five pages, not eleven)

- `/` Home
- `/programs` The three levels as sections on one page, plus a short "what is TRIZ" block and the FAQ
- `/about` Company and founder on one page
- `/testimonials` Corporate letters, individual quotes, LinkedIn recommendations
- `/contact` One form, phone, email, address

No separate TRIZ page, no separate founder page, no "individual workshops" page. Open workshop dates go on Programs.

## Home page, in order

1. **Hero.** The career claim in plain words, one sentence of support, one button to Programs. Beside it, one real artefact: a cropped corporate testimonial letter (Mahindra or Rolls-Royce) with a one-line caption. No stock imagery, no brain illustration.
2. **The path.** Beginner → Advanced → Expert as a numbered progression. Per level: what you learn, hours, certifying body, what you can do afterwards. A reader should be able to choose a level in ten seconds.
3. **The founder.** Photo, three facts, link to About. The business is bought on trust in one person.
4. **Client logos.** One row, real logos, no grayscale filter.
5. **One testimonial.** The strongest individual quote, with name, role, company and patent count.
6. **Contact strip.** Phone, email, one button.

Nothing else on the home page.

## Visual identity

Subject is engineering invention, so borrow from patent documents: fine line drawings, figure captions, numbered sheets, off-white paper.

- **Type.** One technical sans family for everything (IBM Plex Sans), with Plex Sans Condensed for large numbers and figure labels. No display serif. Max heading size 64px.
- **Colour.** Paper `#f6f5f0`, ink `#01012c`, saffron `#f2a900` as the single accent, steel `#5b6472` for secondary text, rule `#d9d6cc`. Saffron reads Indian without being a flag. Use it for one thing per screen.
- **Signature element.** A TRIZ contradiction-matrix grid, drawn in CSS, on the hero only. Faint grid, a few lit saffron cells aligned to it.
- **Imagery.** Real only: certificates, testimonial letters, workshop rooms, the founder, patent drawings. No lightbulbs, no hands on laptops, no gradients.
- **Structure.** Numbering only where content is a sequence (the three levels). No uppercase eyebrow labels, no card drop-shadows, no identical rounded cards. Hairline rules and figure captions carry hierarchy.
- **Motion.** None on load. Only on user action (open FAQ, open menu).

## Copy rules

Rewrite, keep the facts. Source text is in `~/Documents/Proinn Website/src/pages/*.astro` and `src/data/site.ts`.

- Keep every number, name, credential and client. Keep the founder's voice.
- Cut length by half. Short sentences. Sentence case everywhere, including headings and nav.
- ® and ™ once per page on first use, then plain text.
- Fix spelling (Manufactuing, Pharamaceuticals, Acccelerating, entraprenuer, UNCOMFORABLE and others).
- Buttons say what happens: "See the programs", "Register for Beginner", "Send message".
- Pricing: either show prices or replace Bronze/Silver/Gold with one comparison table and a single "Ask for a quote" action. Do not ship three tiers with no numbers.

## Assets

Copy from `~/Documents/Proinn Website/public/images/`. Useful ones:
- `logo.png` (header), `logo-footer.png`
- `founder.jpg`
- `testi-tvs.jpg`, `testi-rr.jpg`, `testi-mahindra.png` (corporate letters)
- `matriz-1.png`, `matriz-2.jpg`, `matriz-3.jpg` (MATRIZ recognitions)
- `step-1.jpg`, `step-2.jpg`, `certificate-3.jpg` (sample certificates)
- `client-*.png` (16 client logos), alt text in old `site.ts`
- `t-*.jpg` and the numeric `.png` files (testimonial headshots)
- `cii-mumbai.jpg` (workshop room)
Skip: `hero.jpg`, `about-*.jpg`, `invest-*.png`, `prog-*.png` badges, all `icon-*` clip art.

## Quality floor

Responsive to 360px, visible keyboard focus, reduced motion respected, contrast AA, no horizontal scroll, every image with alt text, forms with labels. Take screenshots at 1440 and 390 before calling anything done.

## Rules for working here

- Commit after every design pass so rollbacks are one command. `git init` on day one.
- Plain CSS, no new dependencies without asking.
- Contact form has no backend yet; wire Formspree or Netlify Forms before launch and say so in the README.
