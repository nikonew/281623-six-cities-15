import { AxiosInstance } from 'axios';
import { FullOffer, TOffer } from '../../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';

export const fetchAllOffers = createAsyncThunk<TOffer[], undefined, { extra: AxiosInstance}>
('fetchOffers/all', async (_arg, { extra: api}) => {
  const response = await api.get<TOffer[]>(APIRoute.Offers);
  return response.data;
});

export const fetchOffer = createAsyncThunk<FullOffer[], undefined, { extra: AxiosInstance}>
('fetchOffers/one', async (offerID, { extra: api}) => {
  const response = await api.get<FullOffer[]>(`${APIRoute.Offers}/${offerID}`);
  return response.data;
});

export const fetchNearBy = createAsyncThunk<TOffer[], undefined, { extra: AxiosInstance}>
('fetchOffers/near', async (offerID, { extra: api}) => {
  const response = await api.get<TOffer[]>(`${APIRoute.Offers}/${offerID}/nearby`);
  return response.data;
});
