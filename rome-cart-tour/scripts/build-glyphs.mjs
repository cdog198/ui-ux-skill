// Builds MapLibre glyph PBFs (signed-distance-field fonts) for the map labels from the
// self-hosted EB Garamond files, so the map can use a classic serif without depending on
// a third-party font server. Output: public/glyphs/<fontstack>/<start>-<end>.pbf
//
//   npm run glyphs
//
// Only needed when changing the label fonts. Uses the Chromium that Playwright ships with
// (set CHROMIUM_PATH if yours lives elsewhere) to rasterise glyphs via @mapbox/tiny-sdf.

import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PbfWriter } from 'pbf';
import { chromium } from 'playwright-core';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const fontDir = join(root, 'node_modules/@fontsource/eb-garamond/files');

const STACKS = [
  { name: 'EB Garamond Regular', weight: '400', style: 'normal' },
  { name: 'EB Garamond Italic', weight: '400', style: 'italic' },
  { name: 'EB Garamond SemiBold', weight: '600', style: 'normal' },
  { name: 'EB Garamond SemiBold Italic', weight: '600', style: 'italic' },
];
// Basic Latin + Latin-1, Latin Extended-A, General Punctuation (en/em dashes, curly quotes).
const RANGES = [0, 256, 8192];

const FONT_SIZE = 24;
const BUFFER = 3;
const TOP_ADJUST = 26; // aligns tiny-sdf's baseline-relative metrics with fontnik's

function fontDataUrl(subset, weight, style) {
  const file = join(fontDir, `eb-garamond-${subset}-${weight}-${style}.woff2`);
  return `data:font/woff2;base64,${readFileSync(file).toString('base64')}`;
}

const tinySdfSource = readFileSync(join(root, 'node_modules/@mapbox/tiny-sdf/index.js'), 'utf8')
  .replace('export default class TinySDF', 'class TinySDF');

const executablePath =
  process.env.CHROMIUM_PATH ||
  ['/opt/pw-browsers/chromium', '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'].find(existsSync);

const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage();
await page.setContent('<html><body></body></html>');
await page.addScriptTag({ content: `${tinySdfSource}\nwindow.TinySDF = TinySDF;` });

for (const stack of STACKS) {
  const family = `Glyph ${stack.name}`;
  await page.evaluate(
    async ({ family, weight, style, urls }) => {
      for (const url of urls) {
        const face = new FontFace(family, `url(${url})`, { weight, style });
        await face.load();
        document.fonts.add(face);
      }
    },
    {
      family,
      weight: stack.weight,
      style: stack.style,
      urls: [fontDataUrl('latin', stack.weight, stack.style), fontDataUrl('latin-ext', stack.weight, stack.style)],
    },
  );

  for (const start of RANGES) {
    const end = start + 255;
    const glyphs = await page.evaluate(
      ({ family, weight, style, start, end, fontSize, buffer }) => {
        const sdf = new window.TinySDF({
          fontSize, buffer, radius: 8, cutoff: 0.25,
          fontFamily: `"${family}"`, fontWeight: weight, fontStyle: style,
        });
        const out = [];
        for (let id = start; id <= end; id++) {
          if (id < 32) continue;
          const g = sdf.draw(String.fromCharCode(id));
          out.push({
            id,
            bitmap: Array.from(g.data),
            width: g.glyphWidth,
            height: g.glyphHeight,
            left: g.glyphLeft,
            top: g.glyphTop,
            advance: Math.round(g.glyphAdvance),
          });
        }
        return out;
      },
      { family, weight: stack.weight, style: stack.style, start, end, fontSize: FONT_SIZE, buffer: BUFFER },
    );

    const pbf = new PbfWriter();
    pbf.writeMessage(1, (_, p) => {
      p.writeStringField(1, stack.name);
      p.writeStringField(2, `${start}-${end}`);
      for (const g of glyphs) {
        p.writeMessage(3, (__, q) => {
          q.writeVarintField(1, g.id);
          if (g.width > 0 && g.height > 0) q.writeBytesField(2, Uint8Array.from(g.bitmap));
          q.writeVarintField(3, g.width);
          q.writeVarintField(4, g.height);
          q.writeSVarintField(5, g.left);
          q.writeSVarintField(6, g.top - TOP_ADJUST);
          q.writeVarintField(7, g.advance);
        });
      }
    });
    const dir = join(root, 'public/glyphs', stack.name);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, `${start}-${end}.pbf`), pbf.finish());
  }
  console.log(`✓ ${stack.name}`);
}

await browser.close();
