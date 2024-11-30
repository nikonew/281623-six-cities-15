import { AxiosInstance } from 'axios';
import { FullOffer, TComment, TOffer } from '../../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';

export const fetchAllOffers = createAsyncThunk<TOffer[], undefined, { extra: AxiosInstance}>
('fetchOffers/all', async (_arg, { extra: api}) => {
  const response = await api.get<TOffer[]>(APIRoute.Offers);
  return response.data;
});

export const fetchOffer = createAsyncThunk<FullOffer, string, { extra: AxiosInstance}>
('fetchOffers/one', async (offerId, { extra: api}) => {
  const response = await api.get<FullOffer>(`${APIRoute.Offers}/${offerId}`);
  return response.data;
});

export const fetchNearBy = createAsyncThunk<TOffer[], string, { extra: AxiosInstance}>
('fetchOffers/near', async (id, { extra: api}) => {
  const response = await api.get<TOffer[]>(`${APIRoute.Offers}/${id}/nearby`);
  return response.data.slice(0,3);
});

export const fetchAllReviews = createAsyncThunk<TComment[], string, { extra: AxiosInstance}>
('fetchReviews/all', async (id , { extra: api}) => {
  const response = await api.get<TComment[]>(`${APIRoute.Reviews}/${id}`);
  return response.data;
});
