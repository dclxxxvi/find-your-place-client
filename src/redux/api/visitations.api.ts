import { commonApi } from './common.api';
import { ETagTypes } from './consts';
import { type IPaginatedResult, type IPaginationParams, type IResponse } from '../../types';
import { type IVisitation, type IVIsitationCreation } from '../../types/IVisitation';

const commentsApi = commonApi.injectEndpoints({
	overrideExisting: false,
	endpoints: builder => ({
		executeVisitation: builder.mutation<IVisitation, IVIsitationCreation>({
			query: body => ({
				url: 'visit',
				method: 'POST',
				body,
			}),
			invalidatesTags: [ETagTypes.VISITATIONS],
		}),
		getVisitations: builder.query<IResponse<IPaginatedResult<IVisitation>>, IPaginationParams>({
			query: (params) => ({
				url: 'user/visits',
				method: 'GET',
				params,
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
