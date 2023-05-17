import { createSlice } from "@reduxjs/toolkit";
import { locationsApi } from "../queries/LocationQueries";

// 현재는 사용X 
const SLICE_NAME = "locations";
const initialState = {
  list: [],
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      locationsApi.endpoints.getLocations.matchFulfilled,
      (state, { payload }) => {
        state.list = payload;
      }
    );
  },
});

export default slice.reducer;
// export const { init, setScrollY, setPath } = layoutSlice.actions; // 액션 생성함수
