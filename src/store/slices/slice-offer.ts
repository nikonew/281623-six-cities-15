import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const';
import { FullOffer, TOffer } from '../../types/types';
import { fetchNearBy, fetchOffer } from '../thunk/offers-api';

type OfferState = {
    info: FullOffer[] | null;
    nearby: TOffer[];
    status: RequestStatus;
}

const initialState: OfferState = {
  info: null,
  nearby: [],
  status: RequestStatus.Idle,
};


export const offerSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.info = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchNearBy.fulfilled, (state, action) => {
        state.nearby = action.payload;
      }),
  initialState,
  name: 'offer',
  reducers: {
    clear(state) {
      state.info = null;
      state.nearby = [];
    }
  },
  selectors: {
    nearByOffer: (state: OfferState) => state.nearby,
    offer: (state: OfferState) => state.info,
    offerStatus: (state: OfferState) => state.status,
  }
});
