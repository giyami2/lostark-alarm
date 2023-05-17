import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const REDUCER_PATH = "alarmsApi";

export const alarmsApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_HOST}`,
  }),
  tagTypes: ["alarms"],
  endpoints: (builder) => ({
    // 지역 조회 -> id : 대륙id 
    getAlarms: builder.query({
      query: () => ({
        url: `/alarm`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response;
      },
      providesTags: ["alarms"],
    }),
    insertAlarms: builder.mutation({
      query: (req) => ({
        url: `/alarm`,
        method: "POST",
        body: req
      }),
      invalidatesTags: ["alarms"],
    }),
  }),
});

export const { useGetAlarmsQuery, useInsertAlarmsMutation } = alarmsApi;
