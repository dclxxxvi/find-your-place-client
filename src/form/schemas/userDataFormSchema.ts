import { type IUser } from '../../types/IUser';
import * as yup from 'yup';
import { REQUIRED_FIELD } from './errorMessages';

export interface IUserDataFormValues extends IUser {
}

export const userDataFormSchema = yup.object<IUserDataFormValues>({
	email: yup.string().required(REQUIRED_FIELD),
	name: yup.string().required(REQUIRED_FIELD),
	surname: yup.string().required(REQUIRED_FIELD),
	phone: yup.string(),
}).required();
