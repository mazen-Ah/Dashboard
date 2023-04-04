import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mocki.io/v1/" }),
  endpoints: ({ query, mutation }) => ({
    getCardsData: query({
      query: () => "659be0ec-ccbd-433d-8d9a-097f0d39ca2f",
    }),
  }),
});
export const { useGetCardsDataQuery } = apiSlice;
