import { configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/slice';

export const store = configureStore({
  reducer: {
    [offersSlice.name]: offersSlice.reducer
  }
});
