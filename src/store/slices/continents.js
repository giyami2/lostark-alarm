import { createSlice } from "@reduxjs/toolkit";
import { continentsApi } from "../queries/ContinentsQueries";

// api 실행 후 Redux 상태관리 저장
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
        state.list = payload?.map((p) => p.continentName);
      }
    );
  },
});

export default slice.reducer;
// export const { init, setScrollY, setPath } = layoutSlice.actions; // 액션 생성함수
