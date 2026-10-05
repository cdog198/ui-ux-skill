/** Business settings. Secrets and per-deploy values come from .env (see README). */
export const config = {
  brand: 'Kirba Tours',
  /** "Leave us a review" link. Override with VITE_GYG_REVIEW_URL. */
  reviewUrl: import.meta.env.VITE_GYG_REVIEW_URL || 'https://www.getyourguide.com/',
  /** Auto story popup distance, metres. A stop can override it with `triggerRadiusM`. */
  autoPopupRadiusM: 150,
  /**
   * Draw the street-routed loop from src/data/route.generated.json (`npm run route`).
   * Off by default: tours start anywhere and the order varies, so the map shows all stops without a fixed line.
   */
  showLoopRoute: import.meta.env.VITE_SHOW_LOOP_ROUTE === 'true',
  map: {
    center: [12.4795, 41.8975] as [number, number],
    zoom: 13.6,
    minZoom: 12,
    maxZoom: 19,
    /** Keeps guests from panning off to the suburbs. */
    maxBounds: [
      [12.395, 41.845],
      [12.565, 41.95],
    ] as [[number, number], [number, number]],
  },
};
