import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const REDUCER_PATH = "continentsApi";

export const continentsApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_HOST}`,
    // prepareHeaders: headers => {
    // 	const token = localStorage.getItem('token');

    // 	headers.set('authorization', `Bearer ${token}`);
    // 	return headers;
    // },
  }),
  tagTypes: ["continents"],
  endpoints: (builder) => ({
    // 대륙 조회
    getContinents: builder.query({
      query: () => ({
        url: `/get-continents`,
        method: "GET",
      }),
      transformResponse: (response) => {        
        return response;
      },
      providesTags: ["continents"],
    }),
  }),
});

export const { useGetContinentsQuery } = continentsApi;
