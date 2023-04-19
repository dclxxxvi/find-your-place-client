import { type IUser } from '../../types/IUser';
import * as yup from 'yup';
import { REQUIRED_FIELD } from './errorMessages';

export interface ILoginFormValues extends Pick<IUser, 'username' | 'password'> {
}

export const loginSchema = yup.object<ILoginFormValues>({
	username: yup.string().required(REQUIRED_FIELD),
	password: yup.string().required(REQUIRED_FIELD),
}).required();
