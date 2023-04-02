import { type IUser } from '../../types/IUser';
import * as yup from 'yup';
import { EMAIL_FIELD, REQUIRED_FIELD } from './errorMessages';

export interface ILoginFormValues extends Pick<IUser, 'email'> {
	password: string;
}

export const loginSchema = yup.object<ILoginFormValues>({
	email: yup.string().email(EMAIL_FIELD).required(REQUIRED_FIELD),
	password: yup.string().required(REQUIRED_FIELD),
}).required();
