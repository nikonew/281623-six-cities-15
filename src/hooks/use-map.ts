import leaflet from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import {Map} from 'leaflet';
import { TLocation } from '../types/types';

type TUseMap = {
    location: TLocation;
      mapRef: MutableRefObject<HTMLElement | null>;
}


const TILE_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

const TILE_LAYER_URL_ATTRIBUTION =
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export default function useMap({location, mapRef}: TUseMap): Map | null {
  const [map, setMap] = useState <Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude
        },
        zoom: location.zoom
      });

      leaflet
        .tileLayer(TILE_LAYER_URL, {attribution: TILE_LAYER_URL_ATTRIBUTION})
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location]);

  return map;
}
