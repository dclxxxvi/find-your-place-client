import { type IUser } from '../../types';
import * as yup from 'yup';
import { MUST_MATCH_PASSWORD, REQUIRED_FIELD } from './errorMessages';

export interface IRegistrationFormValues extends IUser {
	confirm_password: string;
}

export const registrationSchema = yup.object<IRegistrationFormValues>({
	username: yup.string().required(REQUIRED_FIELD),
	password: yup.string().required(REQUIRED_FIELD),
	last_name: yup.string().required(REQUIRED_FIELD),
	first_name: yup.string().required(REQUIRED_FIELD),
	confirm_password: yup.string().required(REQUIRED_FIELD)
		.oneOf([yup.ref('password')], MUST_MATCH_PASSWORD),
}).required();
