/**
 * Hand-placed map labels. The base map's own place labels are switched off, so these are the only
 * area names guests see. Add, move or delete freely – [longitude, latitude].
 */
import type { FeatureCollection, Point } from 'geojson';

type Label = { name: string; kind: 'hill' | 'district'; at: [number, number] };

const labels: Label[] = [
  // The hills (and two famous extras across the river and to the north).
  { name: 'Palatino', kind: 'hill', at: [12.4875, 41.8892] },
  { name: 'Aventino', kind: 'hill', at: [12.4815, 41.8822] },
  { name: 'Celio', kind: 'hill', at: [12.4955, 41.8858] },
  { name: 'Campidoglio', kind: 'hill', at: [12.4826, 41.8932] },
  { name: 'Esquilino', kind: 'hill', at: [12.4985, 41.8955] },
  { name: 'Viminale', kind: 'hill', at: [12.4925, 41.8995] },
  { name: 'Quirinale', kind: 'hill', at: [12.4905, 41.9012] },
  { name: 'Gianicolo', kind: 'hill', at: [12.4612, 41.8955] },
  { name: 'Pincio', kind: 'hill', at: [12.4808, 41.9138] },

  // Districts.
  { name: 'Trastevere', kind: 'district', at: [12.4688, 41.8865] },
  { name: 'Monti', kind: 'district', at: [12.4935, 41.8945] },
  { name: 'Testaccio', kind: 'district', at: [12.4755, 41.8775] },
  { name: 'Campo Marzio', kind: 'district', at: [12.4795, 41.9048] },
  { name: 'Parione', kind: 'district', at: [12.4705, 41.8975] },
  { name: 'Prati', kind: 'district', at: [12.4645, 41.9075] },
  { name: 'Borgo', kind: 'district', at: [12.4605, 41.9025] },
  { name: 'Ghetto', kind: 'district', at: [12.4775, 41.8925] },
];

export const curatedLabels: FeatureCollection<Point, { name: string; kind: Label['kind'] }> = {
  type: 'FeatureCollection',
  features: labels.map((l) => ({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: l.at },
    properties: { name: l.name, kind: l.kind },
  })),
};
