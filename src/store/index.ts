import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import { reducer } from './store';


export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: createAPI(),
      },
    }),
});

