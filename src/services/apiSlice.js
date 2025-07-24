// src/services/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    credentials: 'include', // optional, for cookies/auth
  }),
  endpoints: (builder) => ({
    getTours: builder.query({
      query: () => '/tours',
    }),
    // more endpoints
  }),
});

export const { useGetToursQuery } = apiSlice;
