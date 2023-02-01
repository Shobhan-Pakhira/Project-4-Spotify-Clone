import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamAPI = createApi({
  reducerPath: 'shazamAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '4701dc6356msh91dece8440203acp1df821jsna08a30948ef8');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWorldChart: builder.query({ query: () => '/charts/track' }),
  }),
});

export const {
  useGetWorldChartQuery,
} = shazamAPI;
