import { createAction } from '@reduxjs/toolkit';
import { TCity } from '../../types/types';
import { AuthorizationStatus } from '../../app/router/router/router';

export const changeCity = createAction<TCity>('cities/changeCity');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
