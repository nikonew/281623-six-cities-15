import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import { reducer } from './store';


export const store = configureStore({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: createAPI(),
      },
    }),
});

