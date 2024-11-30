export const CITIES_LOCATION = [
  {
    location: {latitude: 48.85661, longitude: 2.351499, zoom: 13},
    name: 'Paris',
  },
  {
    location: {latitude: 50.938361, longitude: 6.959974, zoom: 13},
    name: 'Cologne',
  },
  {
    location: {latitude: 50.846557, longitude: 4.351697, zoom: 13},
    name: 'Brussels',
  },
  {
    location: {latitude: 52.37454, longitude: 4.897976, zoom: 13},
    name: 'Amsterdam',
  },
  {
    location: {latitude: 53.5753, longitude: 10.0153, zoom: 13},
    name: 'Hamburg',
  },
  {
    location: {latitude: 51.2217, longitude: 6.77616, zoom: 13},
    name: 'Dusseldorf',
  }
] as const;

export enum SortingTypes {
  Popular = 'Popular',
  PriceLowHigh = 'Price: low to high',
  PriceHighLow = 'Price: high to low',
  TopRated = 'Top rated first'
}

export const SORT_OPTIONS: Array<SortingTypes> = [
  SortingTypes.Popular,
  SortingTypes.PriceLowHigh,
  SortingTypes.PriceHighLow,
  SortingTypes.TopRated,
];

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}

export const MAX_RATING = 5;

export const enum RequestStatus {Idle, Loading, Success, Failed}
