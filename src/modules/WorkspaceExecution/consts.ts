/* eslint-disable @typescript-eslint/naming-convention */
import { type IExecuteVisitationFormValues } from '../../form/schemas/executeVisitation';
import { type IVIsitationCreation } from '../../types/IVisitation';
import { type ITariff } from '../../types';
import type dayjs from 'dayjs';
require('dayjs/locale/ru');

export const prepareValues = (
	values: IExecuteVisitationFormValues,
	workspace_id: string,
	user_id: string): IVIsitationCreation => {
	return {
		workspace_id,
		user_id,
		tariff_id: values.tariff_id,
		start_date: values.startDate.toDate().toISOString().replace('Z', ''),
		end_date: values.endDate.toDate().toISOString().replace('Z', ''),
	};
};

export const getTariff = (tariff_id: string, tariffs?: ITariff[]): ITariff | undefined => {
	return tariffs?.find((tariff) => tariff.id === tariff_id);
};

export const getEndDate = (startDate?: dayjs.Dayjs, tariff?: ITariff) => {
	if (!startDate) {
		return undefined;
	}
	if (!tariff?.interval) {
		return startDate.add(1, 'hour');
	}
	return startDate.add(1, tariff.interval as dayjs.ManipulateType);
};

export const getFormattedDate = (date?: dayjs.Dayjs): string | undefined => {
	return date?.locale('ru').format('HH:MM D MMMM') || '...';
};
