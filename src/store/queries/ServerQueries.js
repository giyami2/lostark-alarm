import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const REDUCER_PATH = "serversApi";

export const serversApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_HOST}`,
    // prepareHeaders: headers => {
    // 	const token = localStorage.getItem('token');

    // 	headers.set('authorization', `Bearer ${token}`);
    // 	return headers;
    // },
  }),
  tagTypes: ["servers"],
  endpoints: (builder) => ({
    // 서버 조회
    getServers: builder.query({
      query: (isAll) => ({
        url: `/get-servers?all=${isAll}`,
        method: "GET",
      }),
      transformResponse: (response) => {        
        return response;
      },
      providesTags: ["servers"],
    }),
  }),
});

export const { useGetServersQuery } = serversApi;