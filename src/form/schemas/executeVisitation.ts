import * as yup from 'yup';
import { REQUIRED_FIELD } from './errorMessages';
import { type IVisitation } from '../../types/IVisitation';
import type dayjs from 'dayjs';

export interface IExecuteVisitationFormValues extends IVisitation {
	agree: boolean;
	dates: [dayjs.Dayjs, dayjs.Dayjs];
}

export const executeVisitationSchema = yup.object<IExecuteVisitationFormValues>({
	agree: yup.boolean().required(REQUIRED_FIELD).isTrue(REQUIRED_FIELD),
	dates: yup.array().required(REQUIRED_FIELD),
}).required();
