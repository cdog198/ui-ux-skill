# CPD Web Design

Marketing site for CPD Web Design (Rome): *your website, built free; you just pay to keep it running.*
Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion. English/Italian.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
npm run lint
```

## Where to edit things

| What | File |
| --- | --- |
| **Plans (€14 One page, €49 Business), what each includes, minimum term, buy-out fee, agency comparison** | `src/config/site.ts` → `pricing.plans` |
| Contact details (email, WhatsApp, phone, VAT no., your name/photo) | `src/config/site.ts` → `site`, `contact` |
| **Example sites / client work section** | `src/config/site.ts` → `portfolio` |
| Contact form endpoint (Formspree) | `src/config/site.ts` → `contactForm` or env `NEXT_PUBLIC_FORM_ENDPOINT` |
| **All page copy, EN + IT** (headlines, FAQ, about text…) | `src/content/translations.ts` |
| Example sites' content (menus, rooms, prices, timetables, images, which plan each is on) | `src/content/examples/*.ts` (restaurant, hotel, salon, yoga, portfolio) |
| Example screenshots used in the hero and Work section | `public/images/work/*.jpg` (retake them after changing a demo) |
| Feature list shown in each demo's overlay and on the home page | `features` in each demo file above |
| Design tokens (colours, fonts) | `src/app/globals.css` (`@theme`) and `src/app/layout.tsx` |

Placeholders to replace before launch are marked `PLACEHOLDER` in the code (prices, phone, VAT number, name, postal code), plus the privacy policy text in `translations.ts → privacyPage`.

**Your photo / screenshots:** put files in `public/images/` and reference them as `/images/me.jpg` (e.g. `site.owner.photo`, `portfolio[].image`).

**Demo images** are Unsplash photos referenced by URL in the demo data files. If any fails to load, a styled placeholder is shown instead. Swap any of them for your own `/images/...` files.

## Contact form

1. Create a form at [formspree.io](https://formspree.io) (free tier is fine).
2. Put its endpoint (`https://formspree.io/f/xxxxxxx`) in `contactForm.endpoint` or the `NEXT_PUBLIC_FORM_ENDPOINT` env var.
3. Until then, the form runs in **demo mode** (shows success, sends nothing, logs a console warning).

The form sends JSON: `name, business, email, message`, with a `_gotcha` honeypot for spam.

## Adding another example site (gym, shop, B&B…)

1. Copy `src/content/examples/salon.ts` → `gym.ts`; edit the content, `gymMeta.features` and `gymMeta.plan`.
2. Copy `src/components/examples/salon/` → `gym/` and adjust the layout/branding.
3. Copy `src/app/examples/salon/page.tsx` → `src/app/examples/gym/page.tsx` (pick new fonts there).
4. Add `gymMeta` to `src/content/examples/index.ts`. It then appears on `/examples` and in the "What each example includes" section.
5. Save a 1440×900 screenshot as `public/images/work/gym.jpg`, and add it to `ORDER` in `src/components/site/Hero.tsx` if it should appear in the hero.

Each demo wraps its page in `<ExampleChrome>` (floating "Example site by CPD" badge + **Features** overlay) and marks sections with `<FeatureZone id="…">` matching the `features` ids.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project**, import the repo. If the repo contains other folders, set **Root Directory** to `cpd-web-design`.
3. Add env vars `NEXT_PUBLIC_SITE_URL` (your domain) and optionally `NEXT_PUBLIC_FORM_ENDPOINT`.
4. Deploy, then add your domain under **Settings → Domains**.

## Notes

- Language: auto-detects Italian browsers; the choice is remembered (localStorage) and shared with the demo sites. Pages render in English first, then switch on load if Italian is selected.
- SEO: metadata, Open Graph image (`src/app/opengraph-image.tsx`), `sitemap.xml`, `robots.txt`, SVG favicon, and `ProfessionalService` JSON-LD in `src/app/layout.tsx`. Demo pages are `noindex` so fictional businesses never show up in Google.
- Google Maps embeds are click-to-load (faster pages, no Google cookies until the visitor opts in).
- Accessibility: semantic landmarks, skip links, keyboard-operable tabs/accordions/lightbox (`<dialog>`), visible focus, AA contrast, and `prefers-reduced-motion` respected.
