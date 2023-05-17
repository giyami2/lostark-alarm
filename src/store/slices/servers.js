import { createSlice } from "@reduxjs/toolkit";
import { serversApi } from "../queries/ServerQueries";

// api 실행 후 Redux 상태관리 저장
// 현재는 사용X 
const SLICE_NAME = "servers";
const initialState = {
  list: [],
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      serversApi.endpoints.getServers.matchFulfilled,
      (state, { payload }) => {
        state.list = payload;
      }
    );
  },
});

export default slice.reducer;
// export const { init, setScrollY, setPath } = layoutSlice.actions; // 액션 생성함수
