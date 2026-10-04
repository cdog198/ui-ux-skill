import type { TierId } from "@/config/site";
import type { L } from "@/lib/i18n";

/**
 * A feature shown in the "Features" overlay of a demo site and in the
 * "What you get" table on the home page. `tier` is the cheapest plan
 * that includes it.
 */
export type FeatureDef = {
  id: string;
  label: L;
  description: L;
  tier: TierId;
};

/** Lightweight info about an example site, used by the home page and /examples. */
export type ExampleMeta = {
  slug: string;
  name: string;
  industry: L;
  tagline: L;
  location: string;
  /** Cover image for cards (remote Unsplash URL or /public path). */
  cover: string;
  palette: { bg: string; fg: string; accent: string };
  features: FeatureDef[];
};

/** Unsplash helper: pass the photo id (the part after "photo-"). */
export const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export type Img = { src: string; alt: L };
