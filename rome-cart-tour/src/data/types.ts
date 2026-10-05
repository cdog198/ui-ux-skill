export const LANGS = ['en', 'it', 'es', 'fr', 'de', 'pt'] as const;
export type Lang = (typeof LANGS)[number];

/** [longitude, latitude], the order MapLibre and GeoJSON use. */
export type LngLat = [number, number];

/**
 * 'reviewed'      – written or checked by a person, safe to show as-is.
 * 'machine-draft' – translated automatically, needs a native speaker to review.
 */
export type ReviewStatus = 'reviewed' | 'machine-draft';

export interface StopText {
  name: string;
  /** One line that makes people look up. Shown on the card and in the auto popup. */
  hook: string;
  /** 2–4 short paragraphs. */
  history: string[];
  funFacts: string[];
  photoTip: string;
  status: ReviewStatus;
}

export interface ImageRef {
  /** Path under /public, e.g. /images/stops/colosseum/then.jpg */
  src: string;
  /** Short caption shown on the slider, per language falls back to English. */
  caption: Partial<Record<Lang, string>> & { en: string };
}

export interface Stop {
  /** Stable id used in URLs and file names. Never change it once QR codes or links are out. */
  id: string;
  /** Number shown on the marker (as a Roman numeral). Only an identifier, not the visiting order. */
  number: number;
  coords: LngLat;
  /** Set when the exact point is a judgement call; search for `coordsNote` to review them. */
  coordsNote?: string;
  /** Distance in metres at which the story card pops up automatically. Default: config.autoPopupRadiusM */
  triggerRadiusM?: number;
  thenNow?: { then: ImageRef; now: ImageRef };
  /** Hero photo at the top of the card. */
  photo?: ImageRef;
  model?: { src: string; poster?: string; /** metres, used for the AR scale hint */ scale?: string };
  /** Camera for the CesiumJS fly-over: centre of the orbit, radius and height in metres. */
  flyover?: { center: LngLat; height: number; range: number; pitchDeg?: number };
  text: Partial<Record<Lang, StopText>> & { en: StopText };
}

export type GemCategory = 'gelato' | 'food' | 'church' | 'viewpoint' | 'photo' | 'coffee';

export interface Gem {
  id: string;
  category: GemCategory;
  coords: LngLat;
  /** true until someone from the team has checked the place and the text. */
  needsReview: boolean;
  text: Partial<Record<Lang, { name: string; blurb: string; status: ReviewStatus }>> & {
    en: { name: string; blurb: string; status: ReviewStatus };
  };
}
