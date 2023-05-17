import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import navbar from './navbar';
import { serversApi } from '@/store/queries/ServerQueries';
import { continentsApi } from '@/store/queries/ContinentsQueries';
import { locationsApi } from '@/store/queries/LocationQueries';
import { cardsApi } from '@/store/queries/CardQueries';
import { alarmsApi } from '@/store/queries/AlarmQueries';

const rootReducer = (state, action) => {
	if (action.type === HYDRATE) {
		return {
			...state,
			...action.payload,
		};
	}
	return combineReducers({
		navbar,
		[serversApi.reducerPath]: serversApi.reducer,
		[continentsApi.reducerPath]: continentsApi.reducer,
		[locationsApi.reducerPath]: locationsApi.reducer,
		[cardsApi.reducerPath]: cardsApi.reducer,
		[alarmsApi.reducerPath]: alarmsApi.reducer
	})(state, action);
};

export default rootReducer;