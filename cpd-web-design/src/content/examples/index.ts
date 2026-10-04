/**
 * Registry of example sites. To add an industry (e.g. salons):
 *  1. Copy restaurant.ts → salon.ts and edit the content + `salonMeta.features`.
 *  2. Copy src/components/examples/restaurant/ → salon/ and adjust the layout.
 *  3. Add src/app/examples/salon/page.tsx (copy the restaurant one).
 *  4. Add `salonMeta` to the list below. It then appears on the home page,
 *     in /examples, in the "What you get" table and in the sitemap.
 */
import { hotelMeta } from "./hotel";
import { restaurantMeta } from "./restaurant";
import type { ExampleMeta } from "./types";

export const examples: ExampleMeta[] = [restaurantMeta, hotelMeta];
