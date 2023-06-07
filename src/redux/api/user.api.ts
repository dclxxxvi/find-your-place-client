import { commonApi } from './common.api';
import { type IUser, type IAuthResponse, type IResponse } from '../../types';
import { ETagTypes } from './consts';

const userApi = commonApi.injectEndpoints({
	overrideExisting: false,
	endpoints: builder => ({
		getUser: builder.query<IResponse<IUser>, null>({
			query: () => ({
				url: 'user',
				method: 'GET',
			}),
			providesTags: [ETagTypes.USER],
		}),
		login: builder.mutation<IAuthResponse, Pick<IUser, 'username' | 'password'>>({
			query: body => ({
				url: 'login',
				method: 'POST',
				body,
			}),
			transformResponse: (response: IAuthResponse) => {
				localStorage.setItem('access-token', `Bearer ${response.access_token}`);
				return response;
			},
			invalidatesTags: [ETagTypes.USER],
		}),
		registration: builder.mutation<IAuthResponse, IUser>({
			query: body => ({
				url: 'user/registartion',
				method: 'POST',
				body,
			}),
			transformResponse: (response: IAuthResponse) => {
				localStorage.setItem('access-token', `Bearer ${response.access_token}`);
				return response;
			},
			invalidatesTags: [ETagTypes.USER],
		}),
		editUser: builder.mutation<IUser, IUser>({
			query: body => ({
				url: 'user',
				method: 'PATCH',
				body,
			}),
			invalidatesTags: [ETagTypes.USER],
		}),
	}),
});

export const {
	useGetUserQuery,
	useRegistrationMutation,
	useLoginMutation,
	useEditUserMutation,
} = userApi;
