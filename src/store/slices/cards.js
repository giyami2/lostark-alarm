import { createSlice } from "@reduxjs/toolkit";
import { cardsApi } from "@/store/queries/CardQueries";

// 현재는 사용X 
const SLICE_NAME = "cards";
const initialState = {
  list: [],
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      cardsApi.endpoints.getCards.matchFulfilled,
      (state, { payload }) => {
        state.list = payload;
      }
    );
  },
});

export default slice.reducer;
// export const { init, setScrollY, setPath } = layoutSlice.actions; // 액션 생성함수
