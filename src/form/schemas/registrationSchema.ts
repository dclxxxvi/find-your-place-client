import { type IUser } from '../../types/IUser';
import * as yup from 'yup';
import { EMAIL_FIELD, MUST_MATCH_PASSWORD, REQUIRED_FIELD } from './errorMessages';

export interface IRegistrationFormValues extends Pick<IUser, 'email'> {
	password: string;
	confirm_password: string;
}

export const registrationSchema = yup.object<IRegistrationFormValues>({
	email: yup.string().email(EMAIL_FIELD).required(REQUIRED_FIELD),
	password: yup.string().required(REQUIRED_FIELD),
	confirm_password: yup.string().required(REQUIRED_FIELD)
		.oneOf([yup.ref('password')], MUST_MATCH_PASSWORD),
}).required();
