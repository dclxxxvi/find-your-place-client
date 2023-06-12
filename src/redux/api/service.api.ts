import { commonApi } from './common.api';
import { type IBaseType } from '../../types';
import { ETagTypes } from './consts';

const serviceApi = commonApi.injectEndpoints({
	overrideExisting: false,
	endpoints: builder => ({
		getCategories: builder.query<IBaseType[], null>({
			query: () => ({
				url: 'service/categories',
				method: 'GET',
			}),
			providesTags: [ETagTypes.DICTIONARIES],
		}),
		getParameters: builder.query<IBaseType[], null>({
			query: () => ({
				url: 'service/parameters',
				method: 'GET',
			}),
			providesTags: [ETagTypes.DICTIONARIES],
		}),
		getStatuses: builder.query<IBaseType[], null>({
			query: () => ({
				url: 'service/statuses',
				method: 'GET',
			}),
			providesTags: [ETagTypes.STATUSES],
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetParametersQuery,
	useGetStatusesQuery,
} = serviceApi;
