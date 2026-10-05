import { useEffect, useRef, useState } from 'react';
import maplibregl, { type Map as MlMap } from 'maplibre-gl';
import type { FeatureCollection, LineString } from 'geojson';
import { buildStyle, palette } from '../map/style';
import { config } from '../config';
import { stops } from '../data/stops';
import type { Stop } from '../data/types';
import route from '../data/route.generated.json';
import { toRoman } from '../lib/roman';

export type StopState = 'idle' | 'next' | 'done';

interface Props {
  stopStates: Record<string, StopState>;
  selectedId: string | null;
  onSelectStop: (id: string) => void;
  onMapReady?: (map: MlMap) => void;
  /** Stop names shown as text under the medallions. */
  stopName: (stop: Stop) => string;
}

const LABEL_ZOOM = 15.2;

export function TourMap({ stopStates, selectedId, onSelectStop, onMapReady, stopName }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MlMap | null>(null);
  const markersRef = useRef<Map<string, HTMLButtonElement>>(new Map());
  const selectRef = useRef(onSelectStop);
  selectRef.current = onSelectStop;
  const [labelsOn, setLabelsOn] = useState(false);

  // Create the map once.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const map = new maplibregl.Map({
      container,
      style: buildStyle(window.location.origin),
      center: config.map.center,
      zoom: config.map.zoom,
      minZoom: config.map.minZoom,
      maxZoom: config.map.maxZoom,
      maxBounds: config.map.maxBounds,
      attributionControl: false,
      pitchWithRotate: false,
      dragRotate: false,
      fadeDuration: 250,
    });
    map.touchZoomRotate.disableRotation();
    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-left');
    mapRef.current = map;

    map.on('load', () => {
      addRouteLayers(map);
      // Start with the attribution folded into its (i) button.
      container.querySelector('.maplibregl-compact-show')?.classList.remove('maplibregl-compact-show');
      onMapReady?.(map);
    });
    map.on('zoom', () => setLabelsOn(map.getZoom() >= LABEL_ZOOM));

    // Medallion markers.
    const created: maplibregl.Marker[] = [];
    stops.forEach((stop, i) => {
      const anchor = document.createElement('div');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'stop-marker';
      button.dataset.enter = 'true';
      button.style.setProperty('--i', String(i));
      const numeral = toRoman(stop.number);
      if (numeral.length > 3) button.dataset.long = 'true';
      button.innerHTML = `<span class="medallion" aria-hidden="true">${numeral}</span><span class="stop-label"></span>`;
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        selectRef.current(stop.id);
      });
      button.addEventListener('animationend', () => delete button.dataset.enter, { once: true });
      anchor.appendChild(button);
      markersRef.current.set(stop.id, button);
      created.push(new maplibregl.Marker({ element: anchor, anchor: 'center' }).setLngLat(stop.coords).addTo(map));
    });

    const declutter = () => spreadOverlapping(map, created);
    map.on('zoom', declutter);
    map.once('idle', declutter);

    return () => {
      created.forEach((m) => m.remove());
      markersRef.current.clear();
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep marker state, selection and (translated) names in sync.
  useEffect(() => {
    for (const stop of stops) {
      const el = markersRef.current.get(stop.id);
      if (!el) continue;
      const state = stopStates[stop.id] ?? 'idle';
      const name = stopName(stop);
      el.dataset.state = state;
      el.dataset.selected = String(stop.id === selectedId);
      el.setAttribute(
        'aria-label',
        `${stop.number}. ${name}${state === 'next' ? ' (next stop)' : state === 'done' ? ' (visited)' : ''}`,
      );
      const label = el.querySelector('.stop-label');
      if (label) label.textContent = name;
      // Next and selected stops sit above their neighbours.
      const anchor = el.parentElement;
      if (anchor) anchor.style.zIndex = stop.id === selectedId ? '3' : state === 'next' ? '2' : '1';
    }
  }, [stopStates, selectedId, stopName]);

  return (
    <div className={`absolute inset-0 ${labelsOn ? 'show-stop-labels' : ''}`}>
      {/* Inline style: maplibre-gl.css sets the container to position: relative, which beats Tailwind utilities. */}
      <div ref={containerRef} style={{ position: 'absolute', inset: 0 }} />
      <div className="map-paper" aria-hidden="true" />
    </div>
  );
}

const MIN_GAP_PX = 40;

/**
 * Stops like the Orange Garden and Santa Sabina sit 100 m apart and overlap when zoomed out.
 * Nudge overlapping medallions apart on screen (they slide back as you zoom in) so each stays tappable.
 */
function spreadOverlapping(map: MlMap, markers: maplibregl.Marker[]) {
  const base = markers.map((m) => map.project(m.getLngLat()));
  const offsets = base.map(() => ({ x: 0, y: 0 }));
  for (let pass = 0; pass < 4; pass++) {
    for (let i = 0; i < base.length; i++) {
      for (let j = i + 1; j < base.length; j++) {
        const dx = base[j].x + offsets[j].x - (base[i].x + offsets[i].x);
        const dy = base[j].y + offsets[j].y - (base[i].y + offsets[i].y);
        const dist = Math.hypot(dx, dy);
        if (dist >= MIN_GAP_PX) continue;
        // Identical points get pushed apart horizontally.
        const ux = dist > 0.01 ? dx / dist : 1;
        const uy = dist > 0.01 ? dy / dist : 0;
        const push = (MIN_GAP_PX - dist) / 2;
        offsets[i].x -= ux * push;
        offsets[i].y -= uy * push;
        offsets[j].x += ux * push;
        offsets[j].y += uy * push;
      }
    }
  }
  markers.forEach((m, i) => m.setOffset([offsets[i].x, offsets[i].y]));
}

/**
 * Two line styles with a glow: the optional street-routed loop and (fed later by the live cart)
 * the trail the cart has actually driven today.
 */
function addRouteLayers(map: MlMap) {
  const empty: FeatureCollection<LineString> = { type: 'FeatureCollection', features: [] };
  const loop = route.geometry as LineString | null;

  map.addSource('loop', {
    type: 'geojson',
    data: config.showLoopRoute && loop ? { type: 'Feature', geometry: loop, properties: {} } : empty,
  });
  map.addSource('trail', { type: 'geojson', data: empty, lineMetrics: true });

  const glow = (id: string, source: string, width: [number, number], opacity: number) =>
    map.addLayer({
      id,
      type: 'line',
      source,
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': palette.routeGlow,
        'line-width': ['interpolate', ['linear'], ['zoom'], 12, width[0], 18, width[1]],
        'line-blur': ['interpolate', ['linear'], ['zoom'], 12, 3, 18, 9],
        'line-opacity': opacity,
      },
    });

  glow('loop-glow', 'loop', [6, 18], 0.45);
  map.addLayer({
    id: 'loop-line',
    type: 'line',
    source: 'loop',
    layout: { 'line-cap': 'round', 'line-join': 'round' },
    paint: {
      'line-color': palette.routeRed,
      'line-width': ['interpolate', ['linear'], ['zoom'], 12, 2, 18, 5.5],
      'line-opacity': 0.9,
    },
  });

  glow('trail-glow', 'trail', [7, 20], 0.5);
  map.addLayer({
    id: 'trail-line',
    type: 'line',
    source: 'trail',
    layout: { 'line-cap': 'round', 'line-join': 'round' },
    paint: {
      'line-width': ['interpolate', ['linear'], ['zoom'], 12, 2.5, 18, 6],
      // Fades in from the oldest point so the trail reads as "where we've been".
      'line-gradient': [
        'interpolate',
        ['linear'],
        ['line-progress'],
        0, 'rgba(142,27,27,0.15)',
        0.6, 'rgba(142,27,27,0.75)',
        1, palette.routeRed,
      ],
    },
  });
}
