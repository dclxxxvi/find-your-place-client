import * as yup from 'yup';
import { REQUIRED_FIELD } from './errorMessages';
import { type IVisitation } from '../../types/IVisitation';

export interface IExecuteVisitationFormValues extends IVisitation {
	agree: boolean;
}

export const executeVisitation = yup.object<IExecuteVisitationFormValues>({
	agree: yup.boolean().required(REQUIRED_FIELD).isTrue(REQUIRED_FIELD),
}).required();
