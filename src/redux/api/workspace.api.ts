import { commonApi } from './common.api';
import { ETagTypes, getFromFormData } from './consts';
import { type IWorkspace, type IWorkspaceSearchParams } from '../../types';

const workspaceApi = commonApi.injectEndpoints({
	overrideExisting: false,
	endpoints: builder => ({
		getWorkspaces: builder.query<IWorkspace[], IWorkspaceSearchParams>({
			query: (params) => ({
				url: 'workspaces',
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
				url: `workspaces/${id}`,
				method: 'GET',
			}),
			providesTags: (result, error, { id }) => [{ type: ETagTypes.WORKSPACES, id }],
		}),
		addWorkspace: builder.mutation<IWorkspace, FormData>({
			query: body => ({
				url: 'workspaces',
				method: 'POST',
				body,
			}),
			invalidatesTags: [ETagTypes.WORKSPACES],
		}),
		editWorkspace: builder.mutation<IWorkspace, FormData>({
			query: body => ({
				url: `workspaces/${getFromFormData(body, 'id')}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: (result, error, arg) => [
				{ type: ETagTypes.WORKSPACES, id: getFromFormData(arg, 'id') },
			],
		}),
		deleteWorkspace: builder.mutation<IWorkspace, FormData>({
			query: body => ({
				url: `workspaces/${getFromFormData(body, 'id')}`,
				method: 'DELETE',
				body,
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
