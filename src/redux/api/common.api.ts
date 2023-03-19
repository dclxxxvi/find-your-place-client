import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const commonApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
		prepareHeaders: headers => {
			headers.set('Content-Type', 'application/json;charset=UTF-8');
			headers.set('Authorization', localStorage.getItem('access-token') ?? '');

			return headers;
		},
	}),
	tagTypes: [],
	endpoints: _ => ({}),
});
