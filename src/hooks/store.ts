import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import { AppDispatch, RootState } from '../types/store-types';
import { store } from '../store/store';
import { ActionCreator, ActionCreatorsMapObject, AsyncThunk, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => typeof store = useStore;


export const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => bindActionCreators(actions, dispatch), []);
};


  type BoundActions<Actions extends ActionCreatorsMapObject> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
      ? BoundAsyncThunk<Actions[key]>
      : Actions[key]
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type BoundAsyncThunk<Thunk extends ActionCreator<any>> = (
    ...args: Parameters<Thunk>
  ) => ReturnType<ReturnType<Thunk>>
