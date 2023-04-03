import * as yup from 'yup';
import { type IWorkspace } from '../../types';
import { REQUIRED_FIELD } from './errorMessages';

export interface IAddWorkspaceFormValues extends IWorkspace {
	agree: boolean;
}

export const addWorkspaceSchema = yup.object<IAddWorkspaceFormValues>({
	address: yup.object({
		value: yup.string()
		// .required(REQUIRED_FIELD)
		,
	}),	// .required()

	title: yup.string().required(REQUIRED_FIELD),
	description: yup.string().required(REQUIRED_FIELD),
}).required();
