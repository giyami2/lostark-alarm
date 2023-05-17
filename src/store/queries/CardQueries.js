import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const REDUCER_PATH = "cardsApi";

export const cardsApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_HOST}`,
  }),
  tagTypes: ["cards"],
  endpoints: (builder) => ({
    // 지역 조회 -> id : 대륙id 
    getCards: builder.query({
      query: (continentId) => ({
        url: `/get-cards?id=${continentId}`,
        method: "GET",
      }),
      transformResponse: (response) => {        
        return response;
      },
      providesTags: ["cards"],
    }),
  }),
});

export const { useLazyGetCardsQuery } = cardsApi;
