# Sevenhalf Lab: design notes

Written before building. The aim is a site that reads as a film company's catalogue rather than a services brochure.

## What the research turned up

- The site has **9 titles**: 8 production pages under `/film/` plus *I corpi degli altri*, which only exists under `/film-distribuzione/`. The distribution pages for the other five 404.
- Every title has a real poster. Four have real stills (Solo il mare, Lento, Macbeth, I corpi degli altri). Seven have a YouTube trailer, and the site already hosts a poster frame for each, which I use as a fallback still credited "dal trailer".
- **There are no video files on the site.** Every "video" is a YouTube embed. The filmhub-style muted loops are therefore built as a component that takes an `mp4` when one exists. Until the client supplies 6–10 s clips, it shows a real still with a slow drift and the same credit. The fallback is a stand-in for a loop, not fake footage.
- Festival data lives only on the distribution pages: Lento (21 selections, 1 award), Macbeth (16 selections, 5 awards), Solo il mare (4 selections, 1 award).
- Brand assets: the 7½ mark in **#F29100** (sampled from `logo-light.png`) and the wordmark *SEVENHALF LAB*. The name points at Fellini's *8½*, and the old homepage opens with a Fellini quote.
- filmhub.com was reachable only as raw HTML, and shortsfit.com through a page summary. The notes below come from that markup and text, not from a visual inspection.

## Taken from shortsfit.com

| Pattern | How it's used here | Why |
| --- | --- | --- |
| The catalogue is the homepage | Below a short hero, the homepage is the poster wall. Services move to their own pages. | The work is stronger than the copy. The old homepage led with four service blurbs. |
| Uniform 2:3 posters, tight grid, title on hover | 4 columns on desktop, 2 on mobile, 2px gutters. Title, director and year appear on hover or focus, and always on touch screens. | Posters are already designed objects. Uniform size makes the wall read as a collection. |
| Catalogue split by format in the nav | `corti`, `documentari`, `serie`, each a real route (`/film/corti`, …). `lungometraggi` appears only once a feature exists. | Mirrors Sevenhalf's actual split instead of copying shortsfit's five categories. |
| Laurels on or near posters as proof | A small laurel and count on the poster corner ("5 premi"), and the full festival list on the film page. No testimonials section. | Festival selections are the industry's proof. 21 selections for a short says more than any adjective. |
| One short lowercase line | `cinema sostenibile: non inquina, non sfrutta, non esclude.` This is the client's own tagline, lower-cased. | Their tagline is already good. It just needs room. |

Not taken: shortsfit's hero carousel. A carousel hides most of its slides and fights the poster wall for attention.

## Taken from filmhub.com

| Pattern | How it's used here | Why |
| --- | --- | --- |
| Huge type, line breaks placed by hand | The hero sets three lines, `non inquina, / non sfrutta, / non esclude.`, very large. Section statements are broken by hand in the content file (arrays of lines), never left to the browser. | One confident sentence beats a paragraph. Hand breaks keep the rhythm intended. |
| A muted loop per section, credited in the corner | `<Reel>`: full-bleed frame, muted autoplay mp4 when one exists, otherwise a slowly drifting still. A small corner credit shows **title**, *anno*, *regia*. | Every visual points back to a real film, which is filmhub's best idea. |
| Plain section labels | One small sentence-case word per section (`subacquea`, `distribuzione`, `commercial`, `studio`) that links to the section's page. No caps, no numbering, no eyebrow dashes. | These are section names, not decoration. |

Not taken: filmhub's SaaS structure (Producers / Distributors / Buyers columns, "Learn more" buttons).

## Design plan

**Colour.** The posters and frames carry the colour. The chrome is the colour of the water in their underwater footage.

| Token | Hex | Use |
| --- | --- | --- |
| `fondale` | `#0D2230` | Page background. A deep sea blue sampled toward the Solo il mare and subacquea frames, rather than a neutral black. |
| `fondale-2` | `#122C3D` | Raised surfaces: poster placeholders, the trailer frame. |
| `schermo` | `#ECEEE9` | Primary text: the slightly cool white of a projection screen. |
| `nebbia` | `#8FA3AE` | Secondary text and credits. |
| `linea` | `#24404F` | The few hairlines that separate credit rows. |
| `settemezzo` | `#F29100` | The logo's orange. **Reserved for awards and the logo mark**, plus the keyboard focus ring for visibility. |

**Type.** One family, **Archivo** (variable, with weight and **width** axes). The width axis is the expressive device: condensed for display and for the credit block, which quotes a poster's billing block, and normal width for reading text.
- Display: Archivo at wdth 62, weight 300–500, lowercase, tight leading (0.88), sizes up to about 15vw.
- Credit block: Archivo at wdth 75, small, sentence case (`regia`, `fotografia`), with labels in `nebbia` and names in `schermo`.
- Body: Archivo at wdth 100, 17–18px, line-height 1.55, max 68ch.

**Layout.** Left-aligned throughout, on a 12-column grid with generous left margins. Only the poster wall runs edge to edge.

```
home
┌────────────────────────────────────────────────────────────┐
│ 7½ SEVENHALF LAB     corti documentari serie   distribuz… │
│                                                            │
│ cinema sostenibile:                       ░ still: Solo   │
│ non inquina,                              ░ il mare drifts│
│ non sfrutta,                              ░ behind type   │
│ non esclude.                                               │
│ produzione … indipendente, a Napoli.    Solo il mare 2026 │
├────────────────────────────────────────────────────────────┤
│ tutti  corti  documentari  serie                   9 film │
│ ▯▯▯▯  ▯▯▯▯  ▯▯▯▯  ▯▯▯▯   ← 2:3 posters, 2px gaps         │
│ ▯▯▯▯  ▯▯▯▯  ▯▯▯▯  ▯▯▯▯     laurel + count on corner       │
├────────────────────────────────────────────────────────────┤
│ subacquea            [full-bleed frame, drifting]          │
│ l'avventura inizia                                         │
│ sotto la superficie.                   credit bottom-right │
├────────────────────────────────────────────────────────────┤
│ distribuzione  / commercial  / studio: same Reel pattern   │
├────────────────────────────────────────────────────────────┤
│ footer: email, phone, socials, P.IVA                       │
└────────────────────────────────────────────────────────────┘

film page
┌──────────────┬─────────────────────────────────────────────┐
│ poster 2:3   │ corto, 2024                                 │
│ (sticky)     │ LENTO   ← huge condensed title              │
│              │ synopsis (large, 60ch)                      │
│              │ regia ............ Edoardo Sandulli         │
│              │ fotografia ....... Daniel Di Meo   (billing)│
├──────────────┴─────────────────────────────────────────────┤
│ trailer (click to load YouTube, nocookie)                  │
│ stills, full width, each credited                          │
│ premi (orange laurels)  ·  selezioni (plain list by year)  │
│ prev / next title                                          │
└────────────────────────────────────────────────────────────┘
```

**Principles**
1. The films are the interface. The chrome stays quiet so posters and frames carry the page.
2. Every image is attributed: film title, year, director, and "dal trailer" when the frame is a trailer thumbnail.
3. Orange means an award. Nothing else on the site uses it, so it reads as proof.
4. The voice is the client's. Copy in `/content` is verbatim, and lines rewritten for layout are marked `// new:`.
5. There is one orchestrated motion moment: the hero lines rise in on load. Reels drift slowly. Everything else moves only when someone acts. `prefers-reduced-motion` stops all of it.

## Review against the brief (what I changed and why)

- **First draft: Bodoni Moda display on a dark ground.** Italian, but a high-contrast serif display is the most common generated look. I replaced it with Archivo's condensed width, which references film-poster billing blocks, so the type comes from the subject.
- **First draft: neutral near-black background with an orange accent.** This is the "black plus one bright accent" default. I moved the background to a measurable sea blue taken from their own underwater work, and restricted orange to awards so it carries meaning.
- **First draft: services as four cards on the homepage.** That brings back the brochure. Services now live on their section pages as plain text lists, and the homepage keeps only the poster wall and the credited reels.
- **First draft: numbered sections (01 / 02 / 03).** The content isn't a sequence, so I dropped the numbers.

## Open items for the client

See every `// TODO: ask client` in `/content`. The main ones:
- Macbeth runtime: 55′ on one page, 26′ on the other.
- Mami Wata is dated 2021, before the company's founding year (2022).
- Missing trailers for Solo il mare and I corpi degli altri.
- Which film the homepage YouTube video (`VXhV7DKAg0g`) comes from.
- Photographer credits for the underwater and commercial galleries.
- 6–10 s muted mp4 clips per film, which would turn the reels into real loops.
