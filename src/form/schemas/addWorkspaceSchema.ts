import * as yup from 'yup';
import { type IWorkspace } from '../../types';
import { REQUIRED_FIELD } from './errorMessages';

export interface IAddWorkspaceFormValues extends IWorkspace {
	agree: boolean;
}

export const addWorkspaceSchema = yup.object<IAddWorkspaceFormValues>({
	location_value: yup.string().required(REQUIRED_FIELD),
	title: yup.string().required(REQUIRED_FIELD),
	description: yup.string().required(REQUIRED_FIELD),
	agree: yup.boolean().required(REQUIRED_FIELD).isTrue(REQUIRED_FIELD),
}).required();
