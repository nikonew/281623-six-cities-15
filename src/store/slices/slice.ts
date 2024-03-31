import { TCity, TOffer} from '../../types/types';
import { CITIES_LOCATION} from '../../const';
import { offers } from '../../mocks/mock';
import { PayloadAction,createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../app/router/router/router';
import { requireAuthorization } from '../action/action';


type OffersState = {
    currentCity: TCity;
    offers: TOffer[];
    authorizationStatus: AuthorizationStatus;
}

const initialState: OffersState = {
  currentCity: CITIES_LOCATION[0],
  offers,
  authorizationStatus: AuthorizationStatus.Unknown,
};


export const offersSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(requireAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      }),
  initialState,
  name: 'offers',
  reducers: {
    setCurrentCity: (state, action: PayloadAction<TCity>) => {
      state.currentCity = action.payload;
    },
  },
  selectors: {
    currentCity: (state: OffersState) => state.currentCity,
    offers: (state: OffersState) => state.offers,
  }
});

export const offersActions = offersSlice.actions;
export const offersSelectors = offersSlice.selectors;
