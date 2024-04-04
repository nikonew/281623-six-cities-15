import { combineReducers } from '@reduxjs/toolkit';
import { offersSlice } from './slices/slice-offers';
import { offerSlice } from './slices/slice-offer';


export const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
});
