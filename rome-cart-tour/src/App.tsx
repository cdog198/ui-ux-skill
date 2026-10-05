import { useCallback, useMemo, useRef, useState } from 'react';
import maplibregl, { type Map as MlMap } from 'maplibre-gl';
import { TourMap, type StopState } from './components/TourMap';
import { stops, stopsById } from './data/stops';
import type { Stop } from './data/types';
import { toRoman } from './lib/roman';
import { config } from './config';

const params = new URLSearchParams(window.location.search);

/** ?demo=states previews the visited / next-stop marker styles before live tracking exists. */
function demoStates(): Record<string, StopState> {
  if (params.get('demo') !== 'states') return {};
  return { colosseum: 'done', 'colle-oppio': 'done', 'circus-maximus': 'done', 'orange-garden': 'next' };
}

export default function App() {
  const mapRef = useRef<MlMap | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const stopStates = useMemo(demoStates, []);
  const selected = selectedId ? stopsById[selectedId] : null;

  const stopName = useCallback((s: Stop) => s.text.en.name, []);

  const selectStop = useCallback((id: string) => {
    setSelectedId(id);
    const stop = stopsById[id];
    const map = mapRef.current;
    if (!map || !stop) return;
    // Keep the stop in the upper part of the screen, clear of the card.
    map.easeTo({
      center: stop.coords,
      zoom: Math.max(map.getZoom(), 15.4),
      padding: { top: 60, bottom: Math.round(window.innerHeight * 0.38), left: 0, right: 0 },
      duration: 900,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
  }, []);

  const showAll = useCallback(() => {
    setSelectedId(null);
    const map = mapRef.current;
    if (!map) return;
    const bounds = new maplibregl.LngLatBounds();
    stops.forEach((s) => bounds.extend(s.coords));
    map.fitBounds(bounds, { padding: { top: 110, bottom: 120, left: 36, right: 36 }, duration: 1000 });
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <TourMap
        stopStates={stopStates}
        selectedId={selectedId}
        onSelectStop={selectStop}
        stopName={stopName}
        onMapReady={(map) => {
          mapRef.current = map;
          map.on('click', () => setSelectedId(null));
          showAll();
        }}
      />

      {/* Brand */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-3 pt-[max(12px,env(safe-area-inset-top))]">
        <div className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-vellum/92 py-1.5 pr-4 pl-1.5 shadow-float backdrop-blur-md">
          <Monogram />
          <div className="leading-none">
            <div className="font-display text-[21px] font-bold tracking-wide text-ink">{config.brand}</div>
            <div className="mt-0.5 text-[10px] font-semibold tracking-[0.32em] text-roman uppercase">Roma · golf cart tour</div>
          </div>
        </div>
      </header>

      {/* Map actions */}
      <div className="absolute right-3 bottom-[max(20px,env(safe-area-inset-bottom))] z-10 flex flex-col gap-2.5">
        <RoundButton label="Show all stops" onClick={showAll}>
          <svg viewBox="0 0 24 24" className="size-5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 9V5a1 1 0 0 1 1-1h4M20 9V5a1 1 0 0 0-1-1h-4M4 15v4a1 1 0 0 0 1 1h4M20 15v4a1 1 0 0 1-1 1h-4" />
            <circle cx="12" cy="12" r="2.5" />
          </svg>
        </RoundButton>
      </div>

      {/* Stop preview (the full story card arrives in the next step) */}
      <div
        className={`absolute inset-x-3 bottom-[max(20px,env(safe-area-inset-bottom))] z-20 mr-16 transition-all duration-500 ease-[var(--ease-out-soft)] ${
          selected ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
        }`}
        aria-live="polite"
      >
        {selected && (
          <div className="rounded-3xl bg-vellum p-4 shadow-float">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-lg font-bold text-roman">{toRoman(selected.number)}</span>
              <h2 className="font-display text-[26px] leading-tight font-bold text-ink">{selected.text.en.name}</h2>
            </div>
            <p className="mt-1 font-serif text-[17px] leading-snug text-ink-soft">{selected.text.en.hook}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Monogram() {
  return (
    <svg viewBox="0 0 64 64" className="size-10 drop-shadow-sm" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#8e1b1b" />
      <circle cx="32" cy="32" r="25" fill="none" stroke="#d9b45a" strokeWidth="1.6" />
      <text x="32" y="42.5" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="31" fontWeight="700" fill="#f6eedd">
        K
      </text>
    </svg>
  );
}

function RoundButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="grid size-13 place-items-center rounded-full bg-vellum/95 text-ink shadow-float backdrop-blur-md transition active:scale-95"
    >
      {children}
    </button>
  );
}
