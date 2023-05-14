import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const REDUCER_PATH = "locationsApi";

export const locationsApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_HOST}`,
  }),
  tagTypes: ["locations"],
  endpoints: (builder) => ({
    // 지역 조회 -> id : 대륙id 
    getLocations: builder.query({
      query: (continentId) => ({
        url: `/get-locations?id=${continentId}`,
        method: "GET",
      }),
      transformResponse: (response) => {        
        return response;
      },
      providesTags: ["locations"],
    }),
  }),
});

export const { useLazyGetLocationsQuery } = locationsApi;
