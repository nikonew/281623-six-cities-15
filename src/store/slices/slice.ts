import { TOffer } from '../../types/types';
import { CITIES_LOCATION, CityName } from '../../const';
import { offers } from '../../mocks/mock';
import { PayloadAction,createSlice } from '@reduxjs/toolkit';


type OffersState = {
    city: CityName;
    offers: TOffer[];
}

const initialState: OffersState = {
  city: CITIES_LOCATION[0].name,
  offers,
};


export const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
  },
  selectors: {
    city: (state: OffersState) => state.city,
    offers: (state: OffersState) => state.offers,
  }
});

export const offersActions = offersSlice.actions;
export const offersSelectors = offersSlice.selectors;
