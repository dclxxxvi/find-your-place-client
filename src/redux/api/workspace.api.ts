import { commonApi } from './common.api';
import { ETagTypes } from './consts';
import { type IWorkspace, type IWorkspaceSearchParams } from '../../types';

const workspaceApi = commonApi.injectEndpoints({
	overrideExisting: false,
	endpoints: builder => ({
		getWorkspaces: builder.query<IWorkspace[], IWorkspaceSearchParams>({
			query: (params) => ({
				url: 'workspace',
				method: 'GET',
				params,
			}),
			providesTags: (result = []) => [
				ETagTypes.WORKSPACES,
				...result.map(({ id }) => ({ type: ETagTypes.WORKSPACES, id })),
			],
		}),
		getWorkspaceById: builder.query<IWorkspace, Pick<IWorkspace, 'id'>>({
			query: ({ id }) => ({
				url: `workspace/${id}`,
				method: 'GET',
			}),
			providesTags: (result, error, { id }) => [{ type: ETagTypes.WORKSPACES, id }],
		}),
		addWorkspace: builder.mutation<IWorkspace, IWorkspace>({
			query: body => ({
				url: 'workspace',
				method: 'POST',
				body,
			}),
			invalidatesTags: [ETagTypes.WORKSPACES],
		}),
		editWorkspace: builder.mutation<IWorkspace, IWorkspace>({
			query: body => ({
				url: `workspaces/${body.id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: (result, error, { id }) => [
				{ type: ETagTypes.WORKSPACES, id },
			],
		}),
		deleteWorkspace: builder.mutation<IWorkspace, Pick<IWorkspace, 'id'>>({
			query: ({ id }) => ({
				url: `workspaces/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [ETagTypes.WORKSPACES],
		}),
	}),
});

export const {
	useGetWorkspacesQuery,
	useGetWorkspaceByIdQuery,
	useAddWorkspaceMutation,
	useEditWorkspaceMutation,
	useDeleteWorkspaceMutation,
} = workspaceApi;
