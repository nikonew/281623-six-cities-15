import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import leaflet, { LayerGroup } from 'leaflet';
import { TCity, TOffer } from '../../types/types';
import { ACTIVE_MARKER_ICON, DEFAULT_MARKER_ICON} from './const';
import { Nullable } from 'vitest';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  currentCity: TCity;
    offers: TOffer[];
    activeOffer: Nullable<TOffer>;
    className: string;
}

export default function Map ({currentCity, offers, activeOffer, className}: MapProps): JSX.Element {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap({location: currentCity.location, mapRef: mapContainerRef});
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(()=> {
    if(map) {
      map.setView([currentCity.location.latitude, currentCity.location.longitude], currentCity.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [currentCity,map]);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: activeOffer !== undefined && activeOffer !== null && offer.id === activeOffer.id ? ACTIVE_MARKER_ICON : DEFAULT_MARKER_ICON,
          })
          .addTo(markerLayer.current);
      });
    }
  }, [activeOffer, map,offers]);

  return (<section className={`${className} map`} ref={mapContainerRef}></section>);
}
