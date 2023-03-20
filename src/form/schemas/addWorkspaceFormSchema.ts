import * as yup from 'yup';
import { type IWorkspace } from '../../types';

export interface IAddWorkspaceFormValues extends IWorkspace {
	agree: boolean;
}

export const addWorkspaceFormSchema = yup.object<IAddWorkspaceFormValues>({
	address: yup.string().required(),
	title: yup.string().required(),
	description: yup.string().required(),
}).required();
