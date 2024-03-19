import { TOffer } from '../../types/types';
import { CITIES_LOCATION, CityName } from '../../const';
import { offers } from '../../mocks/mock';


type OffersState = {
    city: CityName;
    offers: TOffer[];
}

const initialState: OffersState = {
  city: CITIES_LOCATION[0].name,
  offers,
};

const enum ActionType {
    SetCity = 'offers/setCity'
}

export const setCity = (city: CityName) => ({
  payload: city,
  type: ActionType.SetCity,
});

export function reducer(state: OffersState = initialState, action: {payload: unknown; type: ActionType}):
OffersState {
  switch (action.type) {
    case ActionType.SetCity:
      return {
        ...state,
        city: action.payload as CityName,
      };
    default:
      return state;
  }
}
