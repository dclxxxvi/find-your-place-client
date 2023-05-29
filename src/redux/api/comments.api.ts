import { commonApi } from './common.api';
import { ETagTypes } from './consts';
import { type IAddCommentValues } from '../../form/schemas/addCommentSchema';
import { type IComment } from '../../types/IComment';

const commentsApi = commonApi.injectEndpoints({
	overrideExisting: false,
	endpoints: builder => ({
		addComment: builder.mutation<IComment, IAddCommentValues>({
			query: body => ({
				url: 'comment',
				method: 'POST',
				body,
			}),
			invalidatesTags: [ETagTypes.COMMENTS],
		}),
		// editWorkspace: builder.mutation<IWorkspace, IWorkspace>({
		// 	query: body => ({
		// 		url: `workspaces/${body.id}`,
		// 		method: 'PUT',
		// 		body,
		// 	}),
		// 	invalidatesTags: (result, error, { id }) => [
		// 		{ type: ETagTypes.WORKSPACES, id },
		// 		{ type: ETagTypes.USER_WORKSPACES, id },
		// 	],
		// }),
		// deleteWorkspace: builder.mutation<IWorkspace, Pick<IWorkspace, 'id'>>({
		// 	query: ({ id }) => ({
		// 		url: `workspaces/${id}`,
		// 		method: 'DELETE',
		// 	}),
		// 	invalidatesTags: [ETagTypes.WORKSPACES, ETagTypes.USER_WORKSPACES],
		// }),
	}),
});

export const {
	useAddCommentMutation,
} = commentsApi;
