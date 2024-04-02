import { createAction } from '@reduxjs/toolkit';
import { TCity } from '../../types/types';

export const changeCity = createAction<TCity>('cities/changeCity');
