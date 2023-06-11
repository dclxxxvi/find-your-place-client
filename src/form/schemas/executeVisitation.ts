import * as yup from 'yup';
import { REQUIRED_FIELD } from './errorMessages';
import { type IVisitation } from '../../types/IVisitation';
import type dayjs from 'dayjs';

export interface IExecuteVisitationFormValues extends IVisitation {
	agree: boolean;
	dates: [dayjs.Dayjs, dayjs.Dayjs];
	tariff_id: string;
}

export const executeVisitationSchema = yup.object<IExecuteVisitationFormValues>({
	agree: yup.boolean().required(REQUIRED_FIELD).isTrue(REQUIRED_FIELD),
	dates: yup.tuple([yup.object(), yup.object()]).required(REQUIRED_FIELD),
	tariff_id: yup.string().required(REQUIRED_FIELD),
}).required();
