import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tagTypes } from './consts';

export const commonApi = createApi({
	reducerPath: 'commonApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
		prepareHeaders: headers => {
			headers.set('Content-Type', 'application/json;charset=UTF-8');
			headers.set('Authorization', localStorage.getItem('access-token') ?? '');
			headers.set('Access-Control-Allow-Credentials', 'true');
			return headers;
		},
	}),
	tagTypes,
	endpoints: () => ({}),
});
