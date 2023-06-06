import { commonApi } from './common.api';
import { ETagTypes } from './consts';
import { type IResponse, type IWorkspaceFetchResult } from '../../types';
import { type IVisitation, type IVIsitationCreation } from '../../types/IVisitation';

const commentsApi = commonApi.injectEndpoints({
	overrideExisting: false,
	endpoints: builder => ({
		executeVisitation: builder.mutation<IVisitation, IVIsitationCreation>({
			query: body => ({
				url: 'visitations',
				method: 'POST',
				body,
			}),
			invalidatesTags: [ETagTypes.VISITATIONS],
		}),
		getVisitations: builder.query<IResponse<IWorkspaceFetchResult>, null>({
			query: (params) => ({
				url: 'visitations',
				method: 'GET',
				// params: prepareParams(params),
			}),
			providesTags: (result) => [
				ETagTypes.VISITATIONS,
				...result?.data.items.map(({ id }) => ({ type: ETagTypes.VISITATIONS, id })) || [],
			],
		}),
	}),
});

export const {
	useExecuteVisitationMutation,
	useGetVisitationsQuery,
} = commentsApi;
