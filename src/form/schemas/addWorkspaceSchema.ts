import * as yup from 'yup';
import { type IBaseType, type IWorkspace } from '../../types';
import { MAX_ELEMENTS, MIN_ELEMENTS, REQUIRED_FIELD } from './errorMessages';

export interface IAddWorkspaceFormValues extends IWorkspace {
	agree: boolean;
	parametersToAdd: IBaseType[][];
}

export const addWorkspaceSchema = yup.object<IAddWorkspaceFormValues>({
	location_value: yup.string().required(REQUIRED_FIELD),
	title: yup.string().required(REQUIRED_FIELD),
	description: yup.string().required(REQUIRED_FIELD),
	agree: yup.boolean().required(REQUIRED_FIELD).isTrue(REQUIRED_FIELD),
	tariffs: yup.array(
		yup.object({
			title: yup.string().required(REQUIRED_FIELD),
			cost: yup.string().required(REQUIRED_FIELD),
			interval: yup.string().required(REQUIRED_FIELD),
		}),
	).required(REQUIRED_FIELD).min(1, MIN_ELEMENTS(1)).max(4, MAX_ELEMENTS(4)),
}).required();
