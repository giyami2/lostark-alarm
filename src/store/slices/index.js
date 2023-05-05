import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import navbar from './navbar';
import servers from './servers';
import { serversApi } from '@/store/queries/ServerQueries';

const rootReducer = (state, action) => {
	if (action.type === HYDRATE) {
		return {
			...state,
			...action.payload,
		};
	}
	return combineReducers({
		navbar,
		// servers
		[serversApi.reducerPath]: serversApi.reducer,
	})(state, action);
};

export default rootReducer;