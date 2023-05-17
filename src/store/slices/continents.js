import { createSlice } from "@reduxjs/toolkit";
import { continentsApi } from "../queries/ContinentsQueries";

// 현재는 사용X 
const SLICE_NAME = "continents";
const initialState = {
  list: [],
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      continentsApi.endpoints.getContinents.matchFulfilled,
      (state, { payload }) => {
        state.list = payload;
      }
    );
  },
});

export default slice.reducer;
// export const { init, setScrollY, setPath } = layoutSlice.actions; // 액션 생성함수
