import { type IUser } from '../../types';
import * as yup from 'yup';
import { EMAIL_FIELD, REQUIRED_FIELD } from './errorMessages';

export interface IUserDataFormValues extends IUser {
}

export const userDataSchema = yup.object<IUserDataFormValues>({
	email: yup.string().email(EMAIL_FIELD).required(REQUIRED_FIELD),
	first_name: yup.string().required(REQUIRED_FIELD),
	last_name: yup.string().required(REQUIRED_FIELD),
	phone: yup.string(),
}).required();
