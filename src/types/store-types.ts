import { store } from '../store/store';

export type RootStateb = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
