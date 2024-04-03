import { combineReducers } from '@reduxjs/toolkit';
import { offersSlice } from './slices/slice';


export const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
});
