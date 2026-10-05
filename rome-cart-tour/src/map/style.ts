/**
 * The Kirba Tours map style: a warm, illustrated Rome built on OpenMapTiles-schema vector tiles
 * (OpenFreeMap by default, MapTiler if VITE_MAPTILER_KEY is set – both serve the same schema).
 *
 * Tweak the look by changing `palette`; every layer reads from it. Labels use EB Garamond glyphs
 * served from /public/glyphs (rebuild with `npm run glyphs`). Base-map POIs, shields and
 * house numbers are deliberately left out.
 */
import type { StyleSpecification, ExpressionSpecification } from 'maplibre-gl';
import { curatedLabels } from './labels';

export const palette = {
  parchment: '#f2e8d5',
  parchmentDeep: '#ebdfc6',
  urban: '#efe2c9',
  pedestrian: '#f6eedd',
  building: '#e6c1a0',
  buildingWarm: '#dcae86',
  buildingEdge: '#c9946b',
  park: '#cfd0a6',
  wood: '#b9bd8c',
  parkEdge: '#a9ae7a',
  water: '#a7bcbd',
  waterEdge: '#8fa6a8',
  waterLabel: '#5d7a7d',
  road: '#fbf6ec',
  roadCasing: '#d5c6ad',
  roadMinor: '#ddd0ba',
  path: '#d3c3a7',
  rail: '#cbbca4',
  label: '#6b4f3a',
  labelSoft: '#8a7058',
  halo: '#f4ecdc',
  routeRed: '#8e1b1b',
  routeGlow: '#c9962b',
} as const;

const p = palette;

function tileSource(): StyleSpecification['sources'][string] {
  const key = import.meta.env.VITE_MAPTILER_KEY;
  if (key) {
    return { type: 'vector', url: `https://api.maptiler.com/tiles/v3-openmaptiles/tiles.json?key=${key}` };
  }
  return { type: 'vector', url: 'https://tiles.openfreemap.org/planet' };
}

/** Zoom-interpolated line width. */
const w = (...stops: number[]): ExpressionSpecification =>
  ['interpolate', ['exponential', 1.6], ['zoom'], ...stops] as ExpressionSpecification;

const roadClass = (...classes: string[]): ExpressionSpecification => [
  'match',
  ['get', 'class'],
  classes,
  true,
  false,
];

const notTunnel: ExpressionSpecification = ['!=', ['get', 'brunnel'], 'tunnel'];

export function buildStyle(origin: string): StyleSpecification {
  return {
    version: 8,
    name: 'Kirba Tours – Roma',
    glyphs: `${origin}/glyphs/{fontstack}/{range}.pbf`,
    sources: {
      omt: tileSource(),
      curated: { type: 'geojson', data: curatedLabels },
    },
    layers: [
      { id: 'land', type: 'background', paint: { 'background-color': p.parchment } },

      // Built-up areas: a barely-there warmer wash so the historic core reads as one mass.
      {
        id: 'landuse-urban',
        type: 'fill',
        source: 'omt',
        'source-layer': 'landuse',
        filter: ['match', ['get', 'class'], ['residential', 'commercial', 'retail', 'neighbourhood', 'quarter'], true, false],
        paint: { 'fill-color': p.urban, 'fill-opacity': 0.7 },
      },
      {
        id: 'landuse-institutional',
        type: 'fill',
        source: 'omt',
        'source-layer': 'landuse',
        filter: ['match', ['get', 'class'], ['school', 'university', 'college', 'hospital', 'cemetery'], true, false],
        paint: { 'fill-color': p.parchmentDeep, 'fill-opacity': 0.8 },
      },

      // Greens: parks, gardens and the pine woods of the villas.
      {
        id: 'park',
        type: 'fill',
        source: 'omt',
        'source-layer': 'park',
        paint: { 'fill-color': p.park, 'fill-opacity': 0.85 },
      },
      {
        id: 'landcover-grass',
        type: 'fill',
        source: 'omt',
        'source-layer': 'landcover',
        filter: ['match', ['get', 'class'], ['grass', 'farmland', 'wetland'], true, false],
        paint: { 'fill-color': p.park, 'fill-opacity': 0.85 },
      },
      {
        id: 'landcover-wood',
        type: 'fill',
        source: 'omt',
        'source-layer': 'landcover',
        filter: ['==', ['get', 'class'], 'wood'],
        paint: { 'fill-color': p.wood, 'fill-opacity': 0.8 },
      },
      {
        id: 'landuse-pitch',
        type: 'fill',
        source: 'omt',
        'source-layer': 'landuse',
        filter: ['match', ['get', 'class'], ['pitch', 'stadium', 'playground'], true, false],
        paint: { 'fill-color': p.park, 'fill-opacity': 0.6 },
      },

      // The Tiber.
      {
        id: 'water',
        type: 'fill',
        source: 'omt',
        'source-layer': 'water',
        filter: ['!=', ['get', 'brunnel'], 'tunnel'],
        paint: { 'fill-color': p.water, 'fill-outline-color': p.waterEdge },
      },
      {
        id: 'water-edge',
        type: 'line',
        source: 'omt',
        'source-layer': 'water',
        minzoom: 13,
        filter: ['!=', ['get', 'brunnel'], 'tunnel'],
        paint: { 'line-color': p.waterEdge, 'line-width': w(13, 0.4, 18, 1.4), 'line-opacity': 0.7 },
      },
      {
        id: 'waterway',
        type: 'line',
        source: 'omt',
        'source-layer': 'waterway',
        filter: ['all', ['!=', ['get', 'brunnel'], 'tunnel'], ['!=', ['get', 'class'], 'river']],
        paint: { 'line-color': p.water, 'line-width': w(13, 0.5, 18, 2) },
      },

      // Pedestrian squares (Navona, Popolo, Spagna…) as pale paved areas.
      {
        id: 'pedestrian-area',
        type: 'fill',
        source: 'omt',
        'source-layer': 'transportation',
        filter: ['all', ['==', ['geometry-type'], 'Polygon'], roadClass('path', 'pedestrian', 'minor', 'service')],
        paint: { 'fill-color': p.pedestrian, 'fill-opacity': 0.9 },
      },

      // Roads: thin warm-grey hairlines with a cream fill on the bigger streets.
      {
        id: 'road-path',
        type: 'line',
        source: 'omt',
        'source-layer': 'transportation',
        minzoom: 15,
        filter: ['all', ['==', ['geometry-type'], 'LineString'], roadClass('path', 'track'), notTunnel],
        layout: { 'line-cap': 'round' },
        paint: { 'line-color': p.path, 'line-width': w(15, 0.4, 19, 1.4), 'line-dasharray': [2, 2] },
      },
      {
        id: 'road-minor',
        type: 'line',
        source: 'omt',
        'source-layer': 'transportation',
        minzoom: 13,
        filter: ['all', ['==', ['geometry-type'], 'LineString'], roadClass('minor', 'service', 'pedestrian'), notTunnel],
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': p.roadMinor, 'line-width': w(13, 0.3, 16, 1.4, 19, 7) },
      },
      {
        id: 'road-major-casing',
        type: 'line',
        source: 'omt',
        'source-layer': 'transportation',
        filter: ['all', roadClass('motorway', 'trunk', 'primary', 'secondary', 'tertiary'), notTunnel],
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': p.roadCasing, 'line-width': w(12, 0.6, 15, 3.2, 19, 18) },
      },
      {
        id: 'road-major',
        type: 'line',
        source: 'omt',
        'source-layer': 'transportation',
        minzoom: 13.5,
        filter: ['all', roadClass('motorway', 'trunk', 'primary', 'secondary', 'tertiary'), notTunnel],
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': p.road, 'line-width': w(13.5, 0.4, 15, 1.8, 19, 15) },
      },
      {
        id: 'rail',
        type: 'line',
        source: 'omt',
        'source-layer': 'transportation',
        minzoom: 13,
        filter: ['all', roadClass('rail', 'transit'), notTunnel],
        paint: { 'line-color': p.rail, 'line-width': w(13, 0.5, 18, 1.5), 'line-dasharray': [3, 2] },
      },

      // Buildings: soft terracotta and ochre, varied by height so the city has texture, not a flat block.
      {
        id: 'building',
        type: 'fill',
        source: 'omt',
        'source-layer': 'building',
        minzoom: 13,
        paint: {
          'fill-color': [
            'interpolate',
            ['linear'],
            ['coalesce', ['get', 'render_height'], 10],
            6, p.building,
            30, p.buildingWarm,
          ],
          'fill-opacity': ['interpolate', ['linear'], ['zoom'], 13, 0.45, 15, 0.85],
        },
      },
      {
        id: 'building-edge',
        type: 'line',
        source: 'omt',
        'source-layer': 'building',
        minzoom: 15.5,
        paint: { 'line-color': p.buildingEdge, 'line-width': w(15.5, 0.3, 19, 0.9), 'line-opacity': 0.55 },
      },

      // ——— Labels (all serif, sparse) ———
      {
        id: 'label-river',
        type: 'symbol',
        source: 'omt',
        'source-layer': 'waterway',
        minzoom: 13,
        filter: ['==', ['get', 'class'], 'river'],
        layout: {
          'symbol-placement': 'line',
          'symbol-spacing': 420,
          'text-field': ['upcase', ['coalesce', ['get', 'name:it'], ['get', 'name']]],
          'text-font': ['EB Garamond Italic'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 13, 12, 17, 17],
          'text-letter-spacing': 0.45,
          'text-max-angle': 25,
        },
        paint: { 'text-color': p.waterLabel, 'text-halo-color': p.water, 'text-halo-width': 0.6 },
      },
      {
        id: 'label-street',
        type: 'symbol',
        source: 'omt',
        'source-layer': 'transportation_name',
        minzoom: 15.5,
        filter: roadClass('primary', 'secondary', 'tertiary', 'minor', 'pedestrian'),
        layout: {
          'symbol-placement': 'line',
          'text-field': ['coalesce', ['get', 'name:it'], ['get', 'name']],
          'text-font': ['EB Garamond Italic'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 15.5, 11.5, 19, 15],
          'text-letter-spacing': 0.04,
          'text-max-angle': 30,
          'symbol-spacing': 320,
        },
        paint: { 'text-color': p.labelSoft, 'text-halo-color': p.halo, 'text-halo-width': 1.4 },
      },
      // Hills and rioni, hand-placed (src/map/labels.ts) so we choose exactly what appears.
      {
        id: 'label-hill',
        type: 'symbol',
        source: 'curated',
        filter: ['==', ['get', 'kind'], 'hill'],
        minzoom: 12.5,
        maxzoom: 17,
        layout: {
          'text-field': ['upcase', ['get', 'name']],
          'text-font': ['EB Garamond Italic'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 12.5, 10.5, 16, 14],
          'text-letter-spacing': 0.35,
          'text-padding': 8,
          'symbol-sort-key': 2,
        },
        paint: {
          'text-color': p.labelSoft,
          'text-halo-color': p.halo,
          'text-halo-width': 1.2,
          'text-opacity': ['interpolate', ['linear'], ['zoom'], 12.5, 0.65, 15, 0.85],
        },
      },
      {
        id: 'label-district',
        type: 'symbol',
        source: 'curated',
        filter: ['==', ['get', 'kind'], 'district'],
        minzoom: 12,
        maxzoom: 16.5,
        layout: {
          'text-field': ['upcase', ['get', 'name']],
          'text-font': ['EB Garamond SemiBold'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 12, 11, 16, 15],
          'text-letter-spacing': 0.28,
          'text-padding': 8,
          'symbol-sort-key': 1,
        },
        paint: { 'text-color': p.label, 'text-halo-color': p.halo, 'text-halo-width': 1.4, 'text-opacity': 0.82 },
      },
    ],
  };
}
