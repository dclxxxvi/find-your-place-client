import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchFilterReducer, themeReducer } from './slices';
import { commonApi } from './api/common.api';

const reducer = combineReducers({
	[commonApi.reducerPath]: commonApi.reducer,
	themeReducer,
	searchFilterReducer,
});

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commonApi.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
