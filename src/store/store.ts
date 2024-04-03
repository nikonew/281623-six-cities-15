import { combineReducers } from '@reduxjs/toolkit';
import { offersSlice } from './slices/slice-offers';


export const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
});
