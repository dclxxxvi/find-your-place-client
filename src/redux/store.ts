import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchFilterReducer, themeReducer } from './slices';
import { commonApi } from './api/common.api';

const apiReducer = combineReducers({
	[commonApi.reducerPath]: commonApi.reducer,
	themeReducer,
	searchFilterReducer,
});

export const store = configureStore({
	reducer: apiReducer,
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
