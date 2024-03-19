export const CITIES_LOCATION = [
  {
    id: 'Paris',
    location: {latitude: 48.85661, longitude: 2.351499, zoom: 13},
    name: 'Paris',
  },
  {
    id: 'Cologne',
    location: {latitude: 50.938361, longitude: 6.959974, zoom: 13},
    name: 'Cologne',
  },
  {
    id: 'Brussels',
    location: {latitude: 50.846557, longitude: 4.351697, zoom: 13},
    name: 'Brussels',
  },
  {
    id: 'Amsterdam',
    location: {latitude: 52.37454, longitude: 4.897976, zoom: 13},
    name: 'Amsterdam',
  },
  {
    id: 'Hamburg',
    location: {latitude: 53.5753, longitude: 10.0153, zoom: 13},
    name: 'Hamburg',
  },
  {
    id: 'Dusseldorf',
    location: {latitude: 51.2217, longitude: 6.77616, zoom: 13},
    name: 'Dusseldorf',
  }
] as const;

export type CityName = (typeof CITIES_LOCATION)[number]['name']
