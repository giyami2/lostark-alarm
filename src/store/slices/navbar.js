import { createSlice } from '@reduxjs/toolkit';
const SLICE_NAME = 'navbar';

// 초기값
const initialState = {
	tabIndex: 0,
};

const navbarSlice = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {
		initNavbar: (state, action) => {
			state.tabIndex = 0;
		},
		setNavbar: (state, action) => {
			state.tabIndex = action.payload;
		},
	},
});

export const { initNavbar, setNavbar } = navbarSlice.actions; // 액션 생성함수
export default navbarSlice.reducer; // 리듀서