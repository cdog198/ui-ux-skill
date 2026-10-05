# Kirba Tours · Rome companion

The web app guests open by scanning the QR code on a Kirba Tours golf cart. Vite + React + TypeScript,
Tailwind CSS v4, MapLibre GL with a custom illustrated map style.

> Work in progress. Done so far: stop data, custom map style, stop medallions. Coming next: story cards
> and Then vs Now slider, live cart + driver mode, 3D, nearby gems, languages, "Your Rome".

```bash
npm install
cp .env.example .env
npm run dev        # http://localhost:5173  (add ?demo=states to preview visited / next-stop markers)
npm run build      # static site in dist/ – deploy to Vercel or Netlify
```

## Where things live

| What | File |
| --- | --- |
| Stops: coordinates, text, images, 3D model, fly-over camera | `src/data/stops.ts` |
| Data types (what a stop can have) | `src/data/types.ts` |
| Brand, review link, popup radius, map bounds | `src/config.ts` |
| Map style (palette at the top) | `src/map/style.ts` |
| Hand-placed hill and district labels | `src/map/labels.ts` |
| UI colours and fonts | `src/index.css` (`@theme`) |
| Street-routed loop (generated) | `src/data/route.generated.json` |
| Map label fonts (generated) | `public/glyphs/` |

### Editing stops

Everything about a stop is in `src/data/stops.ts`. Coordinates are `[longitude, latitude]`. Points that were
placed by judgement (big viewpoints, long streets) have a `coordsNote` – search for it and check them on the ground.
`number` is only the label on the marker (shown as a Roman numeral); tours can start anywhere.

### The map

The style is built in code from `palette` in `src/map/style.ts`, on OpenMapTiles-schema vector tiles
(OpenFreeMap by default, MapTiler if `VITE_MAPTILER_KEY` is set). Base-map POIs, shields and place labels are off;
the only area names are the hills and districts in `src/map/labels.ts`. Labels use EB Garamond, compiled to
MapLibre glyphs in `public/glyphs/` by `npm run glyphs` (only needed if you change the label font).

### Route line

Tours start anywhere and the order varies, so by default the map shows every stop with no fixed line.
If you want the loop drawn along real streets:

```bash
npm run route                                  # OSRM public server
ORS_API_KEY=... npm run route                  # or OpenRouteService
ROUTE_ORDER=colosseum,colle-oppio,... npm run route   # custom order (default: marker numbers)
```

then set `VITE_SHOW_LOOP_ROUTE=true`. The geometry is saved in `src/data/route.generated.json`; the app never
calls a routing API at runtime.
