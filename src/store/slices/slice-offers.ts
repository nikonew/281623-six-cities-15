import { TCity, TOffer} from '../../types/types';
import { CITIES_LOCATION, RequestStatus} from '../../const';
import { PayloadAction,createSlice } from '@reduxjs/toolkit';
import { fetchAllOffers } from '../thunk/offers-api';


type OffersState = {
    currentCity: TCity;
    offers: TOffer[];
    status: RequestStatus;
}

const initialState: OffersState = {
  currentCity: CITIES_LOCATION[0],
  offers: [],
  status: RequestStatus.Idle,
};


export const offersSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
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
    offersStatus: (state: OffersState) => state.status,
  }
});

export const { setCurrentCity } = offersSlice.actions;
export const offersSelectors = offersSlice.selectors;
