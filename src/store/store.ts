import { configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './reducers/reducer';

export const store = configureStore({
  reducer: {
    [offersSlice.name]: offersSlice.reducer
  }
});
