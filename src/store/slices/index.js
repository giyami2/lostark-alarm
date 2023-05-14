import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import navbar from './navbar';
import servers from './servers';
import continents from './continents';
import locations from './locations';
import { serversApi } from '@/store/queries/ServerQueries';
import { continentsApi } from '../queries/ContinentsQueries';
import { locationsApi } from '../queries/LocationQueries';

const rootReducer = (state, action) => {
	if (action.type === HYDRATE) {
		return {
			...state,
			...action.payload,
		};
	}
	return combineReducers({
		navbar,
		servers,
		continents,
		locations,
		[serversApi.reducerPath]: serversApi.reducer,
		[continentsApi.reducerPath]: continentsApi.reducer,
		[locationsApi.reducerPath]: locationsApi.reducer,
	})(state, action);
};

export default rootReducer;