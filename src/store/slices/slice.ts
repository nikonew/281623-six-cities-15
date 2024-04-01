import { TCity, TOffer} from '../../types/types';
import { CITIES_LOCATION} from '../../const';
import { offers } from '../../mocks/mock';
import { PayloadAction,createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../app/router/router/router';
import { requireAuthorization } from '../action/action';
import { fetchAllOffers } from '../thunk/offers-api';


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
      })
      .addCase(fetchAllOffers.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
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
    offersStatus: (state: OffersState) => state.authorizationStatus,
  }
});

export const offersActions = {...offersSlice.actions, fetchAllOffers};
export const offersSelectors = offersSlice.selectors;
