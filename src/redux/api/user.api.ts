import { commonApi } from './common.api';
import { type IUser } from '../../types/IUser';
import { type IAuthResponse } from '../../types/IAuthResponse';

const userApi = commonApi.injectEndpoints({
	overrideExisting: false,
	endpoints: builder => ({
		getUser: builder.query<IUser, null>({
			query: () => ({
				url: 'user',
				method: 'GET',
			}),
		}),
		login: builder.mutation<IAuthResponse, Pick<IUser, 'username' | 'password'>>({
			query: body => ({
				url: 'login',
				method: 'POST',
				body,
			}),
			transformResponse: (response: IAuthResponse) => {
				localStorage.setItem('access-token', response.access_token);
				return response;
			},
		}),

	}),
});

export const {
	useLoginMutation,
} = userApi;
