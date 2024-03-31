import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/slice';

export const store = configureStore({
  reducer: {
    [offersSlice.name]: offersSlice.reducer
  }
});

export const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
});
