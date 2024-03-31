import { AxiosInstance } from 'axios';
import { TOffer } from '../../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';

export const fetchAllOffers = createAsyncThunk<TOffer[], undefined, { extra: AxiosInstance}>
('fetchOffers/all', async (_arg, { extra: api}) => {
  const response = await api.get<TOffer[]>(APIRoute.Offers);
  return response.data;
});
