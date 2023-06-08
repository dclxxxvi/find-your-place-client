import { commonApi } from './common.api';
import { ETagTypes, prepareAddWorkspaceBody, prepareParams } from './consts';
import { type IResponse, type IWorkspace, type IWorkspaceParams, type IPaginatedResult } from '../../types';
import { type IAddWorkspaceFormValues } from '../../form/schemas/addWorkspaceSchema';

const workspaceApi = commonApi.injectEndpoints({
	overrideExisting: false,
	endpoints: builder => ({
		getWorkspaces: builder.query<IResponse<IPaginatedResult<IWorkspace>>, IWorkspaceParams>({
			query: (params) => ({
				url: `workspace?${prepareParams(params)}`,
				method: 'GET',
			}),
			providesTags: (result) => [
				ETagTypes.WORKSPACES,
				...result?.data.items.map(({ id }) => ({ type: ETagTypes.WORKSPACES, id })) || [],
			],
			// serializeQueryArgs: ({ endpointName }) => endpointName,
			// merge: (currentCache, newItems) => {
			// 	currentCache.data.items.push(...newItems.data.items);
			// },
			// forceRefetch({ currentArg, previousArg }) {
			// 	return currentArg !== previousArg;
			// },
		}),
		getUserWorkspaces: builder.query<IResponse<IPaginatedResult<IWorkspace>>, IWorkspaceParams>({
			query: (params) => ({
				url: 'user/workspaces',
				method: 'GET',
				params,
			}),
			providesTags: (result) => [
				ETagTypes.USER_WORKSPACES,
				...result?.data.items.map(({ id }) => ({ type: ETagTypes.USER_WORKSPACES, id })) || [],
			],
		}),
		getWorkspaceById: builder.query<IResponse<IWorkspace>, Pick<IWorkspace, 'id'>>({
			query: ({ id }) => ({
				url: `workspace/${id}`,
				method: 'GET',
			}),
			providesTags: (result, error, { id }) => [{ type: ETagTypes.WORKSPACES, id }],
		}),
		addWorkspace: builder.mutation<IWorkspace, IAddWorkspaceFormValues>({
			query: body => ({
				url: 'workspace',
				method: 'POST',
				body: prepareAddWorkspaceBody(body),
			}),
			invalidatesTags: [ETagTypes.WORKSPACES, ETagTypes.USER_WORKSPACES],
		}),
		editWorkspace: builder.mutation<IWorkspace, IWorkspace>({
			query: body => ({
				url: `workspaces/${body.id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: (result, error, { id }) => [
				{ type: ETagTypes.WORKSPACES, id },
				{ type: ETagTypes.USER_WORKSPACES, id },
			],
		}),
		deleteWorkspace: builder.mutation<IWorkspace, Pick<IWorkspace, 'id'>>({
			query: ({ id }) => ({
				url: `workspaces/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [ETagTypes.WORKSPACES, ETagTypes.USER_WORKSPACES],
		}),
	}),
});

export const {
	useGetWorkspacesQuery,
	useGetUserWorkspacesQuery,
	useGetWorkspaceByIdQuery,
	useAddWorkspaceMutation,
	useEditWorkspaceMutation,
	useDeleteWorkspaceMutation,
} = workspaceApi;
