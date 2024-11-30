import { combineReducers } from '@reduxjs/toolkit';
import { offersSlice } from './slices/slice-offers';
import { offerPageSlice } from './slices/slice-offer';
import { reviewsSlice } from './slices/slice-reviews';


export const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [offerPageSlice.name]: offerPageSlice.reducer,
  [reviewsSlice.name]: reviewsSlice.reducer
});
