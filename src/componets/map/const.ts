import leaflet from 'leaflet';

export const URL_MARKER_DEFAULT = 'markup/img/pin.svg';
export const URL_MARKER_CURRENT = 'markup/img/pin-active.svg';


export const DEFAULT_MARKER_ICON = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export const ACTIVE_MARKER_ICON = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});
